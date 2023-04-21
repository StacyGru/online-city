import Logo from "../media/logo.png";
import BurgerMenu from "../media/burger_menu.png";
import Search from "../media/search.png";
import Location from "../media/location.png";
import Phone from "../media/phone.png";
import User from "../media/user.png";
import Basket from "../media/basket.png";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="grid-header bg-darkBlue xl:px-20 3xl:px-36 px-10 xl:py-5 py-3 flex text-grayWhite mb-10 justify-center items-center">

            <div className="w-1/6 3xl:w-1/10">
                <Link to="/"><img src={Logo} className="object-contain h-20 m-auto"/></Link>
            </div>

            <div className="w-1/2 md:w-2/3 2xl:w-2/5 3xl:w-1/3 flex flex-col justify-center px-5">
                <ul className="flex justify-between">
                    <li className="inline"><Link to="/about_us">О компании</Link></li>
                    <li className="inline"><Link to="/contacts">Контакты</Link></li>
                    <li className="inline"><Link to="/payment">Оплата</Link></li>
                    <li className="inline"><Link to="/delivery">Доставка</Link></li>
                    <li className="inline"><Link to="/guarantees">Гарантии</Link></li>
                    <li className="inline"><Link to="/for_wholesalers">Оптовикам</Link></li>
                </ul>
                <div className="flex mt-3">
                    <button className="bg-mainOrange px-5 py-2 rounded-xl flex justify-center items-center">
                        <img src={BurgerMenu} className="h-5 mr-3"/>
                        <p>Каталог</p>
                    </button>
                    <div className="ml-5 w-full border-grayWhite border-2 rounded-xl px-3 flex justify-between items-center">
                        <input className="grow bg-darkBlue font-light" placeholder="Поиск..."/>
                        <img src={Search} className="h-5 my-auto ml-3"/>
                    </div>
                </div>
                <div className="lg:hidden flex gap-x-5 mt-3">
                    <div className="flex justify-center items-center">
                        <img src={Location} className="h-3 mr-2"/>
                        <p className="">Москва</p>
                    </div>
                    <div className="flex items-center">
                        <img src={Phone} className="h-3 mr-2"/>
                        <p>+7 (495) 799-47-42</p>
                    </div>
                    <div className="flex items-center">
                        <img src={Phone} className="h-3 mr-2"/>
                        <p>+7 (495) 780-61-74</p>
                    </div>
                </div>
            </div>
            <div className="w-1/6 3xl:w-1/10 font-light hidden lg:flex flex-col justify-center">
                <div className="flex justify-center items-center">
                    <img src={Location} className="h-4 mr-3"/>
                    <p className="">Москва</p>
                </div>
                <div className="text-sm mt-3 flex flex-col items-center">
                    <div className="flex items-center">
                        <img src={Phone} className="h-4 mr-3"/>
                        <p>+7 (495) 799-47-42</p>
                    </div>
                    <div className="flex items-center">
                        <img src={Phone} className="h-4 mr-3"/>
                        <p>+7 (495) 780-61-74</p>
                    </div>
                </div>
            </div>
            <div className="w-1/6 3xl:w-1/10 flex justify-center items-center gap-x-5 xl:gap-x-10">
                <div className="flex flex-col items-center">
                    <img src={User} className="object-contain xl:h-10 h-5 mb-1"/>
                    <p>Вход</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Basket} className="object-contain xl:h-10 h-5 mb-1"/>
                    <p>Корзина</p>
                </div>
            </div>
        </header>
    )
}
export default Header;