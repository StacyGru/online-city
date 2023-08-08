import {Link} from "react-router-dom";

const Contacts = () => {

    return (
        <div className="flex flex-col items-center px-1/10">
            <h1 className="text-3xl font-bold mb-10">Контакты</h1>
            <div className="bg-mainWhite py-10 px-20 drop-shadow-sm rounded-xl flex w-full gap-10">
                <div style={{ position: "relative", overflow: "hidden" }} className="drop-shadow-sm w-3/5 shrink-0 grow-0">
                    <a
                        href="https://yandex.ru/maps/org/savyolovskiy/1151616644/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
                    >
                        Савёловский
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/category/shopping_mall/184108083/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
                    >
                        Торговый центр в Москве
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/category/clothing_store/184107943/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: "#eee", fontSize: 12, position: "absolute", top: 28 }}
                    >
                        Магазин одежды в Москве
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.592833%2C55.794143&mode=search&oid=1151616644&ol=biz&z=16.58"
                        width="100%"
                        height="100%"
                        frameBorder={1}
                        allowFullScreen="true"
                        style={{ position: "relative" }}

                    />
                </div>
                <div className="flex flex-col font-light gap-5">
                    <p><b>Адрес:</b> 127018, г. Москва, ул. Сущевский вал, д. 5, стр. 1, ТК «Савеловский»; пав. 2F-06.</p>
                    <p>Центральный вход старого компьютерного торгового комплекса, 2 этаж, павильон располагается справа.
                    Посмотреть местоположение павильона на общей схеме торгового комплекса можно <Link to="https://www.savel.ru/schemes/pc:2#id-2F06" className="text-mainOrange before:bg-mainOrange link-hover-underline">по ссылке</Link>.</p>
                    <p><b>Время работы:</b> с 11:00 до 19:30.</p>
                    <p><b>Контактные телефоны:</b> <Link to="tel:+79037994742" className="hover:text-mainOrange">+7 (903) 799-47-42</Link>, <Link to="tel:+79030144254" className="hover:text-mainOrange">+7 (903) 014-42-54</Link>.</p>
                    <p><b>Электронная почта:</b> <Link to="mailto:info@onci.ru" className="hover:text-mainOrange">info@onci.ru</Link>.</p>
                </div>
            </div>
        </div>
            )
}
export default Contacts;