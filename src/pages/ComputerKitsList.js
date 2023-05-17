import axios from 'axios'
import React from "react"
import CatalogItemImg from "../media/catalog_item.png";
import Basket from "../media/basket.png";
import {Link} from "react-router-dom";

class SystemUnitsList extends React.Component {

    state = { details: [], }

    componentDidMount() {
        let data;
        axios.get('http://127.0.0.1:8000/computer_kits')
            .then(res => {
                data = res.data;
                this.setState({
                    details: data
                });
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <div className="grid grid-cols-3 grid-rows-1 px-1/10">
                    <p className="h-fit w-fit text-xs font-light text-mainGray">
                        <Link to="/catalog" className="hover:underline">Каталог товаров</Link>
                        <span> > </span>
                        <Link to="/computers" className="hover:underline">Компьютеры</Link>
                        <span> > </span>
                        <Link to="/computer_kits" className="hover:underline">Компьютеры в комплекте</Link>
                    </p>
                    <h1 className="text-xl lg:text-3xl font-bold mb-10 text-center">Компьютеры в комплекте</h1>
                    <p className="text-mainGray justify-self-end">{this.state.details.length} товара</p>
                    <div/>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    {this.state.details.map((product, id) => (
                        <div className="w-72 bg-mainWhite py-5 px-10 drop-shadow-sm rounded-xl flex flex-col items-center">
                            <img src={product.picture ? "http://localhost:8000"+product.picture : CatalogItemImg} className="object-contain h-64 m-5"/>
                            <h2 className="text-xl mb-5">{product.name}</h2>
                            <p className="font-light mb-5 grow">{product.short_description}</p>
                            <div className="w-full flex justify-between items-center self-end">
                                <h2 className="text-2xl">{product.price} ₽</h2>
                                <button className="bg-mainOrange drop-shadow-sm rounded-xl h-12 w-12 flex justify-center items-center">
                                    <img src={Basket} className="h-8"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default SystemUnitsList;