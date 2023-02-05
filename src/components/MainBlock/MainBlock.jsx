import {SideBar} from "./SideBar/SideBar";

export const MainBlock = ({userName}) => {
    return (
        <>
            <h1>{userName}</h1>
            <SideBar/>
        </>
    );
}