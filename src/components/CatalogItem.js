import CatalogItemImg from "../media/catalog_item.png";
import Basket from "../media/basket.png";

const CatalogItem = () => {

    return (
        <div className="w-72 bg-mainWhite py-5 px-10 drop-shadow-sm rounded-xl flex flex-col items-center">
            <img src={CatalogItemImg} className="h-64 m-5"/>
            <h2 className="text-xl mb-5">Компьютер для дома Home Partner HP210</h2>
            <p className="font-light mb-5">Intel Core i5-12400F, 6x2.5 ГГц, 16 ГБ DDR4, GeForce RTX 3060, SSD 512 ГБ, без ОС</p>
            <div className="w-full flex justify-between items-center">
                <h2 className="text-2xl">39400 ₽</h2>
                <button className="bg-mainOrange drop-shadow-sm rounded-xl h-12 w-12 flex justify-center items-center">
                    <img src={Basket} className="h-8"/>
                </button>
            </div>
        </div>
    )
}
export default CatalogItem;