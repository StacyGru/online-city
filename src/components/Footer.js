import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <footer className="grid-footer bg-darkBlue px-20 py-5 h-fit flex flex-col justify-center font-light text-xs lg:text-sm text-grayWhite text-opacity-80 mt-10">
            <p><Link to="https://yandex.ru/maps/-/CXh8FfC" className="hover:text-mainOrange">127018, г. Москва, ул. Сущевский вал, д. 5, стр. 1, ТК «Савеловский»; пав. 2F-06</Link></p>
            <p><Link to="tel:+79037994742" className="hover:text-mainOrange">+7 (903) 799-47-42</Link>, <Link to="tel:+79030144254" className="hover:text-mainOrange">+7 (903) 014-42-54</Link></p>
            <p>© Online City, 1999-2023</p>
        </footer>
    )
}
export default Footer;