import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";


const LogIn = () => {
    let {loginUser} = useContext(AuthContext)

    return (
        <div className="flex flex-col items-center px-1/10 text-center">
            <h1 className="text-3xl font-bold mb-10">Вход</h1>
            <form className="w-full flex flex-col items-center"
                  onSubmit={loginUser}
            >
                <div className="w-full grid grid-labels grid-rows-2 items-center font-light gap-5">
                    <label htmlFor="email" className="w-fit justify-self-end">E-mail:</label>
                    <input className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1" id="email"/>
                    <div/>
                    <label htmlFor="password" className="w-fit justify-self-end">Пароль:</label>
                    <input className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1" id="password" type="password"/>
                </div>
                <button type="submit" className="w-fit justify-self-center bg-mainOrange text-grayWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10">
                    <p>Войти</p>
                </button>
                <p className="font-light mt-5">Если у вас ещё нет аккаунта на нашем сайте, вы можете<br/>
                    <Link to="/registration" className="text-mainOrange underline font-normal">зарегистрироваться</Link>
                </p>
            </form>
        </div>
            )
}
export default LogIn;