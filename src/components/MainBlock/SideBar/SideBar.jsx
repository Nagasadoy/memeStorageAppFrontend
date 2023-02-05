import './SideBar.css';
import avatar from '../../../assets/images/avatar.jpg';

export const SideBar = () => {
    return (
        <aside className='sidebar'>
            <section className='user'>
                <div className='avatar'>
                    <img src={avatar} alt="avatar"/>
                </div>
                <h3>Username</h3>
            </section>
        </aside>
    );
}