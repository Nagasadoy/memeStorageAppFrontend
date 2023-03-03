import {SideBar} from "./SideBar/SideBar";
import {useEffect, useState} from "react";
import {getAllMemesUser} from "../../actions/file";
import {MemeCollection} from "../MemeCollection/MemeCollection";
import {toast, Toaster} from "react-hot-toast";
import {Header} from "../Header/Header";

export const MainBlock = () => {

    const [userMemes, setUserMemes] = useState([]);

    useEffect(() => {
        getAllMemesUser()
            .then(response => response.data)
            .then(data => {
                setUserMemes(data.memes);
                console.log(data);
            });
    }, []);

    const removeMeme = (memeId) => {
        setUserMemes(userMemes => userMemes.filter(meme => meme.id !== memeId));
        toast('Мем удален!');
    }

    return (
        <>
            {/*<SideBar/>*/}
            <Header/>
            <MemeCollection memes={userMemes} callbackRemove={removeMeme}/>
        </>
    );
}