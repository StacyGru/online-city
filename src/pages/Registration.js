
import {Formik, Form, Field } from 'formik';
import {Tooltip} from "react-tooltip";
import InputMask from "react-input-mask";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom' ;

function validateEmail(value) {
    if (!value) {
        return 'Поле обязательно для заполнения!';
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value)) {
        return 'Некорректный e-mail!';
    }
}

function validatePhone(value) {
    if (value === "+7(___)-___-__-__") {
        return 'Поле обязательно для заполнения!';
    } else if (!/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/i.test(value)) {
        return 'Некорректный телефон!';
    }
}

function validatePassword(value) {
    if (!value) {
        return 'Поле обязательно для заполнения!';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(value)) {
        return 'Пароль должен содержать минимум 8 символов, хотя бы одну букву верхнего и нижнего регистра (A-z) и хотя бы одну цифру (0-9)';
    }
}

const Registration = () => {

    let navigate = useNavigate()

    const yup = Yup.object({
        name: Yup.string()
            .required("Поле обязательно для заполнения!"),
        surname: Yup.string()
            .required("Поле обязательно для заполнения!"),
        phone: Yup.string()
            .required("Поле обязательно для заполнения!"),
        password_confirmation: Yup.string()
            .required("Поле обязательно для заполнения!")
            .oneOf([Yup.ref("password"), null], "Пароли должны совпадать!")
    })

    const submit = async (values) => {
        let response = await fetch('http://127.0.0.1:8000/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: values.name,
                surname: values.surname,
                phone: values.phone.replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, ''),
                email: values.email,
                password: values.password,
                role: "клиент"
            })
        })
        if (response.status === 200) {
            navigate('/login')
        }
    }

    return (
        <div className="flex flex-col items-center px-1/10 text-center">
            <h1 className="text-3xl font-bold mb-10">Регистрация</h1>
            <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        phone: '',
                        email: '',
                        password: '',
                        password_confirmation: ''
                    }}
                    validationSchema={yup}
                    onSubmit={submit}

            >
                {({
                      errors,
                      touched,
                  }) => (
                <Form className="w-full flex flex-col items-center">
                    <div className="w-full grid grid-labels grid-rows-2 items-center font-light gap-5">
                        <label htmlFor="name" className="w-fit justify-self-end">Имя:</label>
                        {
                            (errors.name && touched.name)
                                ?
                                <Field className="bg-mainWhite border-mainOrange border-2 rounded-xl px-3 py-1"
                                       id="name"
                                       name="name"
                                       maxlength="50"
                                       validate={yup}
                                />
                                :
                                <Field className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1"
                                       id="name"
                                       name="name"
                                       maxlength="50"
                                       validate={yup}
                                />
                        }
                        {errors.name && touched.name && [
                            <Tooltip
                                anchorId="name"
                                place="right"
                                content={errors.name}
                                style={{ backgroundColor: "#232F34", color: "#F5F5F5", borderRadius: "12px"}}
                            />
                        ]}
                        <div/>
                        <label htmlFor="surname" className="w-fit justify-self-end">Фамилия:</label>
                        {
                            (errors.surname && touched.surname)
                                ?
                                <Field className="bg-mainWhite border-mainOrange border-2 rounded-xl px-3 py-1"
                                       id="surname"
                                       name="surname"
                                       maxlength="50"
                                       validate={yup}
                                />
                                :
                                <Field className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1"
                                       id="surname"
                                       name="surname"
                                       maxlength="50"
                                       validate={yup}
                                />
                        }
                        {errors.surname && touched.surname && [
                            <Tooltip
                                anchorId="surname"
                                place="right"
                                content={errors.surname}
                                style={{ backgroundColor: "#232F34", color: "#F5F5F5", borderRadius: "12px"}}
                            />
                        ]}
                        <div/>
                        <label htmlFor="phone" className="w-fit justify-self-end">Телефон:</label>
                        <Field name="phone" validate={validatePhone}>
                            {
                                ({ field }) => {
                                    if (errors.phone && touched.phone) {
                                        return <InputMask className="w-full bg-mainWhite border-mainOrange border-2 rounded-xl px-3 py-1"
                                                            mask="+7 (999) 999-99-99"
                                                            id="phone"
                                                            {...field}
                                        />
                                    } else {
                                        return <InputMask className="w-full bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1"
                                                            mask="+7 (999) 999-99-99"
                                                            id="phone"
                                                            {...field}
                                        />
                                    }
                                }
                            }
                        </Field>
                        {errors.phone && touched.phone && [
                            <Tooltip
                                anchorId="phone"
                                place="right"
                                content={errors.phone}
                                style={{ backgroundColor: "#232F34", color: "#F5F5F5", borderRadius: "12px" }}
                            />
                        ]}
                        <div/>
                        <label htmlFor="email" className="w-fit justify-self-end">E-mail:</label>
                        {
                            (errors.email && touched.email)
                            ?
                                <Field className="bg-mainWhite border-mainOrange border-2 rounded-xl px-3 py-1"
                                       id="email"
                                       name="email"
                                       validate={validateEmail}

                                />
                                :
                                <Field className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1"
                                       id="email"
                                       name="email"
                                       validate={validateEmail}
                                />
                        }
                        {errors.email && touched.email && [
                            <Tooltip
                                anchorId="email"
                                place="right"
                                content={errors.email}
                                style={{ backgroundColor: "#232F34", color: "#F5F5F5", borderRadius: "12px" }}
                            />
                        ]}
                        <div/>
                        <label htmlFor="password" className="w-fit justify-self-end">Пароль:</label>
                        {
                            (errors.password && touched.password)
                                ?
                                <Field className="bg-mainWhite border-mainOrange border-2 rounded-xl px-3 py-1"
                                       id="password"
                                       name="password"
                                       type="text"
                                       validate={validatePassword}
                                />
                                :
                                <Field className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1"
                                       id="password"
                                       name="password"
                                       type="text"
                                       validate={validatePassword}
                                />
                        }
                        {errors.password && touched.password && [
                            <Tooltip
                                anchorId="password"
                                place="right"
                                content={errors.password}
                                style={{ backgroundColor: "#232F34", color: "#F5F5F5", borderRadius: "12px", maxWidth: "15rem" }}
                            />
                        ]}
                        <div/>
                        <label htmlFor="password_confirmation" className="w-fit justify-self-end">Подтверждение пароля:</label>
                        {
                            (errors.password_confirmation && touched.password_confirmation)
                                ?
                                <Field className="bg-mainWhite border-mainOrange border-2 rounded-xl px-3 py-1"
                                       id="password_confirmation"
                                       name="password_confirmation"
                                       type="text"
                                       validate={yup}
                                />
                                :
                                <Field className="bg-mainWhite border-darkBlue border-2 rounded-xl px-3 py-1"
                                       id="password_confirmation"
                                       name="password_confirmation"
                                       type="text"
                                       validate={yup}
                                />
                        }
                        {errors.password_confirmation && touched.password_confirmation && [
                            <Tooltip
                                anchorId="password_confirmation"
                                place="right"
                                content={errors.password_confirmation}
                                style={{ backgroundColor: "#232F34", color: "#F5F5F5", borderRadius: "12px", maxWidth: "15rem" }}
                            />
                        ]}
                    </div>
                    <button type="submit" className="w-fit justify-self-center bg-mainOrange text-mainWhite px-5 py-2 rounded-xl flex justify-center items-center mt-10">
                        <p>Зарегистрироваться</p>
                    </button>
                </Form>
                    )}
            </Formik>
            <p className="w-2/5 3xl:w-1/5  font-light mt-5">Нажимая кнопку «Зарегистрироваться», вы даёте свое согласие на сбор и обработку персональных данных</p>
        </div>
            )
}
export default Registration;