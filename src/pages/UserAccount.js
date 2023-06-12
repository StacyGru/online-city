import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

function UserAccount() {

    let navigate = useNavigate()
    let {logoutUser, authTokens, user} = useContext(AuthContext)
    let [orders, setOrders] = useState([])

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
    }, [])

    console.log(orders)

    if (user && (user.role === "клиент")) {
        return (
            <div className="flex flex-col items-center px-10">
                <h1 className="text-3xl font-bold mb-10">Личный кабинет</h1>
                <div className="w-3/4 bg-mainWhite p-10 drop-shadow-sm rounded-xl flex flex-col font-light">
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
                                    {order.order_items.map((order_item) => (
                                        <div className="mb-2">
                                            <p className="text-sm">{order_item.name}</p>
                                            <p className="text-sm text-mainGray">{order_item.amount} шт. {order_item.price * order_item.amount} ₽</p>
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
                                    {order.order_items.map((order_item) => (
                                        <div className="mb-2">
                                            <p className="text-sm">{order_item.name}</p>
                                            <p className="text-sm text-mainGray">{order_item.amount} шт. {order_item.price * order_item.amount} ₽</p>
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
    } else {
        navigate('/login')
    }
}

export default UserAccount;