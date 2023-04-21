import Year1999 from "../media/year_1999.png";
import Delivery from "../media/delivery.png";
import Chat from "../media/chat.png";
import Gears from "../media/gears.png";
import Service from "../media/service.png";
import Wholesale from "../media/wholesale.png";
import CatalogItem from "../components/CatalogItem";

const MainPage = () => {

    console.log(window. innerWidth)

    return (
        <div className="flex flex-col grow items-center px-10">
            <h1 className="text-3xl font-bold mb-10">Магазин компьютерной техники Online City</h1>
            <div className="flex flex-wrap justify-center gap-5 font-light text-lg mb-10">
                <div className="w-2/5 3xl:w-1/4 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Year1999} className="w-16 mr-5"/>
                    <p>Продаём быстрые, надёжные и недорогие компьютеры в Москве с 1999 года</p>
                </div>
                <div className="w-2/5 3xl:w-1/4 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Delivery} className="w-16 mr-5"/>
                    <p>Сотрудничаем с логистической компанией, доставляем товар в любую точку страны</p>
                </div>
                <div className="w-2/5 3xl:w-1/4 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Chat} className="w-16 mr-5"/>
                    <p>Бесплатно консультируем и помогаем подобрать комплектующие</p>
                </div>
                <div className="w-2/5 3xl:w-1/4 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Gears} className="w-16 mr-5"/>
                    <p>Бесплатно собираем компьютеры и устанавливаем программное обеспечение</p>
                </div>
                <div className="w-2/5 3xl:w-1/4 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Service} className="w-16 mr-5"/>
                    <p>Осуществляем бесплатный гарантийный ремонт</p>
                </div>
                <div className="w-2/5 3xl:w-1/4 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center">
                    <img src={Wholesale} className="w-16 mr-5"/>
                    <p>Делаем скидки оптовым покупателям</p>
                </div>
            </div>
            <h1 className="text-3xl font-bold mb-10">Популярные товары</h1>
            <div className="flex flex-wrap justify-evenly gap-5">
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
            </div>
        </div>
    )
}
export default MainPage;