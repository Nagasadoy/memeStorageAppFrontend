import './App.css';
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {MainBlock} from "./components/MainBlock/MainBlock";
import jwtDecode from "jwt-decode";
import useAccessToken from "./hooks/useAccessToken";
import useRefreshToken from "./hooks/useRefreshToken";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CreateMemePage} from "./pages/CreateMemePage/CreateMemePage";
import {CreateTagPage} from "./pages/CreateTagPage/CreateTagPage";
import {createStore} from "redux";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const {accessToken, setAccessToken} = useAccessToken();
    const {refreshToken, setRefreshToken} = useRefreshToken();


    if (!accessToken) {
        return (
            <LoginPage
                setAccessToken={setAccessToken}
                setRefreshToken={setRefreshToken}
            />
        );
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainBlock/>}/>
                    <Route path="/meme/create" element={<CreateMemePage/>}/>
                    <Route path="/tag/create" element={<CreateTagPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
