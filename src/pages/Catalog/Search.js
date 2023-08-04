import React, {useContext, useEffect, useState} from "react"
import CatalogItemImg from "../../media/catalog_item.png";
import Basket from "../../media/basket.png";
import {Link} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {useParams} from "react-router";
import Arrow from "../../media/arrow.png";

function Search() {
    let {user, authTokens} = useContext(AuthContext)
    let [products, setProducts] = useState([])
    let [amountOfRAM, setAmountOfRAM] = useState([])
    let [processorSeries, setProcessorSeries] = useState([])
    let [videoCard, setVideoCard] = useState([])
    let [manufacturer, setManufacturer] = useState([])
    let [screenResolution, setScreenResolution] = useState([])
    let [matrixType, setMatrixType] = useState([])
    let [frameColor, setFrameColor] = useState([])
    let [wallMount, setWallMount] = useState([])
    let [aspectRatio, setAspectRatio] = useState([])

    const params = useParams()
    let category_name = ""
    let request = ""

    switch(params.category) {
        case 'system_units':
            category_name = "Системные блоки"
            request = "system_unit_list"
            break

        case 'computer_kits':
            category_name = "Компьютеры в комплекте"
            request = "computer_kit_list"
            break

        case 'monitors':
            category_name = "Мониторы"
            request = "monitor_list"
            break

        case 'special_offers':
            category_name = "Спецпредложения"
            request = "special_offer_list"
            break
    }

    useEffect(() => {
        fetch(
            `http://127.0.0.1:8000/products/monitor_list/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setProducts(data));
        fetch(
            "http://127.0.0.1:8000/amount_of_ram_list", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setAmountOfRAM(data));
        fetch(
            "http://127.0.0.1:8000/processor_series_list", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setProcessorSeries(data));
        fetch(
            "http://127.0.0.1:8000/video_card_list", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setVideoCard(data));
        fetch(
            "http://127.0.0.1:8000/manufacturer_list", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setManufacturer(data));
        fetch(
            "http://127.0.0.1:8000/screen_resolution_list", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setScreenResolution(data));
        fetch(
            "http://127.0.0.1:8000/matrix_type_list", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setMatrixType(data));
        fetch(
            "http://127.0.0.1:8000/frame_color_list", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setFrameColor(data));
        fetch(
            "http://127.0.0.1:8000/wall_mount_list", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setWallMount(data));
        fetch(
            "http://127.0.0.1:8000/aspect_ratio_list", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setAspectRatio(data));
    }, [])

    async function addBasketItem(id) {
        await fetch(
            'http://127.0.0.1:8000/basket_item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
                body: JSON.stringify({
                    'client': user.id,
                    'product': id
                })
            }
        )
        window.location.reload(false);
    }

    console.log(products)

    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-1 px-1/10">
                <p className="h-fit w-fit text-xs font-light text-mainGray">
                    {/*<Link to="/catalog" className="hover:underline">Каталог товаров</Link>*/}
                    {/*<span> > </span>*/}
                    {/*{((params.category === 'system_units')||(params.category === 'computer_kits'))*/}
                    {/*    ?*/}
                    {/*        <>*/}
                    {/*            <Link to="/catalog/computers" className="hover:underline">Компьютеры</Link>*/}
                    {/*            <span> > </span>*/}
                    {/*            <Link to={`/catalog/computers/${params.category}`} className="hover:underline">{category_name}</Link>*/}
                    {/*        </>*/}
                    {/*    :*/}
                    {/*        <Link to={`/catalog/${params.category}`} className="hover:underline">{category_name}</Link>*/}
                    {/*}*/}
                </p>
                <h1 className="text-xl lg:text-3xl font-bold mb-10 text-center">Результаты поиска</h1>
                <p className="text-mainGray justify-self-end">3 товара</p>
                <div/>
            </div>
            {products
                ?
                    <div className="flex flex-row gap-14 justify-center">

                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 font-light items-center">
                            <p className="font-normal">Сортировка:</p>
                            {/*<button className="bg-mainOrange drop-shadow-sm rounded-xl h-fit py-2 px-3"*/}
                            <button className="bg-grayWhite drop-shadow-sm rounded-xl h-fit py-2 px-3"
                                // onClick={toggleDelivery}
                            >
                                <p>сначала недорогие</p>
                            </button>
                            <button className="bg-grayWhite drop-shadow-sm rounded-xl h-fit py-2 px-3"
                                // onClick={toggleDelivery}
                            >
                                <p>сначала дорогие</p>
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            {products.map((product) => (
                                <div className="w-72 bg-mainWhite py-5 px-10 drop-shadow-sm rounded-xl flex flex-col items-center">
                                    <div className="w-64 h-64 shrink-0 grow-0 m-5">
                                        <img src={product.picture ? "http://localhost:8000"+product.picture : CatalogItemImg} alt={product.name} className="h-full w-full object-contain"/>
                                    </div>
                                    {((params.category === 'system_units')||(params.category === 'computer_kits'))
                                        ?
                                        <Link to={`/catalog/computers/${params.category}/${product.id}`}><h2 className="hover:underline text-xl mb-5">{product.name}</h2></Link>
                                        :
                                        <Link to={`/catalog/${params.category}/${product.id}`}><h2 className="hover:underline text-xl mb-5">{product.name}</h2></Link>
                                    }
                                    <p className="font-light mb-5 grow">{product.short_description}</p>
                                    <div className="w-full flex justify-between items-center self-end">
                                        <h2 className="text-2xl">{product.price} ₽</h2>
                                        {product.basket_amount ?
                                            <Link to="/basket" className="bg-grayWhite h-12 px-4 drop-shadow-sm rounded-xl flex items-center justify-center">
                                                <p className="whitespace-nowrap">В корзине</p>
                                            </Link>
                                            :
                                            <button className="bg-mainOrange drop-shadow-sm rounded-xl h-12 w-12 flex justify-center items-center"
                                                    onClick={() => addBasketItem(product.id)}
                                            >
                                                <img src={Basket} alt="Корзина" className="h-8"/>
                                            </button>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/*<button className="w-fit bg-mainWhite hover:bg-mainOrange drop-shadow-sm rounded-xl h-fit py-3 px-5 mx-auto"*/}
                        {/*    // onClick={toggleDelivery}*/}
                        {/*>Показать ещё*/}
                        {/*</button>*/}
                    </div>
                </div>
                :
                    null
            }
        </div>
    );
}

export default Search;