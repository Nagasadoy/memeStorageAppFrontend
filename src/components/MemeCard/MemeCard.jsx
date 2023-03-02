import './MemeCard.css';
import {TagCollection} from "../TagCollection/TagCollection";
import {Link} from "react-router-dom";

export const MemeCard = ({meme}) => {

    // <div className="meme-card">
    //     <div className="card-img">
    //         <img
    //             src={meme.fileLink}
    //             alt=""
    //         />
    //     </div>
    //     <div className="card-content">
    //         <Link to={"/meme/edit/" + meme.id}>{meme.userMemeName}</Link>
    //     </div>
    //     <section className='tags'>
    //         <TagCollection tags={meme.tags}/>
    //     </section>
    // </div>

    const copyButtonHandler = (e) => {

    }

    return (
        <div className='wrapper'>

            <div className='card'>
                <div className='card-title'>
                    <Link to={"/meme/edit/" + meme.id} download>
                        <img className='card-img' src={meme.fileLink} alt=''/>
                        {meme.userMemeName}
                    </Link>
                </div>

                <div className='btn-keeper'>
                    {/*<a className='btn' href='#'>Скопировать</a>*/}
                    <button className='btn'>Скопировать</button>
                </div>

                <section className='tags'>
                    <TagCollection tags={meme.tags}/>
                </section>
            </div>
        </div>
    );
}