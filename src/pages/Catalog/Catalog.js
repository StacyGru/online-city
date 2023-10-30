import {Link} from "react-router-dom";
import {useGetCategoriesQuery} from "../../api/apiSlice";

const Catalog = () => {
    const {data: categories = []} = useGetCategoriesQuery();

    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-1 px-1/10">
                <Link to="/catalog" className="h-fit w-fit hover:underline text-xs font-light text-mainGray">Каталог товаров</Link>
                <h1 className="text-xl lg:text-3xl font-bold mb-10 text-center">Каталог товаров</h1>
                <div/>
            </div>
            <div className="flex gap-10 justify-center">
                {categories && categories.map(category =>
                    <Link to={`/catalog/${category.id}`} key={category.id} className="p-5 w-1/4 lg:w-1/5 aspect-square square bg-mainWhite drop-shadow-sm hover:drop-shadow-lg duration-300 rounded-xl text-center flex flex-col justify-center items-center">
                        <img src={category.icon} alt="Компьютер" className="h-4/5"/>
                        <h1 className="text-lg lg:text-2xl">{category.name}</h1>
                    </Link>
                )}
            </div>
        </div>

            )
}
export default Catalog;