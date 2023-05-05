const Registration = () => {

    return (
        <div className="flex flex-col items-center px-1/10 text-center">
            <h1 className="text-3xl font-bold mb-10">Регистрация</h1>
            <form className="w-full flex flex-col items-center">
                <div className="w-full grid grid-labels grid-rows-2 items-center font-light gap-5">
                    <label htmlFor="name" className="w-fit justify-self-end">Имя:</label>
                    <input className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1" id="name"/>
                    <div/>
                    <label htmlFor="surname" className="w-fit justify-self-end">Фамилия:</label>
                    <input className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1" id="surname"/>
                    <div/>
                    <label htmlFor="phone" className="w-fit justify-self-end">Телефон:</label>
                    <input className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1" id="phone"/>
                    <div/>
                    <label htmlFor="email" className="w-fit justify-self-end">E-mail:</label>
                    <input className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1" id="email"/>
                    <div/>
                    <label htmlFor="password" className="w-fit justify-self-end">Пароль:</label>
                    <input className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1" id="password"/>
                    <div/>
                    <label htmlFor="password_confirmation" className="w-fit justify-self-end">Подтверждение пароля:</label>
                    <input className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1" id="password_confirmation"/>
                </div>
                <button type="submit" className="w-fit justify-self-center bg-mainOrange text-grayWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10">
                    <p>Зарегистрироваться</p>
                </button>
                <p className="w-2/5 3xl:w-1/5  font-light mt-5">Нажимая кнопку «Зарегистрироваться», вы даёте свое согласие на сбор и обработку персональных данных</p>

            </form>
        </div>
            )
}
export default Registration;