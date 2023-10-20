import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";

const LogIn = () => {
	let {loginUser} = useContext(AuthContext)
	const [showPass, setShowPass] = useState(false)

	return (
		<div className="relative">
			<div
				className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5">
				<div className="flex flex-col items-center w-full pt-16 pr-10 pb-16 pl-10 lg:flex-col">
					<div className="w-full mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
						<div
							className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
							<p className="w-full text-4xl font-medium text-center leading-snug">Вход в аккаунт</p>
							<form className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8" onSubmit={loginUser}>
								<div className="relative">
									<p className="pt-0 pr-2 pb-0 pl-2 -mt-6 mr-0 mb-0 ml-2 font-medium text-darkBlue absolute">Email</p>
									<input placeholder="123@mail.ru" type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
								</div>
								<div className="relative">
									<p className="pt-0 pr-2 pb-0 pl-2 -mt-6 mr-0 mb-0 ml-2 font-medium text-darkBlue absolute">Пароль</p>
									<input placeholder="Password" type={showPass ? 'text' : 'password'} className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-6 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
									<button className="absolute top-5 right-2" onClick={() => setShowPass(!showPass)}>
										{showPass ?
											<svg fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
												<g fill="currentColor" fillRule="evenodd">
													<path
														d="M9.964 5.5A.75.75 0 019.958 4a11.921 11.921 0 015.918 1.578C17.566 6.558 19 8.068 19 10c0 1.003-.393 1.901-.999 2.659a.75.75 0 11-1.171-.937c.442-.553.67-1.13.67-1.722 0-1.13-.858-2.245-2.376-3.125A10.411 10.411 0 009.964 5.5zM4.124 14.422C5.844 15.42 8.036 16 10 16c1.605 0 3.355-.388 4.873-1.066l.847.846a.75.75 0 101.06-1.06L5.28 3.22a.75.75 0 00-1.06 1.06l.823.824c-.974.445-1.87 1.02-2.57 1.712C1.606 7.672 1 8.752 1 10c0 1.932 1.433 3.443 3.124 4.422zM8.5 10a1.5 1.5 0 002.53 1.09L8.91 8.97c-.254.269-.41.631-.41 1.03zM7 10a3 3 0 005.09 2.151l1.635 1.635c-1.201.458-2.523.714-3.725.714-1.702 0-3.635-.513-5.124-1.375C3.358 12.245 2.5 11.13 2.5 10c0-.731.35-1.448 1.028-2.117.66-.653 1.593-1.217 2.66-1.635l1.66 1.661A2.99 2.99 0 007 10z"></path>
												</g>
											</svg> :
											<svg fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
												<g fill="currentColor" fillRule="evenodd">
													<path d="M13 10a3 3 0 11-6 0 3 3 0 016 0zm-1.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
													<path
														d="M19 10c0 3.5-5 6-9 6s-9-2.5-9-6 5-6 9-6 9 2.5 9 6zm-1.5 0c0 .983-.72 2.084-2.279 3.03-1.516.92-3.497 1.47-5.221 1.47-1.725 0-3.705-.55-5.222-1.47C3.22 12.084 2.5 10.983 2.5 10c0-.983.72-2.084 2.278-3.03C6.295 6.05 8.275 5.5 10 5.5c1.724 0 3.705.55 5.221 1.47 1.56.946 2.279 2.047 2.279 3.03z"></path>
												</g>
											</svg>
										}
									</button>
								</div>
								<div className="relative">
									<a
										className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-darkBlue rounded-lg transition duration-200 hover:bg-mainOrange ease cursor-pointer">
										Войти</a>
								</div>
							</form>
						</div>
						<svg viewBox="0 0 91 91"
								 className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-mainOrange fill-current">
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
						<svg viewBox="0 0 91 91"
								 className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-darkBlue fill-current">
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