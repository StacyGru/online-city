import React, {useContext, useEffect, useState} from "react"
import CatalogItemImg from "../../media/catalog_item.png";
import Basket from "../../media/basket.png";
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {useParams} from "react-router";
import Arrow from "../../media/arrow.png";
import {
    useAddToBasketMutation, useGetAttributesQuery,
    useGetFiltersQuery,
    useGetProductsQuery, useGetValuesQuery
} from "../../api/apiSlice";
import {skipToken} from '@reduxjs/toolkit/query';
import {useDispatch, useSelector} from "react-redux";
import {categoryChange} from "./CatalogSlice";
import SetCategory from "./SetCategory";


const ProductList = () => {
    let navigate = useNavigate()
    let {user, authTokens} = useContext(AuthContext);
    const {id} = useParams();
    console.log(id)

    // const {data: products = []} = useGetProductsQuery(id ? id : skipToken);

    const {data: products = []} = useGetProductsQuery();
    const {data: values = []} = useGetValuesQuery();
    const {data: attributes = []} = useGetAttributesQuery();


    const [addToBasket] = useAddToBasketMutation();

    // const dispatch = useDispatch();
    // const {request, category_name} = SetCategory(params);
    //
    // useEffect(() => {
    //     dispatch(categoryChange(request));
    // }, [request])
    //
    // async function addBasketItem(id) {
    //     if (authTokens) {
    //         addToBasket({
    //             'client': user.id,
    //             'product': id
    //         })
    //     }
    //     else {
    //         navigate('/login')
    //     }
    // }

    return (
        <div className="">
            {/*<div className="grid grid-cols-3 grid-rows-1 px-1/10">*/}
            {/*    <p className="h-fit w-fit text-xs font-light text-mainGray">*/}
            {/*        <Link to="/catalog" className="hover:underline">Каталог товаров</Link>*/}
            {/*        <span> > </span>*/}
            {/*        {((params.category === 'system_units')||(params.category === 'computer_kits'))*/}
            {/*            ?*/}
            {/*                <>*/}
            {/*                    <Link to="/catalog/computers" className="hover:underline">Компьютеры</Link>*/}
            {/*                    <span> > </span>*/}
            {/*                    <Link to={`/catalog/computers/${params.category}`} className="hover:underline">{category_name}</Link>*/}
            {/*                </>*/}
            {/*            :*/}
            {/*                <Link to={`/catalog/${params.category}`} className="hover:underline">{category_name}</Link>*/}
            {/*        }*/}
            {/*    </p>*/}
            {/*    <h1 className="md:text-xl xl:text-3xl lg:text-2xl font-bold mb-10 text-center">{category_name}</h1>*/}
            {/*    <p className="text-mainGray justify-self-end">{products.length} товаров</p>*/}
            {/*    <div/>*/}
            {/*</div>*/}

            {products
                ?
                    <div className="flex flex-row gap-10 justify-center">
                    <div className="h-fit bg-mainWhite py-5 px-6 drop-shadow-sm rounded-xl flex flex-col font-light">
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
                        {attributes && attributes.map(item => (
                            <>
                                <div key={item.id} className="flex items-center gap-3 mt-3">
                                    <p className="font-normal mb-2">{item.name}</p>
                                    <img src={Arrow} alt="Стрелка" className="w-3 h-3 mb-1 rotate-180"/>
                                </div>
                                {values && values.map(value => {
                                    if (value.attribute_id === item.id) {
                                        return (
                                            <div key={value.id} className="flex flex-row gap-2 items-center">
                                                <input type="checkbox" id="home"
                                                       className="w-4 h-4 border-2 border-darkBlue text-mainWhite accent-mainOrange checked:border-0"/>
                                                <label htmlFor="home">{value.name}</label>
                                            </div>
                                        )
                                    }
                                })}
                            </>
                        ))}
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
                        <div className="w-full grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-5 xl:gap-14 xl:gap-8">
                            {products.map((product) => (
                                <div className="bg-mainWhite py-5 md:px-5 2xl:px-10 drop-shadow-sm hover:drop-shadow-lg rounded-xl flex flex-col items-center duration-300">
                                    <div className="w-auto md:h-24 lg:h-28 xl:h-64 shrink-0 grow-0 m-3">
                                        <img src={product.picture ? product.picture : CatalogItemImg} alt={product.name} className="h-full w-full object-contain"/>
                                    </div>
                                    {/*{((params.category === 'system_units')||(params.category === 'computer_kits'))*/}
                                    {/*    ?*/}
                                    {/*    <Link to={`/catalog/computers/${params.category}/${product.id}`}><h2 className="md:text-base xl:text-xl 2xl:text-3xl hover:underline mb-5">{product.name}</h2></Link>*/}
                                    {/*    :*/}
                                    {/*    <Link to={`/catalog/${params.category}/${product.id}`}><h2 className="hover:underline md:text-xl 2xl:text-3xl mb-5">{product.name}</h2></Link>*/}
                                    {/*}*/}
                                    <p className="font-light mb-3 grow lg:text-xs xl:text-base">{product.short_description}</p>
                                    <div className="w-full flex justify-between items-center self-end">
                                        <h2 className="md:text-xl xl:text-2xl 2xl:text-3xl">{product.price} ₽</h2>
                                        {product.basket_amount ?
                                            <Link to="/basket" className="data-hover bg-grayWhite hover:bg-mainOrange h-12 w-24 drop-shadow-sm rounded-xl flex items-center justify-center duration-500">
                                                <span className="whitespace-nowrap">В корзине</span>
                                            </Link>
                                            :
                                            <button className="bg-mainOrange drop-shadow-sm xl:rounded-xl md:rounded-lg md:h-8 md:w-8 lg:w-9 lg:h-9 lg:w-9 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16 flex justify-center items-center hover:scale-110 duration-500"
                                                    // onClick={() => addBasketItem(product.id)}
                                            >
                                                <img src={Basket} alt="Корзина" className="md:h-5 lg:h-6 xl:h-8 2xl:h-10 2xl:w-10"/>
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