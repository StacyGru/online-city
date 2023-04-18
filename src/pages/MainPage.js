import Year1999 from "../media/year_1999.png";
import Delivery from "../media/delivery.png";
import Chat from "../media/chat.png";
import Gears from "../media/gears.png";
import Service from "../media/service.png";
import Wholesale from "../media/wholesale.png";
import CatalogItem from "../components/CatalogItem";

const MainPage = () => {

    return (
        <div className="flex flex-col justify-center items-center px-10">
            <h1 className="text-4xl font-bold mb-10">Магазин компьютерной техники Online City</h1>
            <div className="grid grid-cols-2 font-light text-2xl">
                <div className="grid grid-rows-3 justify-items-end mr-10">
                    <div className="w-4/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center mb-10">
                        <img src={Year1999} className="w-20 mr-5"/>
                        <p>Продаём быстрые, надёжные и недорогие компьютеры в Москве с 1999 года</p>
                    </div>
                    <div className="w-4/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center mb-10">
                        <img src={Delivery} className="w-20 mr-5"/>
                        <p>Сотрудничаем с логистической компанией, доставляем товар в любую точку страны</p>
                    </div>
                    <div className="w-4/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center mb-10">
                        <img src={Chat} className="w-20 mr-5"/>
                        <p>Бесплатно консультируем и помогаем подобрать комплектующие</p>
                    </div>
                </div>
                <div className="grid grid-rows-3 justify-items-start ml-10">
                    <div className="w-4/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center mb-10">
                        <img src={Gears} className="w-20 mr-5"/>
                        <p>Бесплатно собираем компьютеры и устанавливаем программное обеспечение</p>
                    </div>
                    <div className="w-4/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center mb-10">
                        <img src={Service} className="w-20 mr-5"/>
                        <p>Осуществляем бесплатный гарантийный ремонт</p>
                    </div>
                    <div className="w-4/5 bg-mainWhite p-5 drop-shadow-sm rounded-xl flex items-center mb-10">
                        <img src={Wholesale} className="w-20 mr-5"/>
                        <p>Делаем скидки оптовым покупателям</p>
                    </div>
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-10">Популярные товары</h1>
            <div className="grid grid-cols-4 gap-5">
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
            </div>
        </div>
    )
}
export default MainPage;