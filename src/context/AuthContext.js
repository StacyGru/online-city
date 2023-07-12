import {useState, useEffect, createContext} from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom' ;

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem('authTokens') ?
            JSON.parse(localStorage.getItem('authTokens')) : null

    );
    let [user, setUser] = useState(() =>
        localStorage.getItem('authTokens') ?
            jwt_decode(localStorage.getItem('authTokens')) : null
    );
    let [loading, setLoading] = useState(true)


    let navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault();

        let response = await fetch(
            'http://127.0.0.1:8000/api/token/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'email': e.target.email.value,
                    'password': e.target.password.value
                })
            });
        let data = await response.json();

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('user')
        } else {
            alert('Что-то пошло не так!')
        }

    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('login')
    }

    let updateToken = async () => {
        if (authTokens) {
            // console.log('Update token called!')
            let response = await fetch(
                'http://127.0.0.1:8000/api/token/refresh/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        'refresh': authTokens?.refresh
                    })
                });
            let data = await response.json();

            if (response.status === 200) {
                setAuthTokens(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
            } else {
                logoutUser()
            }
        }

        if (loading) {
            setLoading(false)
        }
    }


    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
        authTokens:authTokens
    }

    useEffect(() => {
        if (loading) {
            updateToken()
        }

        let lifetime = 1000 * 600 * 59
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, lifetime)
        return () => clearInterval(interval)
    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )

}

export default AuthContext;