import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import CatalogItemImg from "../media/catalog_item.png";
import Minus from "../media/minus.png";
import Plus from "../media/plus.png";
import {Link} from "react-router-dom";

function Basket(){

    let {authTokens, user} = useContext(AuthContext)
    let [basketItems, setBasketItems] = useState([])

    const getBasket = async () => {
        await fetch(
            'http://127.0.0.1:8000/basket', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setBasketItems(data))
    }

    useEffect(() => {
        getBasket();
    }, [])

    console.log(basketItems)

    function orderSum() {
        let sum = 0
        basketItems.map((basketItem, id) => {
            sum += basketItem.price * basketItem.amount
        })
        return sum
    }

    async function deleteBasketItem(id) {
        await fetch(
            `http://127.0.0.1:8000/basket_item/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
        getBasket();
    }

    async function changeBasketItemAmount(e, id, message) {
        e.preventDefault();
        await fetch(
            `http://127.0.0.1:8000/basket_item/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
                body: JSON.stringify({
                    'message': message
                })
            }
        )
        getBasket();
    }

    return (
        <div className="flex flex-col items-center px-1/10">
            <h1 className="text-3xl font-bold mb-10">Корзина</h1>
            <div className="flex gap-10">
                <div className="flex flex-col items-center">
                    {basketItems.map((basketItem) => (
                        <div className="bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center justify-center mb-5 w-fit">
                            <div className="w-40 h-40 shrink-0 grow-0">
                                <img src={basketItem.picture ? "http://localhost:8000"+basketItem.picture : CatalogItemImg} alt="your image" className="h-full w-full object-contain"/>
                            </div>
                            <div className="mx-10 w-1/5">
                                <Link to="catalog_item"><h2 className="hover:underline text-xl mb-5">{basketItem.name}</h2></Link>
                                <p className="font-light">{basketItem.short_description}</p>
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                {(basketItem.amount === 1)
                                    ?
                                        <button className="opacity-50 bg-grayWhite h-10 w-10 drop-shadow-sm rounded-xl flex items-center justify-center" disabled>
                                            <img src={Minus}/>
                                        </button>
                                    :
                                        <button className="bg-grayWhite h-10 w-10 drop-shadow-sm rounded-xl flex items-center justify-center"
                                                onClick={(e) => changeBasketItemAmount(e, basketItem.id, "minus")}
                                        >
                                            <img src={Minus}/>
                                        </button>
                                }
                                <h2 className="text-2xl">{basketItem.amount}</h2>
                                <button className="bg-grayWhite h-10 w-10 drop-shadow-sm rounded-xl flex items-center justify-center"
                                        onClick={(e) => changeBasketItemAmount(e, basketItem.id, "plus")}
                                >
                                    <img src={Plus}/>
                                </button>
                                <h2 className="text-2xl mx-10 shrink-0">{basketItem.price} ₽</h2>
                                <button className="bg-grayWhite h-10 w-10 drop-shadow-sm rounded-xl flex items-center justify-center"
                                        onClick={() => deleteBasketItem(basketItem.id)}
                                >
                                    <img src={Plus} className="rotate-45"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-mainWhite py-10 px-10 drop-shadow-sm rounded-xl flex flex-col h-fit gap-5">
                    <p className="text-xl text-mainGray shrink-0">{basketItems.length} товара</p>
                    <p className="text-3xl shrink-0">{orderSum()} ₽</p>
                    <Link to="/checkout" className="bg-mainOrange rounded-xl justify-center items-center p-5">
                        <p className="text-mainWhite whitespace-nowrap">Перейти к оформлению</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default Basket;