import React, {useContext, useEffect, useState} from "react"
import CatalogItemImg from "../../media/catalog_item.png";
import Basket from "../../media/basket.png";
import {Link} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {useParams} from "react-router";

function Product() {
    let {user, authTokens} = useContext(AuthContext)
    let [product, setProduct] = useState([])
    // let [amountOfRAM, setAmountOfRAM] = useState([])
    // let [processorSeries, setProcessorSeries] = useState([])
    // let [HDDVolume, setHDDVolume] = useState([])
    // let [SSDVolume, setSSDVolume] = useState([])
    // let [videoCard, setVideoCard] = useState([])
    let [description, setDescription] = useState(true)
    const toggleDescription = () => setDescription(value => !value)

    const params = useParams()
    let category_name = ""
    let request = ""

    switch(params.category) {
        case 'system_units':
            category_name = "Системные блоки"
            request = "system_unit_list"
            break

        case 'computer_kits':
            category_name = "Компьютеры в комплекте"
            request = "computer_kit_list"
            break

        case 'monitors':
            category_name = "Мониторы"
            request = "monitor_list"
            break

        case 'special_offers':
            category_name = "Спецпредложения"
            request = "special_offer_list"
            break
    }

    useEffect(() => {
        fetch(
            `http://127.0.0.1:8000/product/${params.id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    async function addBasketItem(id) {
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
        window.location.reload(false);
    }

    console.log(product)

    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-1 px-1/10">
                <p className="h-fit w-fit text-xs font-light text-mainGray">
                    <Link to="/catalog" className="hover:underline">Каталог товаров</Link>
                    <span> > </span>
                    {((params.category === 'system_units')||(params.category === 'computer_kits'))
                        ?
                            <>
                                <Link to="/catalog/computers" className="hover:underline">Компьютеры</Link>
                                <span> > </span>
                                <Link to={`/catalog/computers/${params.category}`} className="hover:underline">{category_name}</Link>
                            </>
                        :
                            <Link to={`/catalog/${params.category}`} className="hover:underline">{category_name}</Link>
                    }
                </p>
                <div/>
            </div>
            {product.product
                ?
                <div className="flex flex-col px-48">
                        <div className="bg-mainWhite p-10 drop-shadow-sm rounded-xl flex mt-10 w-full">
                            <div className="flex flex-col">
                                <div className="w-64 h-64 shrink-0 grow-0 m-5">
                                    <img src={product.product.picture ? "http://localhost:8000"+product.product.picture : CatalogItemImg} alt={product.name} className="h-full w-full object-contain"/>
                                </div>
                                <div className="w-full flex justify-between items-center self-end mt-5">
                                    <h2 className="text-2xl">{product.product.price} ₽</h2>
                                    {product.product.basket_amount ?
                                        <Link to="/basket" className="bg-grayWhite h-12 px-4 drop-shadow-sm rounded-xl flex items-center justify-center">
                                            <p className="whitespace-nowrap">В корзине</p>
                                        </Link>
                                        :
                                        <button className="bg-mainOrange drop-shadow-sm rounded-xl w-fit flex justify-center items-center p-3"
                                                onClick={() => addBasketItem(product.product.id)}
                                        >
                                            <img src={Basket} alt="Корзина" className="h-8"/>
                                            <p className="text-mainWhite ml-3">В корзину</p>
                                        </button>
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col items-start ml-10 w-96">
                                <h1 className="text-2xl mb-5">{product.product.name}</h1>
                                {description
                                    ?
                                        <div className="flex mb-7 font-light">
                                            <button
                                                className="border border-x-0 border-t-0 border-b-3 border-mainOrange py-1 px-2"
                                                onClick={toggleDescription}
                                            >Краткое описание
                                            </button>
                                            <button
                                                className="border border-x-0 border-t-0 border-b-3 border-grayWhite py-1 px-2"
                                                onClick={toggleDescription}
                                            >Все характеристики
                                            </button>
                                        </div>
                                    :
                                        <div className="flex mb-7 font-light">
                                            <button
                                                className="border border-x-0 border-t-0 border-b-3 border-grayWhite py-1 px-2"
                                                onClick={toggleDescription}
                                            >Краткое описание
                                            </button>
                                            <button
                                                className="border border-x-0 border-t-0 border-b-3 border-mainOrange py-1 px-2"
                                                onClick={toggleDescription}
                                            >Все характеристики
                                            </button>
                                        </div>
                                }
                                {description
                                    ?
                                        <p className="font-light">{product.product.short_description}</p>
                                    :
                                        <p className="font-light">*здесь должны быть детали*</p>
                                }
                            </div>
                        </div>
                     </div>
                // </div>
                :
                    null
            }
        </div>
    );
}

export default Product;