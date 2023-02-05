import './SideBar.css';
import avatar from '../../../assets/images/avatar.jpg';
import {useSelector} from "react-redux";

export const SideBar = () => {
    const userName = useSelector(state => state.username);
    return (
        <aside className='sidebar'>
            <section className='user'>
                <div className='avatar'>
                    <img src={avatar} alt="avatar"/>
                </div>
                <h3>{userName}</h3>
            </section>
        </aside>
    );
}