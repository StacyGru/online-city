import Computer from "../../media/computer.png"
import SystemUnit from "../../media/system_unit.png"
import {Link} from "react-router-dom";

const CatalogComputers = () => {

    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-1 px-1/10">
                <p className="h-fit w-fit text-xs font-light text-mainGray">
                    <Link to="/catalog" className="hover:underline">Каталог товаров</Link>
                    <span> > </span>
                    <Link to="/catalog/computers" className="hover:underline">Компьютеры</Link>
                </p>
                <h1 className="text-xl lg:text-3xl font-bold mb-10 text-center">Каталог товаров</h1>
                <div/>
            </div>
            <div className="flex gap-10 justify-center">
                <Link to="/catalog/computers/system_units" className="p-5 w-1/4 lg:w-1/5 aspect-square square bg-mainWhite drop-shadow-sm hover:drop-shadow-lg duration-300 rounded-xl text-center flex flex-col justify-center items-center">
                    <img src={SystemUnit} alt="Системный блок" className="h-4/5"/>
                    <h1 className="text-lg lg:text-2xl">Системные блоки</h1>
                </Link>
                <Link to="/catalog/computers/computer_kits" className="p-5 w-1/4 lg:w-1/5 aspect-square square bg-mainWhite drop-shadow-sm hover:drop-shadow-lg duration-300 rounded-xl text-center flex flex-col justify-center items-center">
                    <img src={Computer} alt="Компьютер в комплекте" className="h-4/5"/>
                    <h1 className="text-lg lg:text-2xl">Компьютеры в комплекте</h1>
                </Link>
            </div>
        </div>

            )
}
export default CatalogComputers;