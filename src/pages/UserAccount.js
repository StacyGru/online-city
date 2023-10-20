import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import CatalogItemImg from "../media/catalog_item.png";
import Delete from "../media/delete.png";
import Edit from "../media/edit.png";
import Plus from "../media/plus.png";
import Popup from "../components/PopUp";

function UserAccount() {
    let navigate = useNavigate()
    let {logoutUser, authTokens, user} = useContext(AuthContext)
    let [orders, setOrders] = useState([])
    let [products, setProducts] = useState([])

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    useEffect(() => {
        fetch(
            'http://127.0.0.1:8000/order_list', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setOrders(data))
        fetch(
            'http://127.0.0.1:8000/products/system_unit_list/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(orders)
    console.log(products)

    if (user && (user.role === "клиент")) {
        return (
            <div className="flex flex-col items-center px-10">
                <h1 className="text-3xl font-bold mb-10">Личный кабинет</h1>
                <div className="bg-mainWhite p-10 drop-shadow-sm rounded-xl flex flex-col font-light">
                    {orders.length > 0
                        ?
                            <table className="text-left border-spacing-5">
                            <thead className="border-mainOrange border-b-2 border-opacity-50">
                            <tr>
                                <th className="font-normal">№ заказа</th>
                                <th className="font-normal">Дата и время заказа</th>
                                <th className="font-normal">Кол-во товаров</th>
                                <th className="font-normal">Список товаров</th>
                                <th className="font-normal">Сумма</th>
                                <th className="font-normal">Способ получения</th>
                                <th className="font-normal">Статус</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.map((order) => (
                                <tr className="hover:bg-grayWhite align-top">
                                    <td className="text-center font-normal">{order.id}</td>
                                    <td>{order.order_date_and_time}</td>
                                    <td className="text-center">{order.order_items.length}</td>
                                    <td>
                                        {order.order_items.map((orderItem) => (
                                            <div className="mb-2">
                                                <p className="text-sm">{orderItem.name}</p>
                                                <p className="text-sm text-mainGray">{orderItem.amount} шт. {orderItem.price * orderItem.amount} ₽</p>
                                            </div>
                                        ))}
                                    </td>
                                    <td>{order.sum} ₽</td>
                                    <td>{order.delivery ? <p>доставка</p> : <p>самовывоз</p>}</td>
                                    <td>{order.status}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        :
                            <p>Список ваших заказов пуст</p>
                    }
                </div>
                <button type="submit"
                        className="w-fit justify-self-center bg-mainOrange text-grayWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10"
                        onClick={logoutUser}
                >
                    <p>Выйти</p>
                </button>
            </div>
        )
    }
    if (user && (user.role === "менеджер")) {
        return (
            <div className="flex flex-col items-center px-10">
                <h1 className="text-3xl font-bold mb-10">Личный кабинет</h1>
                <div className="bg-mainWhite p-10 drop-shadow-sm rounded-xl flex flex-col font-light">
                    <table className="text-left border-spacing-5">
                        <thead className="border-mainOrange border-b-2 border-opacity-50">
                        <tr>
                            <th className="font-normal">№ заказа</th>
                            <th className="font-normal">Дата и время заказа</th>
                            <th className="font-normal">Клиент</th>
                            <th className="font-normal">Кол-во товаров</th>
                            <th className="font-normal">Список товаров</th>
                            <th className="font-normal">Сумма</th>
                            <th className="font-normal">Способ получения</th>
                            <th className="font-normal">Статус</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order) => (
                            <tr className="hover:bg-grayWhite align-top">
                                <td className="text-center font-normal hover:underline">
                                    <Link to={`/order/${order.id}`} className="w-full h-full block">{order.id}</Link>
                                </td>
                                <td>{order.order_date_and_time}</td>
                                <td>{order.client}</td>
                                <td className="text-center">{order.order_items.length}</td>
                                <td>
                                    {order.order_items.map((orderItem) => (
                                        <div className="mb-2">
                                            <p className="text-sm">{orderItem.name}</p>
                                            <p className="text-sm text-mainGray">{orderItem.amount} шт. {orderItem.price * orderItem.amount} ₽</p>
                                        </div>
                                    ))}
                                </td>
                                <td>{order.sum} ₽</td>
                                <td>{order.delivery ? <p>доставка</p> : <p>самовывоз</p>}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <button type="submit"
                        className="w-fit justify-self-center bg-mainOrange text-mainWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10"
                        onClick={logoutUser}
                >
                    <p>Выйти</p>
                </button>
            </div>
        )
    }
    if (user && (user.role === "администратор")) {
        return (
            <>
            {showPopup && <Popup onClose={togglePopup} />}
            <div className="flex flex-col items-center px-10">
                <h1 className="text-3xl font-bold mb-10">Личный кабинет</h1>
                <div className="flex flex-row px-10 gap-10">
                    <div className="flex flex-col items-center">
                        <div className="bg-mainWhite p-10 drop-shadow-sm rounded-xl flex flex-col gap-3 h-fit">
                            <h2 className="text-2xl font-normal">Каталог</h2>
                            <p>Компьютеры</p>
                            <Link to="/" className="ml-5 text-mainOrange hover:underline">Системные блоки</Link>
                            <Link to="/" className="ml-5 hover:underline">Компьютеры в комплекте</Link>
                            <Link to="/" className="hover:underline">Мониторы</Link>
                            <Link to="/" className="hover:underline">Спецпредложения</Link>
                        </div>
                        <button type="submit"
                                className="w-fit justify-self-center bg-mainOrange text-mainWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10"
                                onClick={logoutUser}
                        >
                            <p>Выйти</p>
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <div className="grid grid-cols-3 gap-5">
                            {products.map((product) => (
                                <div className="w-72 bg-mainWhite py-5 px-10 drop-shadow-sm rounded-xl flex flex-col items-center">
                                    <div className="w-64 h-64 shrink-0 grow-0 m-5">
                                        <img src={product.picture ? "http://localhost:8000"+product.picture : CatalogItemImg} alt={product.name} className="h-full w-full object-contain"/>
                                    </div>
                                    <h2 className="text-xl mb-5">{product.name}</h2>
                                    <p className="font-light grow">{product.short_description}</p>
                                    <div className="w-full flex justify-between items-center self-end mt-5">
                                        <Link to={`/product/system_unit/${product.id}`} className="bg-grayWhite h-10 w-10 drop-shadow-sm rounded-xl flex items-center justify-center">
                                            <img src={Edit} alt="Редактировать" className="h-6"/>
                                        </Link>
                                        <button to="/basket"
                                                className="bg-grayWhite h-10 w-10 drop-shadow-sm rounded-xl flex items-center justify-center"
                                                onClick={togglePopup}
                                        >
                                            <img src={Delete} alt="Удалить" className="h-6"/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/system_unit/add" className="w-fit text-xl bg-mainWhite drop-shadow-sm rounded-xl h-fit py-3 px-5 mx-auto mt-10 flex items-center gap-3"
                        >Добавить новый товар
                            <button className="bg-grayWhite h-8 w-8 drop-shadow-sm rounded-xl flex items-center justify-center"

                            >
                                <img src={Plus} alt="Плюс"/>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
            </>
        )
    }
    else {
        navigate('/login')
    }
}

export default UserAccount;