import Logo from "../media/logo.png";
import BurgerMenu from "../media/burger_menu.png";
import Search from "../media/search.png";
import Location from "../media/location.png";
import Phone from "../media/phone.png";
import User from "../media/user.png";
import Basket from "../media/basket.png";
import { Link } from 'react-router-dom';
import {useContext} from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {

    let {user} = useContext(AuthContext)

    if ((user && (user.role === "клиент")) || !user) {
        return (
            <header className="w-full grid-header bg-darkBlue md:px-8 lg:px-6 xl:px-16 2xl:px-20 3xl:px-36 py-2.5 flex text-grayWhite mb-10 justify-between items-center">
                <div className="w-1/10 3xl:w-1/10 flex justify-start">
                    <Link to="/"><img src={Logo} alt="Логотип ONCI" className="object-contain md:h-10 lg:h-12 xl:h-14 2xl:h-16 m-auto"/></Link>
                </div>
                <div className="w-1/2 md:w-2/3 2xl:w-7/12 3xl:w-1/3 flex flex-col justify-center px-5">
                    <ul className="flex justify-between">
                        <li className="inline hover:text-mainOrange duration-500"><Link to="/about_us">О компании</Link></li>
                        <li className="inline hover:text-mainOrange duration-500"><Link to="/contacts">Контакты</Link></li>
                        <li className="inline hover:text-mainOrange duration-500"><Link to="/payment">Оплата</Link></li>
                        <li className="inline hover:text-mainOrange duration-500"><Link to="/delivery">Доставка</Link></li>
                        <li className="inline hover:text-mainOrange duration-500"><Link to="/guarantees">Гарантии</Link></li>
                        <li className="inline hover:text-mainOrange duration-500"><Link to="/for_wholesalers">Оптовикам</Link></li>
                    </ul>
                    <div className="flex mt-2">
                        <Link to="/catalog" className="bg-mainOrange px-5 py-1 rounded-xl flex justify-center items-center hover:scale-110 duration-500">
                            <img src={BurgerMenu} alt="Гамбургер-меню" className="h-5 mr-3"/>
                            <p>Каталог</p>
                        </Link>
                        <div className="ml-10 w-full border-grayWhite border-2 rounded-xl px-3 flex justify-between items-center">
                            <input className="grow bg-darkBlue font-light" placeholder="Поиск..."/>
                            <Link to="/search"><img src={Search} alt="Поиск" className="h-3.5 my-auto ml-3"/></Link>
                        </div>
                    </div>
                </div>
                <div className="w-1/6 3xl:w-1/10 font-light hidden lg:flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center">
                        <img src={Location} alt="Местоположение" className="h-4 mr-3"/>
                        <p className="">Москва</p>
                    </div>
                    <div className="text-sm mt-2 items-center">
                        <div className="flex items-center">
                            <img src={Phone} alt="Телефон" className="h-4 mr-3"/>
                            <p>+7 (903) 799-47-42</p>
                        </div>
                        <div className="flex items-center">
                            <img src={Phone} alt="Телефон" className="h-4 mr-3"/>
                            <p>+7 (903) 014-42-54</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/10 3xl:w-1/10 flex justify-end items-center gap-x-5 xl:gap-x-7 text-md">
                    {user ?
                        <Link to="/user">
                            <div className="flex flex-col items-center">
                                <img src={User} alt="Пользователь" className="object-contain xl:h-7 lg:h-6 mb-1"/>
                                <p>{user.name}</p>
                            </div>
                        </Link>
                        :
                        <Link to="/login">
                            <div className="flex flex-col items-center">
                                <img src={User} alt="Пользователь" className="object-contain xl:h-7 lg:h-6 mb-1"/>
                                <p>Вход</p>
                            </div>
                        </Link>}
                    <Link to="/basket">
                        <div className="flex flex-col items-center">
                            <img src={Basket} alt="Корзина" className="object-contain xl:h-7 lg:h-6 mb-1"/>
                            <p>Корзина</p>
                        </div>
                    </Link>
                </div>
            </header>
        )
    } else {
        return (
            <header className="grid-header bg-darkBlue xl:px-20 3xl:px-36 px-10 xl:py-5 py-3 flex text-grayWhite mb-10 justify-center items-center">
                <div className="w-1/6 3xl:w-1/10">
                    <img src={Logo} alt="Логотип ONCI" className="object-contain h-20 m-auto"/>
                </div>

                <div className="w-1/6 3xl:w-1/10 flex justify-center items-center gap-x-5 xl:gap-x-10">
                    {user ?
                        <Link to="/user">
                            <div className="flex flex-col items-center">
                                <img src={User} alt="Пользователь" className="object-contain xl:h-5 h-1 mb-1"/>
                                <p>{user.name}</p>
                            </div>
                        </Link>
                        :
                        <Link to="/login">
                            <div className="flex flex-col items-center">
                                <img src={User} alt="Пользователь" className="object-contain xl:h-5 h-3 mb-1"/>
                                <p>Вход</p>
                            </div>
                        </Link>
                    }

                </div>
            </header>
        )
    }
}
export default Header;