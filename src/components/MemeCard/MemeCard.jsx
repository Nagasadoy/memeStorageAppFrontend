import './MemeCard.css';
import {TagCollection} from "../TagCollection/TagCollection";
import {Link} from "react-router-dom";
import {removeTagById} from "../../actions/file";

export const MemeCard = ({meme, callbackRemove}) => {

    const copyButtonHandler = (e) => {

    }

    const deleteButtonHandler = (tagId) => {
        removeTagById(tagId)
            .then(response => {
                console.log('meme с id ' + tagId + ' удален!');
                callbackRemove(tagId);
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div className='wrapper'>

            <div className='card'>
                <Link to={"/meme/edit/" + meme.id} className='card-body' state={{meme: meme}}>
                    <div className='card-title'>
                        {meme.userMemeName}
                    </div>
                    <div>
                        <img className='card-img' src={meme.fileLink} alt=''/>
                    </div>
                </Link>
                <div className='btn-keeper'>
                    <button className='btn'>Скопировать</button>
                    <button className='btn' onClick={() => { console.log(meme.id); deleteButtonHandler(meme.id)}}>Удалить</button>
                </div>
                <hr/>

                <section className='tags'>
                    <TagCollection tags={meme.tags}/>
                </section>
            </div>
        </div>
    );
}