import PickUp from "../../media/pickup.png";
import Delivery2 from "../../media/delivery2.png";
import React from "react";
import {Link} from "react-router-dom";

const Delivery = () => {

    return (
        <div className="flex flex-col items-center px-1/10">
            <h1 className="text-3xl font-bold mb-10">Доставка</h1>
            <div className="bg-mainWhite py-10 px-20 drop-shadow-sm rounded-xl flex flex-col w-full font-light">
                <div className="flex gap-5 items-center mb-5">
                    <img src={Delivery2} alt="Доставка" className="w-10 h-10"/>
                    <h2 className="text-2xl font-normal">Доставка</h2>
                </div>
                <p>Доставка по Москве и области осуществляется ежедневно c 10:00 до 20:00.</p>
                <br/>
                <p className="font-normal">Доставка по Москве</p>
                <p>Стоимость доставки в пределах МКАД фиксированная и составляет 600 ₽.</p>
                <br/>
                <p className="font-normal">Доставка по Московской области</p>
                <p>Стоимость доставки товара на расстояние, не превышающее 10 км от МКАД, составляет 1000 ₽. Стоимость доставки на более дальнее расстояние можно узнать при согласовании с администратором магазина.</p>
                <br/>
                <p className="font-normal">Доставка в регионы</p>
                <p className="border border-x-0 border-t-0 border-b-3 border-mainOrange border-opacity-50 pb-10">Региональная доставка осуществляется транспортной компанией, её условия обговариваются с администратором магазина.</p>

                <div className="flex gap-5 items-center mt-10 mb-5">
                    <img src={PickUp} alt="Самовывоз" className="w-10 h-10"/>
                    <h2 className="text-2xl font-normal">Самовывоз</h2>
                </div>
                <p>Вы можете самостоятельно забрать товар из нашего розничного салона, расположенного по адресу: <Link to="/contacts" className="hover:text-mainOrange">г. Москва, ул. Сущевский вал, д. 5, стр. 1, ТК «Савеловский»; пав. 2F-06</Link>.</p>
            </div>
        </div>
            )
}
export default Delivery;