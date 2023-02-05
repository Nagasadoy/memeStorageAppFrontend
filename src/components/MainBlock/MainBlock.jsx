import {SideBar} from "./SideBar/SideBar";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import jwtDecode from "jwt-decode";
import useAccessToken from "../../hooks/useAccessToken";

export const MainBlock = () => {

    return (
        <>
            <SideBar/>
            <nav>
                <ul>
                    <li><Link to="/meme/create">Meme</Link></li>
                    <li><Link to="/tag/create">Tag</Link></li>
                </ul>
            </nav>
        </>
    );
}