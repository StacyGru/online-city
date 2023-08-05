import React, {useContext, useEffect, useState} from "react"
import CatalogItemImg from "../../media/catalog_item.png";
import Basket from "../../media/basket.png";
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {useParams} from "react-router";
import Arrow from "../../media/arrow.png";

function ProductList() {
    let navigate = useNavigate()
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

    const getProductList = async () => {
        if (authTokens) {
            await fetch(
                `http://127.0.0.1:8000/products/${request}/`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authTokens.access}`,
                    },
                }
            )
                .then(res => res.json())
                .then(data => setProducts(data));
        }
        else {
            await fetch(
                `http://127.0.0.1:8000/products/${request}/`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(res => res.json())
                .then(data => setProducts(data));
        }
    }

    useEffect(() => {
       getProductList()
        fetch(
            "http://127.0.0.1:8000/amount_of_ram_list", {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => res.json())
            .then(data => setAmountOfRAM(data));
        fetch(
            "http://127.0.0.1:8000/processor_series_list", {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => res.json())
            .then(data => setProcessorSeries(data));
        fetch(
            "http://127.0.0.1:8000/video_card_list", {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => res.json())
            .then(data => setVideoCard(data));
        fetch(
            "http://127.0.0.1:8000/manufacturer_list", {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => res.json())
            .then(data => setManufacturer(data));
        fetch(
            "http://127.0.0.1:8000/screen_resolution_list", {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => res.json())
            .then(data => setScreenResolution(data));
        fetch(
            "http://127.0.0.1:8000/matrix_type_list", {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => res.json())
            .then(data => setMatrixType(data));
        fetch(
            "http://127.0.0.1:8000/frame_color_list", {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => res.json())
            .then(data => setFrameColor(data));
        fetch(
            "http://127.0.0.1:8000/wall_mount_list", {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => res.json())
            .then(data => setWallMount(data));
        fetch(
            "http://127.0.0.1:8000/aspect_ratio_list", {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => res.json())
            .then(data => setAspectRatio(data));
    }, [])

    async function addBasketItem(id) {
        if (authTokens) {
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
            getProductList()
        }
        else {
            navigate('/login')
        }
    }

    console.log(products)

    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-1 px-1/10">
                <p className="h-fit w-fit text-xs font-light text-mainGray">
                    <Link to="/catalog" className="hover:underline">Каталог товаров</Link>
                    <span> > </span>
                    {((params.category === 'system_units')||(params.category === 'computer_kits'))
                        ?
                            <>
                                <Link to="/catalog/computers" className="hover:underline">Компьютеры</Link>
                                <span> > </span>
                                <Link to={`/catalog/computers/${params.category}`} className="hover:underline">{category_name}</Link>
                            </>
                        :
                            <Link to={`/catalog/${params.category}`} className="hover:underline">{category_name}</Link>
                    }
                </p>
                <h1 className="text-xl lg:text-3xl font-bold mb-10 text-center">{category_name}</h1>
                <p className="text-mainGray justify-self-end">{products.length} товаров</p>
                <div/>
            </div>
            {products
                ?
                    <div className="flex flex-row gap-14 justify-center">
                    <div className="h-fit bg-mainWhite py-5 px-10 drop-shadow-sm rounded-xl flex flex-col font-light">
                        <div className="flex items-center gap-3">
                            <p className="font-normal mb-2">Цена, ₽</p>
                            <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="min">от</label>
                            <input id="min" className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1 w-20 mr-2"/>
                            <label htmlFor="max">до</label>
                            <input id="max"
                                   className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1 w-20"/>
                        </div>

                        {((params.category === 'system_units')||(params.category === 'computer_kits'))
                            ?
                            <>
                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Предназначение</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="home" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="home">Для дома</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="office" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="office">Для офиса</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="gaming" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="gaming">Для игр</label>
                                </div>

                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Объём оперативной памяти</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                {amountOfRAM.map((item) => (
                                    <div className="flex flex-row gap-2 items-center">
                                        <input type="checkbox" id={item.name} className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                        <label htmlFor={item.name}>{item.name}</label>
                                    </div>
                                ))}

                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Серия процессора</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                {processorSeries.map((item) => (
                                    <div className="flex flex-row gap-2 items-center">
                                        <input type="checkbox" id={item.name} className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                        <label htmlFor={item.name}>{item.name}</label>
                                    </div>
                                ))}

                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Объём HDD</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="hdd1" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="hdd1">от 1 до 2 ТБ</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="hdd2" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="hdd2">от 2 до 3 ТБ</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="hdd3" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="hdd3">3 ТБ и более</label>
                                </div>

                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Объём SSD</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="ssd1" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="ssd1">от 100 до 200 ГБ</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="ssd2" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="ssd2">от 200 до 300 ГБ</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="ssd3" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="ssd3">от 400 до 500 ГБ</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="ssd4" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="ssd4">от 500 ГБ и более</label>
                                </div>

                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Модель видеокарты</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                {videoCard.map((item) => (
                                    <div className="flex flex-row gap-2 items-center">
                                        <input type="checkbox" id={item.name} className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                        <label htmlFor={item.name}>{item.name}</label>
                                    </div>
                                ))}
                            </>
                            :
                            null
                        }

                        {(params.category === 'monitors')
                            ?
                            <>
                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Производитель</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                {manufacturer.map((item) => (
                                    <div className="flex flex-row gap-2 items-center">
                                        <input type="checkbox" id={item.name} className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                        <label htmlFor={item.name}>{item.name}</label>
                                    </div>
                                ))}
                            </>
                            :
                            null
                        }

                        {((params.category === 'monitors')||(params.category === 'computer_kits'))
                            ?
                            <>
                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Диагональ экрана</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="d1"
                                           className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="d1">от 10" до 18,5"</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="d2"
                                           className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="d2">от 19" до 22"</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="d3"
                                           className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="d3">от 23" до 26"</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="d4"
                                           className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="d4">от 27" до 30"</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="d5"
                                           className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="d5">от 31" до 39"</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="d6"
                                           className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="d6">от 40" и более</label>
                                </div>

                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Разрешение экрана</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                {screenResolution.map((item) => (
                                    <div className="flex flex-row gap-2 items-center">
                                        <input type="checkbox" id={item.name}
                                               className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                        <label htmlFor={item.name}>{item.name}</label>
                                    </div>
                                ))}
                            </>
                            :
                            null
                        }

                        {(params.category === 'monitors')
                            ?
                            <>
                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Тип матрицы</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                {matrixType.map((item) => (
                                    <div className="flex flex-row gap-2 items-center">
                                        <input type="checkbox" id={item.name} className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                        <label htmlFor={item.name}>{item.name}</label>
                                    </div>
                                ))}

                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Изогнутый экран</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="true" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="true">да</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" id="false" className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                    <label htmlFor="false">нет</label>
                                </div>

                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Цвет рамки</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                {frameColor.map((item) => (
                                    <div className="flex flex-row gap-2 items-center">
                                        <input type="checkbox" id={item.name} className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                        <label htmlFor={item.name}>{item.name}</label>
                                    </div>
                                ))}

                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Крепление</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                {wallMount.map((item) => (
                                    <div className="flex flex-row gap-2 items-center">
                                        <input type="checkbox" id={item.name} className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                        <label htmlFor={item.name}>{item.name}</label>
                                    </div>
                                ))}

                                <div className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">Соотношение сторон</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                {aspectRatio.map((item) => (
                                    <div className="flex flex-row gap-2 items-center">
                                        <input type="checkbox" id={item.name} className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                        <label htmlFor={item.name}>{item.name}</label>
                                    </div>
                                ))}
                            </>
                            :
                            null
                        }


                    </div>
                    <div className="flex flex-col gap-5 justify-start">
                        <div className="flex gap-5 font-light items-center">
                            <p className="font-normal">Сортировка:</p>

                            <button className="bg-grayWhite drop-shadow-sm rounded-xl h-fit py-2 px-3">
                            {/*    // onClick={toggleDelivery}*/}

                                <p>сначала недорогие</p>
                            </button>
                            <button className="bg-grayWhite drop-shadow-sm rounded-xl h-fit py-2 px-3"
                                // onClick={toggleDelivery}
                            >
                                <p>сначала дорогие</p>
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-5 min-width">
                            {products.map((product) => (
                                <div className="w-72 bg-mainWhite py-5 px-10 drop-shadow-sm hover:drop-shadow-lg rounded-xl flex flex-col items-center duration-300">
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
                                            <Link to="/basket" className="data-hover bg-grayWhite hover:bg-mainOrange h-12 w-24 drop-shadow-sm rounded-xl flex items-center justify-center duration-500">
                                                <span className="whitespace-nowrap">В корзине</span>
                                            </Link>
                                            :
                                            <button className="bg-mainOrange drop-shadow-sm rounded-xl h-12 w-12 flex justify-center items-center hover:scale-110 duration-500"
                                                    onClick={() => addBasketItem(product.id)}
                                            >
                                                <img src={Basket} alt="Корзина" className="h-8"/>
                                            </button>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-fit bg-mainWhite hover:bg-mainOrange hover:text-grayWhite drop-shadow-sm rounded-xl h-fit py-3 px-5 mx-auto duration-300"
                            // onClick={toggleDelivery}
                        >Показать ещё
                        </button>
                    </div>
                </div>
                :
                    null
            }
        </div>
    );
}

export default ProductList;