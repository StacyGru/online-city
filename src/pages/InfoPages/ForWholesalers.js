import Wholesale from "../../media/wholesale.jpg";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import Administration from "../../media/administration.png";
import School from "../../media/school.png";
import Kindergarten from "../../media/kindergarten.png";
import Health from "../../media/health.png";
import Museum from "../../media/museum.png";
import Science from "../../media/science.png";
import Engineering from "../../media/engineering.png";
import IT from "../../media/it.png";
import Logistics from "../../media/logistics.png";
import Construction from "../../media/construction.png";
import EOMZ106 from "../../media/106eomz.png";
import CIAM from "../../media/ciam.jpg";
import Hecucenter from "../../media/hecucenter.jpg";
import ImmunolabMedical from "../../media/immunolab-medical.png";
import Interenergo from "../../media/interenergo.png";
import Kbtochmash from "../../media/kbtochmash.png";
import Lottehotel from "../../media/lottehotel.jpeg";
import MMOMA from "../../media/mmoma.gif";
import Mosrealstroy from "../../media/mosrealstroy.png";
import Poligran from "../../media/poligran.png";
import Sdart from "../../media/sdart.png";
import SnabBaza from "../../media/snab-baza.jpg";
import Softline from "../../media/softline.png";
import KosmoMuseum from "../../media/kosmo-museum.png";
import Uneco from "../../media/uneco.jpg";
import Visgas from "../../media/visgas.png";
import VSTTK from "../../media/vst-tk.png";
import YablochnySpas from "../../media/yablochny-spas.jpeg";
import Zarstyle from "../../media/zarstyle.png";
import ZnanieRussia from "../../media/znanierussia.png";

let clients = [
    {
        img: KosmoMuseum,
        name: "Музей космонавтики",
        url: "https://kosmo-museum.ru/",
    },
    {
        img: ZnanieRussia,
        name: "Российское общество «Знание»",
        url: "https://znanierussia.ru/",
    },
    {
        img: SnabBaza,
        name: "Техномаркет «База»",
        url: "https://snab-baza.ru/",
    },
    {
        img: VSTTK,
        name: "Транспортная компания «ВСТ»",
        url: "https://xn--b1a4ad.xn--p1ai/news/54/",
    },
    {
        img: EOMZ106,
        name: "106 Экспериментальный оптико-механический завод",
        url: "http://www.106eomz.ru/",
    },
    {
        img: Kbtochmash,
        name: "Конструкторское бюро точного машиностроения им. А.Э. Нудельмана",
        url: "http://www.kbtochmash.ru/",
    },
    {
        img: Uneco,
        name: "Объединенная энергетическая компания",
        url: "https://uneco.ru/",
    },
    {
        img: Softline,
        name: "Международная IT-компания «Softline»",
        url: "https://softline.ru/",
    },
    {
        img: Lottehotel,
        name: "Гостиничная сеть «Лотте Отель»",
        url: "https://www.lottehotel.com/moscow-hotel/ru.html",
    },
    {
        img: MMOMA,
        name: "Московский музей современного искусства",
        url: "https://mmoma.ru/",
    },
    {
        img: CIAM,
        name: "Центральный институт авиационногомоторостроения имени П.И. Баранова",
        url: "https://ciam.ru/",
    },
    {
        img: YablochnySpas,
        name: "Компания по производству сидра «Яблочный спас»",
        url: "http://yablochny-spas.ru/",
        space: true,
    },
    {
        img: Zarstyle,
        name: "Производство женской одежды «ЗarStyle»",
        url: "https://zarstyle.ru/",
    },
    {
        img: Poligran,
        name: "Строительная компания «Полигран Строй Инвест»",
        url: "https://www.poligran.net/",
        space: true,
    },
    {
        img: Visgas,
        name: "Служба газового хозяйства «Вис-сервисгаз»",
        url: "https://visgas.ru/",
        space: true,
    },
    {
        img: Interenergo,
        name: "Промышленная компания «Интерэнерго»",
        url: "https://www.interenergo.info/",
        space: true,
    },
    {
        img: ImmunolabMedical,
        name: "Лаборатория «immunoLab Medical»",
        url: "https://immunolab-medical.ru//",
    },
    {
        img: Sdart,
        name: "Театр «Школа драматического искусства»",
        url: "https://sdart.ru//",
    },
    {
        img: Hecucenter,
        name: "Греческий культурный центр",
        url: "http://www.hecucenter.ru/index2.php?redir=/index.php/",
    },
    {
        img: Mosrealstroy,
        name: "Центр реализации недвижимости «Мосреалстрой»",
        url: "https://www.mosrealstroy.ru/",
    },
]

function ForWholesalers() {

    return (
        <div className="flex flex-col items-center px-1/10">
            <h1 className="text-3xl font-bold mb-10">Оптовикам</h1>
            <div className="bg-mainWhite py-10 px-20 drop-shadow-sm rounded-xl flex flex-col w-full font-light">
                <div className="flex gap-10">
                    <img src={Wholesale} alt="Опт" className="w-2/5 drop-shadow-sm shrink-0 grow-0"/>
                    <div className="flex flex-col justify-center">
                        <p>Оптовые цены на товары определяются индивидуально для каждого случая исходя из объёма заказа. Также предусмотрена накопительная система скидок.</p>
                        <br/>
                        <p>Более подробную информацию можно узнать через почту <Link to="mailto:info@onci.ru" className="hover:text-mainOrange">info@onci.ru</Link>, позвонив по телефону или же при личной встрече в нашем павильоне в торговом центре «Савеловский» (см. страницу <Link to="/contacts" className="text-mainOrange before:bg-mainOrange link-hover-underline">«Контакты»</Link>).</p>
                    </div>
                </div>
                <h2 className="text-2xl text-center font-normal py-10">Наши клиенты</h2>
                <div className="grid grid-cols-3">
                    <div className="flex flex-col border border-l-0 border-r-3 border-y-0 border-mainOrange border-opacity-50 items-center justify-center">
                        <h2 className="text-2xl font-normal pb-1">>500 компаний</h2>
                        <p>в число которых входят:</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-5 items-center pl-10">
                            <img src={Administration} alt="Администрация" className="w-10 h-10"/>
                            <p>городские администрации</p>
                        </div>
                        <div className="flex gap-5 items-center pl-10">
                            <img src={School} alt="Школа" className="w-10 h-10"/>
                            <p>общеобразовательные школы</p>
                        </div>
                        <div className="flex gap-5 items-center pl-10">
                            <img src={Kindergarten} alt="Детский сад" className="w-10 h-10"/>
                            <p>детские сады</p>
                        </div>
                        <div className="flex gap-5 items-center pl-10">
                            <img src={Health} alt="Больница" className="w-10 h-10"/>
                            <p>учреждения здравоохранения</p>
                        </div>
                        <div className="flex gap-5 items-center pl-10">
                            <img src={Museum} alt="Музей" className="w-10 h-10"/>
                            <p>музеи</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-5 items-center pl-10">
                            <img src={Science} alt="Наука" className="w-10 h-10"/>
                            <p>научные центры</p>
                        </div>
                        <div className="flex gap-5 items-center pl-10">
                            <img src={Engineering} alt="Инжернерное производство" className="w-10 h-10"/>
                            <p>инженерные производства</p>
                        </div>
                        <div className="flex gap-5 items-center pl-10">
                            <img src={IT} alt="IT" className="w-10 h-10"/>
                            <p>IT-компании</p>
                        </div>
                        <div className="flex gap-5 items-center pl-10">
                            <img src={Logistics} alt="Транспорт" className="w-10 h-10"/>
                            <p>транспортные компании</p>
                        </div>
                        <div className="flex gap-5 items-center pl-10">
                            <img src={Construction} alt="Строительство" className="w-10 h-10"/>
                            <p>строительные компании</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 mt-10 gap-x-5 gap-y-1 text-base">
                    {clients.map((client) => (
                        <Link to={client.url}
                              className={
                              "client-div py-2 bg-mainWhite hover:drop-shadow-lg rounded-xl flex flex-col items-center justify-evenly "
                              + (client.space ? "px-4" : "px-5")}
                        >
                            <div className="flex w-40 h-40 justify-center items-center">
                                <img src={client.img} alt={client.name} className="max-w-40 max-h-40"/>
                            </div>
                            <p className="client-name text-center py-auto">{client.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
            )
}
export default ForWholesalers;