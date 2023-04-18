import Logo from "../media/logo.png";
import BurgerMenu from "../media/burger_menu.png";
import Search from "../media/search.png";
import Location from "../media/location.png";
import Phone from "../media/phone.png";
import User from "../media/user.png";
import Basket from "../media/basket.png";
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header className="bg-darkBlue w-full h-40 px-20 py-5 flex text-grayWhite mb-10">

            <div className="w-1/6">
                <img src={Logo} className="object-contain h-full w-full"/>
            </div>

            <div className="px-10 w-1/2 flex flex-col">
                <ul className="flex justify-between">
                    <li className="inline"><Link to="/about_us">О компании</Link></li>
                    <li className="inline"><Link to="/">Контакты</Link></li>
                    <li className="inline"><Link to="/">Оплата</Link></li>
                    <li className="inline"><Link to="/">Доставка</Link></li>
                    <li className="inline"><Link to="/">Гарантии</Link></li>
                    <li className="inline"><Link to="/">Гарантии</Link></li>
                    <li className="inline"><Link to="/">Оптовикам</Link></li>
                </ul>
                <div className="mt-7 flex">
                    <button className="bg-mainOrange px-5 py-3 rounded-xl flex justify-center">
                        <img src={BurgerMenu} className="h-7 mr-3"/>
                        <p>Каталог</p>
                    </button>
                    <input className="ml-5 bg-darkBlue border-grayWhite border-2 rounded-xl pl-3 pr-12 font-light w-full" placeholder="Поиск..."/>
                    <img src={Search} className="h-7 my-auto -ml-10"/>
                </div>
            </div>
            <div className="w-1/6 font-light flex flex-col">
                <div className="flex justify-center items-center">
                    <img src={Location} className="h-5 mr-3"/>
                    <p className="">Москва</p>
                </div>
                <div className="mt-7 flex flex-col items-center">
                    <div className="flex items-center">
                        <img src={Phone} className="h-5 mr-3"/>
                        <p>+7 (495) 799-47-42</p>
                    </div>
                    <div className="flex items-center">
                        <img src={Phone} className="h-5 mr-3"/>
                        <p>+7 (495) 780-61-74</p>
                    </div>
                </div>
            </div>
            <div className="w-1/6 flex justify-center items-center">
                <div className="flex flex-col items-center mr-10">
                    <img src={User} className="h-10 mb-1"/>
                    <p>Вход</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Basket} className="h-10 mb-1"/>
                    <p>Корзина</p>
                </div>
            </div>
        </header>
    )
}
export default Header;