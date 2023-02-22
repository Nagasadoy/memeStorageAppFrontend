import './MemeCard.css';
import {TagCollection} from "../TagCollection/TagCollection";

export const MemeCard = ({meme}) => {

    return (
        <div className="meme-card">
            <div className="card-image waves-effect waves-block waves-light">
                <img
                    src={meme.fileLink}
                    alt=""
                />
            </div>
            <div className="card-content">
                {/*<span className="card-title activator grey-text text-darken-4">{meme.userMemeName}</span>*/}
                <h2>{meme.userMemeName}</h2>
            </div>
            <section className='tags'>
                <TagCollection tags={meme.tags}/>
            </section>
        </div>
    );
}