import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import Minus from "../media/minus.png";
import Plus from "../media/plus.png";

function Order() {

    const params = useParams()

    let navigate = useNavigate()
    let {authTokens, user} = useContext(AuthContext)
    let [order, setOrder] = useState([])

    const [city, setCity] = useState()
    const [street, setStreet] = useState()
    const [building, setBuilding] = useState()
    const [entrance, setEntrance] = useState()
    const [floor, setFloor] = useState()
    const [apartment, setApartment] = useState()
    const [date, setDate] = useState()
    const [time1, setTime1] = useState()
    const [time2, setTime2] = useState()
    const [status, setStatus] = useState()

    const getOrder = async () => {
        let res = await fetch(
            `http://127.0.0.1:8000/order/${params.id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            })
        let data = await res.json();
        setOrder(data);
    }
    console.log(order)

    useEffect( () => {
        getOrder()
    }, [])

    async function deleteOrderItem(e, id) {
        e.preventDefault();
        await fetch(
            `http://127.0.0.1:8000/order_item/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
        getOrder();
    }

    async function changeOrderItemAmount(e, id, message) {
        e.preventDefault();
        await fetch(
            `http://127.0.0.1:8000/order_item/${id}/`, {
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
        getOrder();
    }

    function orderSum() {
        let sum = 0
        order.order_items.map((orderItem) => {
            sum += orderItem.price * orderItem.amount
        })
        return sum
    }

    async function save() {
        let response = await fetch(
            `http://127.0.0.1:8000/order/${params.id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
                body: JSON.stringify({
                    'delivery': order.delivery,
                    'sum': orderSum(),
                    'city': city,
                    'street': street,
                    'building_number': building,
                    'entrance_number': entrance,
                    'floor': floor,
                    'apartment_number': apartment,
                    'delivery_date': date,
                    'delivery_time1': time1,
                    'delivery_time2': time2,
                    'status': status ? status : order.status
                })
            }
        )
        if (response.status === 200) {
            navigate('/user')
        }
    }

    if (user && (user.role === "менеджер")) {
        return (
            <div className="flex flex-col items-center px-10">
                <h1 className="text-3xl font-bold mb-10">Заказ №{order.id}</h1>
                <div className="bg-mainWhite p-10 drop-shadow-sm rounded-xl flex flex-col">
                    <form className="flex">
                        {order.order_items
                            ?
                                <div className="w-full grid grid-order items-center gap-8 font-light">
                                    <p className="font-normal">Дата и время заказа:</p>
                                    <p>{order.order_date_and_time}</p>
                                    <p className="font-normal">Клиент:</p>
                                    <p>{order.client}</p>
                                    <p className="font-normal">Телефон клиента:</p>
                                    <p>{order.phone}</p>
                                    <p className="font-normal">Количество товаров:</p>
                                    <p>{order.order_items.length}</p>
                                    <p className="font-normal">Список товаров:</p>
                                    <table>
                                        <tbody>
                                            {order.order_items.map((orderItem) => (
                                                <tr>
                                                    <td className="pl-0">{orderItem.name}</td>
                                                    <td>
                                                        {(orderItem.amount === 1)
                                                            ?
                                                                <button className="opacity-50 bg-grayWhite h-8 w-8 drop-shadow-sm rounded-xl flex items-center justify-center" disabled>
                                                                    <img src={Minus} alt="Минус" className="w-3"/>
                                                                </button>
                                                            :
                                                                <button className="bg-grayWhite h-8 w-8 drop-shadow-sm rounded-xl flex items-center justify-center"
                                                                        onClick={(e) => changeOrderItemAmount(e, orderItem.id, "minus")}
                                                                >
                                                                    <img src={Minus} alt="Минус" className="w-3"/>
                                                                </button>
                                                        }
                                                    </td>
                                                    <td className="px-0">
                                                        <h2>{orderItem.amount}</h2>
                                                    </td>
                                                    <td>
                                                        <button className="bg-grayWhite h-8 w-8 drop-shadow-sm rounded-xl flex items-center justify-center"
                                                                onClick={(e) => changeOrderItemAmount(e, orderItem.id, "plus")}
                                                        >
                                                            <img src={Plus} alt="Плюс" className="w-3"/>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <h2>{orderItem.price} ₽</h2>
                                                    </td>
                                                    <td>
                                                        <button className="bg-grayWhite h-8 w-8 drop-shadow-sm rounded-xl flex items-center justify-center"
                                                                onClick={(e) => deleteOrderItem(e, orderItem.id)}
                                                        >
                                                            <img src={Plus} alt="Плюс" className="rotate-45 w-3"/>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <p className="font-normal">Сумма:</p>
                                    <p>{orderSum()} ₽</p>
                                    <p className="font-normal">Способ получения:</p>
                                    {order.delivery ? <p>доставка</p> : <p>самовывоз</p>}
                                    {order.delivery ? <p className="font-normal">Адрес доставки:</p> : null}
                                    {order.delivery
                                        ?
                                            <>
                                                <div className="flex flex-col gap-5 font-light">
                                                    <div className="flex gap-5 items-center">
                                                        <label htmlFor="city">Город:</label>
                                                        <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                               id="city"
                                                               defaultValue={order.delivery_address.city}
                                                               onChange={e => setCity(e.target.value)}
                                                        />
                                                        <label htmlFor="street">Улица:</label>
                                                        <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                               id="street"
                                                               defaultValue={order.delivery_address.street}
                                                               onChange={e => setStreet(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="flex gap-5 items-center">
                                                        <label htmlFor="building">Дом:</label>
                                                        <input className="w-16 bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                               id="building"
                                                               defaultValue={order.delivery_address.building_number}
                                                               onChange={e => setBuilding(e.target.value)}
                                                        />
                                                        <label htmlFor="entrance">Подъезд:</label>
                                                        <input className="w-16 bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                               id="entrance"
                                                               type="number"
                                                               defaultValue={order.delivery_address.entrance_number}
                                                               onChange={e => setEntrance(e.target.value)}
                                                        />
                                                        <label htmlFor="floor">Этаж:</label>
                                                        <input className="w-16 bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                               id="floor"
                                                               type="number"
                                                               defaultValue={order.delivery_address.floor}
                                                               onChange={e => setFloor(e.target.value)}
                                                        />
                                                        <label htmlFor="apartment">Квартира:</label>
                                                        <input className="w-16 bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                               id="apartment"
                                                               defaultValue={order.delivery_address.apartment_number}
                                                               onChange={e => setApartment(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        :
                                            null
                                    }
                                    {order.delivery ? <p className="font-normal">Дата и время доставки:</p> : null}
                                    {order.delivery
                                        ?
                                        <>
                                            <form className="flex gap-5 font-light items-center">
                                                <label htmlFor="date">Дата:</label>
                                                <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1 mr-5"
                                                       type="date"
                                                       id="date"
                                                       defaultValue={order.delivery_date}
                                                       onChange={e => setDate(e.target.value)}
                                                />
                                                <label>Время:</label>
                                                <label htmlFor="time1">c</label>
                                                <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                       type="time"
                                                       id="time1"
                                                       defaultValue={order.delivery_time1}
                                                       onChange={e => setTime1(e.target.value)}
                                                />
                                                <label htmlFor="time2">до</label>
                                                <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                       type="time"
                                                       id="time2"
                                                       defaultValue={order.delivery_time2}
                                                       onChange={e => setTime2(e.target.value)}
                                                />
                                            </form>
                                        </>
                                        :
                                        null
                                    }
                                    <p className="font-normal">Статус:</p>
                                    <select defaultValue={order.status} className="w-fit bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                            onChange={e => setStatus(e.target.value)}
                                    >
                                        <option className="font-light" value="в обработке">в обработке</option>
                                        <option className="font-light" value="в сборке">в сборке</option>
                                        <option className="font-light" value="в доставке">в доставке</option>
                                        <option className="font-light" value="выполнен">выполнен</option>
                                        <option className="font-light" value="отменён">отменён</option>
                                    </select>
                                </div>
                            :
                                null
                        }
                    </form>
                </div>
                <button type="submit"
                        className="w-fit justify-self-center bg-mainOrange text-mainWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10"
                        onClick={save}
                >
                    <p>Сохранить</p>
                </button>
            </div>
        )
    } else {
        navigate('/login')
    }
}

export default Order;