import {MemeCard} from "../MemeCard/MemeCard";
import {Tag} from "../Tag/Tag";

export const TagCollection = ({tags = []}) => {

    return (
        <section className='tags'>
            {tags.length ? tags.map(tag => (
                <Tag tag={tag} key={tag.id}/>
            )) : ''}
        </section>
    );
}