import Year1999 from "../../media/year_1999.png";
import Delivery from "../../media/delivery.png";
import Chat from "../../media/chat.png";
import Gears from "../../media/gears.png";
import Service from "../../media/service.png";
import Wholesale from "../../media/wholesale.png";
import CatalogItemImg from "../../media/catalog_item.png";
import Basket from "../../media/basket.png";
import {Link, useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../../context/AuthContext";

function MainPage() {

    let {user, authTokens} = useContext(AuthContext)
    let [products, setProducts] = useState([])
    let navigate = useNavigate()

    const getProductList = async () => {
        if (authTokens) {
            await fetch(
                `http://127.0.0.1:8000/products/main_page/`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authTokens.access}`,
                    },
                }
            )
                .then(res => res.json())
                .then(data => setProducts(data));
        }
        else {
            await fetch(
                `http://127.0.0.1:8000/products/main_page/`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(res => res.json())
                .then(data => setProducts(data));
        }
    }

    useEffect(() => {
        getProductList();
    }, [])

    console.log(products)

    async function addBasketItem(id) {
        if (authTokens) {
            await fetch(
                'http://127.0.0.1:8000/basket_item', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authTokens.access}`,
                    },
                    body: JSON.stringify({
                        'client': user.id,
                        'product': id
                    })
                }
            )
           getProductList();
        }
        else {
            navigate('/login')
        }
    }

    return (
        <div className="flex flex-col grow items-center px-1/10">
            <h1 className="text-3xl font-bold mb-10">Магазин компьютерной техники Online City</h1>
            <div className="flex flex-wrap justify-center gap-5 font-light text-lg mb-10 3xl:w-4/5">
                <div className="w-45 lg:w-2/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Year1999} className="w-16 mr-5"/>
                    <p>Продаём быстрые, надёжные и недорогие компьютеры в Москве с 1999 года</p>
                </div>
                <div className="w-45 lg:w-2/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Delivery} className="w-16 mr-5"/>
                    <p>Сотрудничаем с логистической компанией, доставляем товар в любую точку страны</p>
                </div>
                <div className="w-45 lg:w-2/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Chat} className="w-16 mr-5"/>
                    <p>Бесплатно консультируем и помогаем подобрать комплектующие</p>
                </div>
                <div className="w-45 lg:w-2/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Gears} className="w-16 mr-5"/>
                    <p>Бесплатно собираем компьютеры и устанавливаем программное обеспечение</p>
                </div>
                <div className="w-45 lg:w-2/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Service} className="w-16 mr-5"/>
                    <p>Осуществляем бесплатный гарантийный ремонт</p>
                </div>
                <div className="w-45 lg:w-2/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Wholesale} className="w-16 mr-5"/>
                    <p>Делаем скидки оптовым покупателям</p>
                </div>
            </div>
            <h1 className="text-3xl font-bold mb-10">Популярные товары</h1>
            <div className="flex flex-wrap justify-evenly gap-5">
                {products.map((product) => (
                    <div className="w-72 bg-mainWhite py-5 px-10 drop-shadow-sm rounded-xl flex flex-col items-center hover:drop-shadow-lg duration-300">
                        <div className="w-64 h-64 shrink-0 grow-0 m-5">
                            <img src={product.picture ? "http://localhost:8000"+product.picture : CatalogItemImg} className="h-full w-full object-contain"/>
                        </div>
                        <h2 className="hover:underline text-xl mb-5">{product.name}</h2>
                        <p className="font-light mb-5 grow">{product.short_description}</p>
                        <div className="w-full flex justify-between items-center self-end">
                            <h2 className="text-2xl">{product.price} ₽</h2>
                            {product.basket_amount ?
                                <Link to="/basket" className="data-hover bg-grayWhite hover:bg-mainOrange h-12 w-24 drop-shadow-sm rounded-xl flex items-center justify-center duration-500">
                                    <span className="whitespace-nowrap">В корзине</span>
                                </Link>
                                :
                                <button className="bg-mainOrange drop-shadow-sm rounded-xl h-12 w-12 flex justify-center items-center hover:scale-110 duration-500"
                                        onClick={() => addBasketItem(product.id)}
                                >
                                    <img src={Basket} className="h-8"/>
                                </button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MainPage;