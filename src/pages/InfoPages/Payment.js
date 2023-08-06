import React from "react";
import Cash from "../../media/cash.png";
import Cashless from "../../media/cashless.png";

const Payment = () => {

    return (
        <div className="flex flex-col items-center px-1/10">
            <h1 className="text-3xl font-bold mb-10">Оплата</h1>
            <div className="bg-mainWhite py-10 px-20 drop-shadow-sm rounded-xl flex flex-col w-full font-light">
                <div className="flex gap-5 items-center mb-5">
                    <img src={Cash} alt="Наличные" className="w-12 h-12"/>
                    <h2 className="text-2xl font-normal">Наличная оплата</h2>
                </div>
                <p className="border border-x-0 border-t-0 border-b-3 border-mainOrange border-opacity-50 pb-10">Вы можете оплатить заказ наличными как в физическом магазине, так и при получении доставки.</p>
                <div className="flex gap-5 items-center mt-10 mb-5">
                    <img src={Cashless} alt="Безналичная оплата" className="w-10 h-10"/>
                    <h2 className="text-2xl font-normal">Безналичная оплата</h2>
                </div>
                <b>Оплата банковской картой</b>
                <p>Вы можете оплатить заказ банковской картой через терминал <b>только в физическом магазине</b>, при выборе доставки этот способ оплаты невозможен.</p>
                <br/>
                <b>Платёжное поручение</b>
                <ol className="list-decimal">
                    <li className="ml-10 pl-1">Для оплаты заказа таким способом вам необходимо будет сообщить нам свои банковские реквизиты.</li>
                    <li className="ml-10 pl-1">После получения реквизитов мы выставляем вам счёт на оплату товара.</li>
                    <li className="ml-10 pl-1">После оплаты вы сообщаете нам номер и дату платёжного поручения.</li>
                    <li className="ml-10 pl-1">После поступления денежных средств на наш расчётный счет вы сможете получить заказ выбранным способом: через самовывоз или доставку.</li>
                </ol>
            </div>
        </div>
            )
}
export default Payment;