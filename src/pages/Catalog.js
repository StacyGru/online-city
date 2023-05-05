import Computer from "../media/computer.png"
import Monitor from "../media/monitor.png"
import SpecialOffer from "../media/special_offer.png"
import {Link} from "react-router-dom";

const Catalog = () => {

    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-1 px-1/10">
                <Link to="/catalog" className="h-fit w-fit hover:underline text-xs font-light text-mainGray">Каталог товаров</Link>
                <h1 className="text-xl lg:text-3xl font-bold mb-10 text-center">Каталог товаров</h1>
                <div/>
            </div>
            <div className="flex gap-10 justify-center">
                <Link to="/computers" className="p-5 w-1/4 lg:w-1/5 aspect-square square bg-mainWhite drop-shadow-sm rounded-xl text-center flex flex-col justify-center items-center">
                    <img src={Computer} className="h-4/5"/>
                    <h1 className="text-lg lg:text-2xl">Компьютеры</h1>
                </Link>
                <Link to="/monitors" className="p-5 w-1/4 lg:w-1/5 aspect-square square bg-mainWhite drop-shadow-sm rounded-xl text-center flex flex-col justify-center items-center">
                    <img src={Monitor} className="h-4/5"/>
                    <h1 className="text-lg lg:text-2xl">Мониторы</h1>
                </Link>
                <Link to="/special_offers" className="p-5 w-1/4 lg:w-1/5 aspect-square square bg-mainWhite drop-shadow-sm rounded-xl text-center flex flex-col justify-center items-center">
                    <img src={SpecialOffer} className="h-4/5"/>
                    <h1 className="text-lg lg:text-2xl">Спецпредложения</h1>
                </Link>
            </div>
        </div>

            )
}
export default Catalog;