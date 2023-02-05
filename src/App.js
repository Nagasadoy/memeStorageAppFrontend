import './App.css';
import {LoginPage} from "./pages/LoginPage";
import {MainBlock} from "./components/MainBlock/MainBlock";
import jwtDecode from "jwt-decode";
import useAccessToken from "./hooks/useAccessToken";
import useRefreshToken from "./hooks/useRefreshToken";

function App() {

    const {accessToken, setAccessToken} = useAccessToken();
    const {refreshToken, setRefreshToken} = useRefreshToken();


    const getUserNameFromToken = () => {
        const tokenData = jwtDecode(accessToken);
        console.log(tokenData);
        return tokenData?.username;
    }

    return (
        <div className="App">
            <h1>{refreshToken}</h1>
            {accessToken === null ?
                <LoginPage
                    setAccessToken={setAccessToken}
                    setRefreshToken={setRefreshToken}
                /> :
                <MainBlock userName={getUserNameFromToken()}/>
            }
        </div>
    );
}

export default App;
