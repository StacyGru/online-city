import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import CatalogItemImg from "../media/catalog_item.png";
import Delete from "../media/delete.png";
import Edit from "../media/edit.png";
import Plus from "../media/plus.png";
import Minus from "../media/minus.png";
import {useParams} from "react-router";

function ProductForm() {

    let navigate = useNavigate()
    let {logoutUser, authTokens, user} = useContext(AuthContext)
    let [product, setProduct] = useState([])
    let [amountOfRAM, setAmountOfRAM] = useState([])
    let [processorSeries, setProcessorSeries] = useState([])
    let [videoCard, setVideoCard] = useState([])

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
            `http://127.0.0.1:8000/product/${params.id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => setProduct(data))
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
    }, [])

    console.log(product)

    function save() {
        navigate('/user')
    }

    if (user && (user.role === "администратор")) {
        return (
            <div className="flex flex-col items-center px-10">
                <h1 className="text-3xl font-bold mb-10">Личный кабинет</h1>
                <div className="flex flex-row px-10 gap-10">
                    <div className="flex flex-col items-center">
                        <div className="bg-mainWhite p-10 drop-shadow-sm rounded-xl flex flex-col gap-3 h-fit">
                            <h2 className="text-2xl font-normal">Каталог</h2>
                            <Link to="/" className="hover:underline">Компьютеры</Link>
                            <Link to="/" className="ml-5 text-mainOrange hover:underline">Системные блоки</Link>
                            <Link to="/" className="ml-5 hover:underline">Компьютеры в комплекте</Link>
                            <Link to="/" className="hover:underline">Мониторы</Link>
                            <Link to="/" className="hover:underline">Спецпредложения</Link>
                        </div>
                        <button type="submit"
                                className="w-fit justify-self-center bg-mainOrange text-mainWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10"
                                onClick={logoutUser}
                        >
                            <p>Выйти</p>
                        </button>
                    </div>
                    {product.product
                        ?
                            <div className="flex flex-col items-center px-10">
                            <div className="bg-mainWhite p-10 drop-shadow-sm rounded-xl flex flex-col">
                                <h2 className="text-2xl mb-10 text-center">Изменение товара</h2>
                                <div className="w-full grid grid-order items-center gap-8 font-light">
                                    <label htmlFor="name">Название:</label>
                                    <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                           id="name"
                                           defaultValue={product.product.name}
                                    />
                                    <label htmlFor="name">Краткое описание:</label>
                                    <textarea className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1 no-scrollbar h-24"
                                           id="name"
                                           defaultValue={product.product.short_description}
                                    />
                                    <label htmlFor="name">Цена:</label>
                                    <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                           id="name"
                                           defaultValue={product.product.price}
                                    />
                                    <label htmlFor="name">Фотография:</label>
                                    <input className=""
                                           id="name"
                                           type="file"
                                           // defaultValue={product.product.picture}
                                    />
                                    <label htmlFor="name">Предназначение:</label>
                                    <select className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                           id="name"
                                    >
                                        <option className="font-light" value="для дома">для дома</option>
                                        <option className="font-light" value="для офиса">для офиса</option>
                                        <option className="font-light" value="для игр">для игр</option>
                                    </select>
                                    <label htmlFor="name">Объём оперативной памяти:</label>
                                    <select className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                            id="name"
                                            defaultValue={product.details.amount_of_ram}
                                    >
                                        {amountOfRAM.map((item) => (
                                            <option className="font-light" value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="name">Серия процессора:</label>
                                    <select className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                            id="name"
                                            defaultValue={product.details.processor_series}
                                    >
                                        {processorSeries.map((item) => (
                                            <option className="font-light" value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="name">Объём HDD:</label>
                                    <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                           id="name"
                                           defaultValue={product.details.hdd_volume}
                                    />
                                    <label htmlFor="name">Объём SSD:</label>
                                    <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                           id="name"
                                           defaultValue={product.details.ssd_volume}
                                    />
                                    <label htmlFor="name">Модель видеокарты:</label>
                                    <select className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                            id="name"
                                            defaultValue={product.details.video_card}
                                    >
                                        {videoCard.map((item) => (
                                            <option className="font-light" value={item.name}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-fit justify-self-center bg-mainOrange text-mainWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10"
                                    onClick={save}
                            >
                                <p>Сохранить</p>
                            </button>
                        </div>
                        :
                            <div className="flex flex-col items-center px-10">
                            <div className="bg-mainWhite p-10 drop-shadow-sm rounded-xl flex flex-col">
                                <h2 className="text-2xl mb-10 text-center">Добавление товара</h2>
                                <div className="w-full grid grid-order items-center gap-8 font-light">
                                    <label htmlFor="naming">Название:</label>
                                    <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                           id="naming"
                                           // defaultValue={product.product.name}
                                    />
                                    <label htmlFor="description">Краткое описание:</label>
                                    <textarea className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1 no-scrollbar h-24"
                                              id="description"
                                              // defaultValue={product.product.short_description}
                                    />
                                    <label htmlFor="price">Цена:</label>
                                    <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                           id="price"
                                           // defaultValue={product.product.price}
                                    />
                                    <label htmlFor="picture">Фотография:</label>
                                    <input className=""
                                           id="picture"
                                           type="file"
                                        // defaultValue={product.product.picture}
                                    />
                                    <label htmlFor="purpose">Предназначение:</label>
                                    <select className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                            id="purpose"
                                    >
                                        <option className="font-light" value="для дома">для дома</option>
                                        <option className="font-light" value="для офиса">для офиса</option>
                                        <option className="font-light" value="для игр">для игр</option>
                                    </select>
                                    <label htmlFor="ram">Объём оперативной памяти:</label>
                                    <select className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                            id="ram"
                                            // defaultValue={product.details.amount_of_ram}
                                    >
                                        {amountOfRAM.map((item) => (
                                            <option className="font-light" value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="processor">Серия процессора:</label>
                                    <select className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                            id="processor"
                                            // defaultValue={product.details.processor_series}
                                    >
                                        {processorSeries.map((item) => (
                                            <option className="font-light" value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="hdd">Объём HDD:</label>
                                    <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                           id="hdd"
                                           // defaultValue={product.details.hdd_volume}
                                    />
                                    <label htmlFor="ssd">Объём SSD:</label>
                                    <input className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                           id="ssd"
                                           // defaultValue={product.details.ssd_volume}
                                    />
                                    <label htmlFor="video_card">Модель видеокарты:</label>
                                    <select className="bg-grayWhite drop-shadow-sm rounded-xl px-3 py-1"
                                            id="video_card"
                                            // defaultValue={product.details.video_card}
                                    >
                                        {videoCard.map((item) => (
                                            <option className="font-light" value={item.name}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-fit justify-self-center bg-mainOrange text-mainWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10"
                                    onClick={save}
                            >
                                <p>Сохранить</p>
                            </button>
                        </div>
                    }


                </div>



            </div>
        )
    }
    else {
        navigate('/login')
    }
}

export default ProductForm;