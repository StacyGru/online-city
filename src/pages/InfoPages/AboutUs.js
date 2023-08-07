import React from "react";
import Who from "../../media/who.png";
import Services from "../../media/services.png";
import Clients from "../../media/clients.png";
import Advantages from "../../media/advantages.png";
import Check from "../../media/check.png";
import {Link} from "react-router-dom";

const AboutUs = () => {

    console.log(window.innerWidth)

    return (
        <div className="flex flex-col px-48">
            <h1 className="text-3xl font-bold mb-10 text-center">О компании</h1>
            <div className="bg-mainWhite py-10 px-20 drop-shadow-sm rounded-xl flex flex-col w-full">
                <div className="flex justify-between border border-x-0 border-t-0 border-b-3 border-mainOrange border-opacity-50 pb-10">
                    <div className="flex gap-5 items-center">
                        <img src={Who} alt="Кто" className="w-10 h-10"/>
                        <h2 className="text-2xl">Кто мы?</h2>
                    </div>
                    <p className="font-light w-3/5">
                        Магазин компьютерной техники «Online City» был основан в 1999 году и вот уже третий десяток лет занимается продажей, сборкой, отладкой и диагностикой компьютерной техники.
                    </p>
                </div>

                <div className="flex justify-between border border-x-0 border-t-0 border-b-3 border-mainOrange border-opacity-50 py-10">
                    <div className="flex gap-5 items-center">

                        <img src={Services} alt="Товары и услуги" className="w-10 h-10"/>
                        <h2 className="text-2xl">Какие товары и услуги мы предоставляем?</h2>
                    </div>
                    <div className="flex flex-col font-light w-3/5 shrink-0 grow-0">

                        <p>Помимо стационарных компьютеров, мы <b>предлагаем к покупке</b> мобильную компьютерную технику (ноутбуки и нетбуки), бытовую технику, строительные и расходные материалы, бытовую химию, товары народного потребления.</p>
                        <br/>
                        <p>Покупая компьютер, вы можете также выбрать и приобрести у нас программное обеспечение: операционную систему (MS Windows), офисные приложения (MS Office) и антивирусную программу.</p>
                        <br/>
                        <p>В качестве <b>бесплатных услуг</b> (при совершении покупки) мы можем предложить вам сборку компьютера, установку приобретенного ПО, диагностику слаженности и стабильности работы техники.</p>
                        <br/>
                        <p>В числе <b>платных услуг</b>, сотрудники магазина могут произвести модернизацию вашего компьютера, что позволит значительно продлить срок его эффективной эксплуатации.</p>

                    </div>

                </div>

                <div className="flex justify-between border border-x-0 border-t-0 border-b-3 border-mainOrange border-opacity-50 py-10">
                    <div className="flex gap-5 items-center">
                        <img src={Clients} alt="Клиенты" className="w-10 h-10"/>
                        <h2 className="text-2xl">Кто наши клиенты?</h2>
                    </div>
                    <p className="font-light w-3/5">
                        За более 20 лет работы мы удовлетворили нужды множества клиентов. Среди них как <b>физические лица</b>, желающие подобрать
                        компьютерную технику по своим индивидуальным потребностям и кошельку, так и <b>юридические лица</b>, нуждающиеся в оптовой закупке товаров.
                        Более подробно ознакомиться со списком наших клиентов можно на странице <Link to="/for_wholesalers" className="text-mainOrange before:bg-mainOrange link-hover-underline">«Оптовикам»</Link>.
                    </p>
                </div>

                <div className="flex justify-between pt-10">
                    <div className="flex gap-5 items-center">
                        <img src={Advantages} alt="Преимущества" className="w-10 h-10"/>
                        <h2 className="text-2xl">В чём наши преимущества?</h2>
                    </div>
                    <div className="flex flex-col font-light w-3/5 gap-3">
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="Галочка" className="w-7 h-7"/>
                            <p>опыт работы более 20 лет</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="Галочка" className="w-7 h-7"/>
                            <p>цены ниже чем у конкурентов</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="Галочка" className="w-7 h-7"/>
                            <p>бесплатная консультация и подбор комплектующих</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="Галочка" className="w-7 h-7"/>
                            <p>бесплатная сборка и установка ПО</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="Галочка" className="w-7 h-7"/>
                            <p>быстрая и недорогая доставка</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Check} alt="Галочка" className="w-7 h-7"/>
                            <p>гарантия качества</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}
export default AboutUs;