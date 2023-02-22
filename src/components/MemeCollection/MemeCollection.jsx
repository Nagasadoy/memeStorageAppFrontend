import {MemeCard} from "../MemeCard/MemeCard";
import './MemeCollection.css'

export const MemeCollection = ({memes = []}) => {

    return (
        <section className='memes'>
            {memes.length ? memes.map(meme => (
                <MemeCard meme={meme} key={meme.id}/>
            )) : <h4>Ничего не найдено!</h4>}
        </section>
    );
}