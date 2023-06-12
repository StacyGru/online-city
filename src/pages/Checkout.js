import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";

function Checkout() {

    let {authTokens,} = useContext(AuthContext)
    let [basketItems, setBasketItems] = useState([])

    useEffect(() => {
        fetch(
            'http://127.0.0.1:8000/basket_list', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setBasketItems(data))
    }, [])

    console.log(basketItems)

    function orderSum() {
        let sum = 0
        basketItems.map((basketItem, id) => {
            sum += basketItem.price * basketItem.amount
        })
        return sum
    }

    const [city, setCity] = useState()
    const [street, setStreet] = useState()
    const [building, setBuilding] = useState()
    const [entrance, setEntrance] = useState()
    const [floor, setFloor] = useState()
    const [apartment, setApartment] = useState()
    const [date, setDate] = useState()
    const [time1, setTime1] = useState()
    const [time2, setTime2] = useState()

    const [ordered, setOrdered] = useState(false)

    async function submit() {
        await fetch(
            'http://127.0.0.1:8000/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
                body: JSON.stringify({
                    'delivery': delivery,
                    'city': city,
                    'street': street,
                    'building_number': building,
                    'entrance_number': entrance,
                    'floor': floor,
                    'apartment_number': apartment,
                    'delivery_date': date,
                    'delivery_time1': time1,
                    'delivery_time2': time2,
                    'sum': orderSum(),
                    'basketItems': basketItems,
                })
            }
        )
        setOrdered(true)
    }

    let deliveryDate1 = new Date();
    let deliveryDate2 = new Date();
    deliveryDate1.setDate(deliveryDate1.getDate() + 5);
    deliveryDate2.setDate(deliveryDate2.getDate() + 7);
    if (deliveryDate1.getMonth() === deliveryDate2.getMonth()) {
        deliveryDate1 = deliveryDate1.toLocaleDateString("ru-RU", {day: 'numeric'})
    } else {
        deliveryDate1 = deliveryDate1.toLocaleDateString("ru-RU", {month: 'long', day: 'numeric'})
    }
    deliveryDate2 = deliveryDate2.toLocaleDateString("ru-RU", {month: 'long', day: 'numeric'})

    let [delivery, setDelivery] = useState(false)
    const toggleDelivery = () => setDelivery(value => !value)

    return (
        <div className="flex flex-col items-center px-1/10">
            <h1 className="text-3xl font-bold mb-10">Оформление заказа</h1>
            {ordered
                ?
                <>
                    <p className="text-mainOrange mb-5">Заказ успешно оформлен!</p>
                    <p className="font-light w-2/5 3xl:w-1/5 text-center mb-5">Будьте на связи: в ближайшее время по указанному номеру телефона с вами свяжется оператор для окончательного согласования заказа</p>
                    <p className="font-light w-2/5 3xl:w-1/5 text-center">Также вы можете отслеживать статус своего заказа в <Link to="/user"><u className="font-normal">личном кабинете</u></Link></p>
                </>
                :
                <div className="flex gap-10">
                    <div className="grid grid-col items-center gap-10">
                        <div className="w-full bg-mainWhite p-10 drop-shadow-sm rounded-xl flex flex-col gap-5">
                            <h1 className="text-3xl">1. Способ получения</h1>

                            {delivery
                                ?
                                <>
                                    <div className="flex gap-5 font-light">
                                        <button className="bg-grayWhite drop-shadow-sm rounded-xl h-fit py-2 px-3"
                                                onClick={toggleDelivery}
                                        >
                                            <p>Самовывоз</p>
                                        </button>
                                        <button className="bg-mainOrange drop-shadow-sm rounded-xl h-fit py-2 px-3"
                                                onClick={toggleDelivery}
                                        >
                                            <p>Доставка</p>
                                        </button>
                                    </div>
                                    <form className="flex flex-col gap-5 font-light">
                                        <div className="flex gap-5 items-center">
                                            <label htmlFor="city">Город:</label>
                                            <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                   id="city"
                                                   onChange={e => setCity(e.target.value)}
                                            />
                                            <label htmlFor="street">Улица:</label>
                                            <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                   id="street"
                                                   onChange={e => setStreet(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex gap-5 items-center">
                                            <label htmlFor="building">Дом:</label>
                                            <input className="w-16 bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                   id="building"
                                                   onChange={e => setBuilding(e.target.value)}
                                            />
                                            <label htmlFor="entrance">Подъезд:</label>
                                            <input className="w-16 bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                   id="entrance"
                                                   type="number"
                                                   onChange={e => setEntrance(e.target.value)}
                                            />
                                            <label htmlFor="floor">Этаж:</label>
                                            <input className="w-16 bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                   id="floor"
                                                   type="number"
                                                   onChange={e => setFloor(e.target.value)}
                                            />
                                            <label htmlFor="apartment">Квартира:</label>
                                            <input className="w-16 bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                                   id="apartment"
                                                   onChange={e => setApartment(e.target.value)}
                                            />
                                        </div>
                                    </form>
                                    <p className="text-mainOrange"><u>Стоимость доставки</u>: 600 ₽</p>
                                </>
                                :
                                <>
                                    <div className="flex gap-5 font-light">
                                        <button className="bg-mainOrange drop-shadow-sm rounded-xl h-fit py-2 px-3"
                                                onClick={toggleDelivery}
                                        >
                                            <p>Самовывоз</p>
                                        </button>
                                        <button className="bg-grayWhite drop-shadow-sm rounded-xl h-fit py-2 px-3"
                                                onClick={toggleDelivery}
                                        >
                                            <p>Доставка</p>
                                        </button>
                                    </div>
                                    <p className="font-light"><u>Адрес</u>: г. Москва, ул. Сущевский вал, д.5, стр 1А,
                                        ТЦ «Савеловский», Компьютерный Центр, 2 этаж, пав. 2F-06</p>
                                    <p className="text-mainOrange">Бесплатно</p>
                                </>
                            }

                        </div>
                        <div className="w-full bg-mainWhite p-10 drop-shadow-sm rounded-xl flex flex-col gap-5">
                            <h1 className="text-3xl">2. Дата и время получения</h1>
                            {delivery
                                ?
                                <>
                                    <p className="font-light">Выберите предварительное время доставки. Окончательное
                                        время будет согласовано с оператором по телефону.</p>
                                    <form className="flex gap-5 font-light items-center">
                                        <label htmlFor="date">Дата:</label>
                                        <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1 mr-5"
                                               type="date"
                                               id="date"
                                               onChange={e => setDate(e.target.value)}
                                        />
                                        <label>Время:</label>
                                        <label htmlFor="time1">c</label>
                                        <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                               type="time"
                                               id="time1"
                                               onChange={e => setTime1(e.target.value)}
                                        />
                                        <label htmlFor="time2">до</label>
                                        <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                               type="time"
                                               id="time2"
                                               onChange={e => setTime2(e.target.value)}
                                        />
                                    </form>
                                </>
                                :
                                <>
                                    <p className="font-light"><u>Ожидаемая дата доставки</u>:
                                        c {deliveryDate1} по {deliveryDate2}</p>
                                    <p className="font-light"><u>Время работы</u>: с 11:00 до 19:30</p>
                                </>
                            }
                        </div>
                        <div className="flex gap-10 items-center">
                            <button type="submit"
                                    className="w-fit bg-mainOrange rounded-xl justify-center items-center p-5"
                                    onClick={submit}
                            >
                                <p className="text-mainWhite whitespace-nowrap">Оформить заказ</p>
                            </button>
                            <p className="font-light w-3/5">Оператор свяжется с вами по указанному телефону в ближайшее
                                время для окончательного согласования заказа</p>
                        </div>
                    </div>
                    <div className="bg-mainWhite w-fit py-10 px-10 drop-shadow-sm rounded-xl flex flex-col h-fit gap-5">
                        <p className="text-xl text-mainGray shrink-0">{basketItems.length} товара</p>
                        {basketItems.map((basketItem) => (
                            <div className="text-sm">
                                <p>{basketItem.name}</p>
                                <p className="text-mainGray font-light">{basketItem.amount} шт. {basketItem.price * basketItem.amount} ₽</p>
                            </div>
                        ))}
                        <p className="text-3xl shrink-0">{orderSum()} ₽</p>
                    </div>
                </div>
            }
        </div>
    )
}
export default Checkout;