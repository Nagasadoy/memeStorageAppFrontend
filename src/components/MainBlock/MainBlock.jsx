import {SideBar} from "./SideBar/SideBar";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import jwtDecode from "jwt-decode";
import useAccessToken from "../../hooks/useAccessToken";
import {useEffect, useState} from "react";
import {getAllMemesUser} from "../../actions/file";
import {MemeCollection} from "../MemeCollection/MemeCollection";

export const MainBlock = () => {

    const [userMemes, setUserMemes] = useState();

    useEffect(() => {
        getAllMemesUser()
            .then(response => response.data)
            .then(data => {
                setUserMemes(data.memes);
                console.log(data);
            });
    }, []);

    return (
        <>
            <SideBar/>
            <MemeCollection memes={userMemes}/>
        </>
    );
}