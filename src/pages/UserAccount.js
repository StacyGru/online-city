import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";


const UserAccount = () => {

    let {user, logoutUser} = useContext(AuthContext)
    // console.log(user)

    return (
        <div className="flex flex-col items-center px-10">
            <h1 className="text-3xl font-bold mb-10">Личный кабинет</h1>
            {user && <h3>Здравствуйте, {user.name}!</h3>}
            <button type="submit" className="w-fit justify-self-center bg-mainOrange text-grayWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10"
            onClick={logoutUser}
            >
            <p>Выйти</p>
            </button>
        </div>
            )
}
export default UserAccount;