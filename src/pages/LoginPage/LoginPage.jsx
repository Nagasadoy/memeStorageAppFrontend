import './LoginPage.css';
import {useState} from "react";
import axios, {post} from "axios";
import useAccessToken from "../../hooks/useAccessToken";
import {useDispatch} from "react-redux";
import jwtDecode from "jwt-decode";

export const LoginPage = ({setRefreshToken, setAccessToken}) => {

    const dispatch = useDispatch();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState('');

    const host = 'http://localhost:8080';
    const url = `${host}/api/user/login`;

    const loginUser = (credentials) => {
        axios.post(url, credentials)
            .then(response => response.data)
            .then(data => {
                setAccessToken(data?.token);
                setRefreshToken(data?.refresh_token);
                setErrorMsg('');
                setErrorMsg('');

                const tokenData = jwtDecode(data?.token);
                dispatch({type:'SET_USER_NAME', payload: tokenData?.username});
            })
            .catch(function (error) {
                console.log(error);
                setErrorMsg('Неверный логин или пароль!');
            });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        loginUser({
           'email': login,
            'password': password
        });
    }

    return (
        <form className='loginForm' onSubmit={handleSubmit}>
            <h1>Вход</h1>
            {errorMsg !== '' ?
                <span className='errorMsg'>
                    {errorMsg}
                </span>
                : ''
            }
            <div>
                <input
                    type='text'
                    placeholder='Логин'
                    name='login'
                    onChange={e => setLogin(e.target.value)}
                />
            </div>
            <div>
                <input
                    type='password'
                    placeholder='Пароль'
                    name='password'
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button type='submit'>
                    Войти
                </button>
            </div>
        </form>
    )
}