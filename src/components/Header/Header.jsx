import './Header.css';
import {Link} from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";
import {useSelector} from "react-redux";

export const Header = () => {
    const userName = useSelector(state => state.username);
    return (
        <nav className="header">
            <section className='user'>
                <h3>{userName}</h3>
            </section>
            <div className="nav-wrapper">
                <nav>
                    <ul>
                        <li><Link to="/meme/create">Создать мем</Link></li>
                        <li><Link to="/tag/create">Создать тэг</Link></li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
}