import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import Reg from "../media/reg.png"

const LogIn = () => {
    let {loginUser} = useContext(AuthContext)

    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
                <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:flex-row">
                    <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                            <img
                                src={Reg}
                                className="btn-"/>
                        </div>
                    </div>
                    <div className="w-full mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                            <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Вход в аккаунт</p>
                            <form className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8" onSubmit={loginUser}>
                                <div className="relative">
                                    <p className="pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-darkBlue absolute">Email</p>
                                    <input placeholder="123@ex.com" type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
                                </div>
                                <div className="relative">
                                    <p className="pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-darkBlue absolute">Пароль</p>
                                    <input placeholder="Password" type="password" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
                                </div>
                                <div className="relative">
                                    <a className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-darkBlue rounded-lg transition duration-200 hover:bg-mainBlue ease cursor-pointer">Войти</a>
                                </div>
                            </form>
                        </div>
                        <svg viewBox="0 0 91 91" className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-mainOrange fill-current">
                            <g stroke="none" strokeWidth="1" fillRule="evenodd">
                                <g fillRule="nonzero">
                                    <g>
                                        <g>
                                            <circle cx="3.261" cy="3.445" r="2.72"/>
                                            <circle cx="15.296" cy="3.445" r="2.719"/>
                                            <circle cx="27.333" cy="3.445" r="2.72"/>
                                            <circle cx="39.369" cy="3.445" r="2.72"/>
                                            <circle cx="51.405" cy="3.445" r="2.72"/>
                                            <circle cx="63.441" cy="3.445" r="2.72"/>
                                            <circle cx="75.479" cy="3.445" r="2.72"/>
                                            <circle cx="87.514" cy="3.445" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 12)">
                                            <circle cx="3.261" cy="3.525" r="2.72"/>
                                            <circle cx="15.296" cy="3.525" r="2.719"/>
                                            <circle cx="27.333" cy="3.525" r="2.72"/>
                                            <circle cx="39.369" cy="3.525" r="2.72"/>
                                            <circle cx="51.405" cy="3.525" r="2.72"/>
                                            <circle cx="63.441" cy="3.525" r="2.72"/>
                                            <circle cx="75.479" cy="3.525" r="2.72"/>
                                            <circle cx="87.514" cy="3.525" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 24)">
                                            <circle cx="3.261" cy="3.605" r="2.72"/>
                                            <circle cx="15.296" cy="3.605" r="2.719"/>
                                            <circle cx="27.333" cy="3.605" r="2.72"/>
                                            <circle cx="39.369" cy="3.605" r="2.72"/>
                                            <circle cx="51.405" cy="3.605" r="2.72"/>
                                            <circle cx="63.441" cy="3.605" r="2.72"/>
                                            <circle cx="75.479" cy="3.605" r="2.72"/>
                                            <circle cx="87.514" cy="3.605" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 36)">
                                            <circle cx="3.261" cy="3.686" r="2.72"/>
                                            <circle cx="15.296" cy="3.686" r="2.719"/>
                                            <circle cx="27.333" cy="3.686" r="2.72"/>
                                            <circle cx="39.369" cy="3.686" r="2.72"/>
                                            <circle cx="51.405" cy="3.686" r="2.72"/>
                                            <circle cx="63.441" cy="3.686" r="2.72"/>
                                            <circle cx="75.479" cy="3.686" r="2.72"/>
                                            <circle cx="87.514" cy="3.686" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 49)">
                                            <circle cx="3.261"  cy="2.767" r="2.72"/>
                                            <circle cx="15.296" cy="2.767" r="2.719"/>
                                            <circle cx="27.333" cy="2.767" r="2.72"/>
                                            <circle cx="39.369" cy="2.767" r="2.72"/>
                                            <circle cx="51.405" cy="2.767" r="2.72"/>
                                            <circle cx="63.441" cy="2.767" r="2.72"/>
                                            <circle cx="75.479" cy="2.767" r="2.72"/>
                                            <circle cx="87.514" cy="2.767" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 61)">
                                            <circle cx="3.261" cy="2.846" r="2.72"/>
                                            <circle cx="15.296" cy="2.846" r="2.719"/>
                                            <circle cx="27.333" cy="2.846" r="2.72"/>
                                            <circle cx="39.369" cy="2.846" r="2.72"/>
                                            <circle cx="51.405" cy="2.846" r="2.72"/>
                                            <circle cx="63.441" cy="2.846" r="2.72"/>
                                            <circle cx="75.479" cy="2.846" r="2.72"/>
                                            <circle cx="87.514" cy="2.846" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 73)">
                                            <circle cx="3.261" cy="2.926" r="2.72"/>
                                            <circle cx="15.296" cy="2.926" r="2.719"/>
                                            <circle cx="27.333" cy="2.926" r="2.72"/>
                                            <circle cx="39.369" cy="2.926" r="2.72"/>
                                            <circle cx="51.405" cy="2.926" r="2.72"/>
                                            <circle cx="63.441" cy="2.926" r="2.72"/>
                                            <circle cx="75.479" cy="2.926" r="2.72"/>
                                            <circle cx="87.514" cy="2.926" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 85)">
                                            <circle cx="3.261" cy="3.006" r="2.72"/>
                                            <circle cx="15.296" cy="3.006" r="2.719"/>
                                            <circle cx="27.333" cy="3.006" r="2.72"/>
                                            <circle cx="39.369" cy="3.006" r="2.72"/>
                                            <circle cx="51.405" cy="3.006" r="2.72"/>
                                            <circle cx="63.441" cy="3.006" r="2.72"/>
                                            <circle cx="75.479" cy="3.006" r="2.72"/>
                                            <circle cx="87.514" cy="3.006" r="2.719"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <svg viewBox="0 0 91 91" className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-darkBlue fill-current">
                            <g stroke="none" strokeWidth="1" fillRule="evenodd">
                                <g fillRule="nonzero">
                                    <g>
                                        <g>
                                            <circle cx="3.261" cy="3.445" r="2.72"/>
                                            <circle cx="15.296" cy="3.445" r="2.719"/>
                                            <circle cx="27.333" cy="3.445" r="2.72"/>
                                            <circle cx="39.369" cy="3.445" r="2.72"/>
                                            <circle cx="51.405" cy="3.445" r="2.72"/>
                                            <circle cx="63.441" cy="3.445" r="2.72"/>
                                            <circle cx="75.479" cy="3.445" r="2.72"/>
                                            <circle cx="87.514" cy="3.445" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 12)">
                                            <circle cx="3.261" cy="3.525" r="2.72"/>
                                            <circle cx="15.296" cy="3.525" r="2.719"/>
                                            <circle cx="27.333" cy="3.525" r="2.72"/>
                                            <circle cx="39.369" cy="3.525" r="2.72"/>
                                            <circle cx="51.405" cy="3.525" r="2.72"/>
                                            <circle cx="63.441" cy="3.525" r="2.72"/>
                                            <circle cx="75.479" cy="3.525" r="2.72"/>
                                            <circle cx="87.514" cy="3.525" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 24)">
                                            <circle cx="3.261" cy="3.605" r="2.72"/>
                                            <circle cx="15.296" cy="3.605" r="2.719"/>
                                            <circle cx="27.333" cy="3.605" r="2.72"/>
                                            <circle cx="39.369" cy="3.605" r="2.72"/>
                                            <circle cx="51.405" cy="3.605" r="2.72"/>
                                            <circle cx="63.441" cy="3.605" r="2.72"/>
                                            <circle cx="75.479" cy="3.605" r="2.72"/>
                                            <circle cx="87.514" cy="3.605" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 36)">
                                            <circle cx="3.261" cy="3.686" r="2.72"/>
                                            <circle cx="15.296" cy="3.686" r="2.719"/>
                                            <circle cx="27.333" cy="3.686" r="2.72"/>
                                            <circle cx="39.369" cy="3.686" r="2.72"/>
                                            <circle cx="51.405" cy="3.686" r="2.72"/>
                                            <circle cx="63.441" cy="3.686" r="2.72"/>
                                            <circle cx="75.479" cy="3.686" r="2.72"/>
                                            <circle cx="87.514" cy="3.686" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 49)">
                                            <circle cx="3.261" cy="2.767" r="2.72"/>
                                            <circle cx="15.296" cy="2.767" r="2.719"/>
                                            <circle cx="27.333" cy="2.767" r="2.72"/>
                                            <circle cx="39.369" cy="2.767" r="2.72"/>
                                            <circle cx="51.405" cy="2.767" r="2.72"/>
                                            <circle cx="63.441" cy="2.767" r="2.72"/>
                                            <circle cx="75.479" cy="2.767" r="2.72"/>
                                            <circle cx="87.514" cy="2.767" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 61)">
                                            <circle cx="3.261" cy="2.846" r="2.72"/>
                                            <circle cx="15.296" cy="2.846" r="2.719"/>
                                            <circle cx="27.333" cy="2.846" r="2.72"/>
                                            <circle cx="39.369" cy="2.846" r="2.72"/>
                                            <circle cx="51.405" cy="2.846" r="2.72"/>
                                            <circle cx="63.441" cy="2.846" r="2.72"/>
                                            <circle cx="75.479" cy="2.846" r="2.72"/>
                                            <circle cx="87.514" cy="2.846" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 73)">
                                            <circle cx="3.261" cy="2.926" r="2.72"/>
                                            <circle cx="15.296" cy="2.926" r="2.719"/>
                                            <circle cx="27.333" cy="2.926" r="2.72"/>
                                            <circle cx="39.369" cy="2.926" r="2.72"/>
                                            <circle cx="51.405" cy="2.926" r="2.72"/>
                                            <circle cx="63.441" cy="2.926" r="2.72"/>
                                            <circle cx="75.479" cy="2.926" r="2.72"/>
                                            <circle cx="87.514" cy="2.926" r="2.719"/>
                                        </g>
                                        <g transform="translate(0 85)">
                                            <circle cx="3.261" cy="3.006" r="2.72"/>
                                            <circle cx="15.296" cy="3.006" r="2.719"/>
                                            <circle cx="27.333" cy="3.006" r="2.72"/>
                                            <circle cx="39.369" cy="3.006" r="2.72"/>
                                            <circle cx="51.405" cy="3.006" r="2.72"/>
                                            <circle cx="63.441" cy="3.006" r="2.72"/>
                                            <circle cx="75.479" cy="3.006" r="2.72"/>
                                            <circle cx="87.514" cy="3.006" r="2.719"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        // <div className="flex flex-col items-center px-1/10 text-center">
        //     <h1 className="text-3xl font-bold mb-10">Вход</h1>
        //     <form className="w-full flex flex-col items-center"
        //           onSubmit={loginUser}
        //     >
        //         <div className="w-full grid grid-labels grid-rows-2 items-center font-light gap-5">
        //             <label htmlFor="email" className="w-fit justify-self-end">E-mail:</label>
        //             <input className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1" id="email"/>
        //             <div/>
        //             <label htmlFor="password" className="w-fit justify-self-end">Пароль:</label>
        //             <input className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1" id="password" type="password"/>
        //         </div>
        //         <button type="submit" className="w-fit justify-self-center bg-mainOrange text-mainWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10">
        //             <p>Войти</p>
        //         </button>
        //         <p className="font-light mt-5">Если у вас ещё нет аккаунта на нашем сайте, вы можете<br/>
        //             <Link to="/registration" className="text-mainOrange underline font-normal">зарегистрироваться</Link>
        //         </p>
        //     </form>
        // </div>
            )
}
export default LogIn;