import './SideBar.css';
import avatar from '../../../assets/images/avatar.jpg';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

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

            <nav>
                <ul>
                    <li><Link to="/meme/create">Создать мем</Link></li>
                    <li><Link to="/tag/create">Создать тэг</Link></li>
                </ul>
            </nav>
        </aside>
    );
}