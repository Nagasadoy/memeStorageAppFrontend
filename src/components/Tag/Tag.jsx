import './Tag.css';

export const Tag = ({tag}) => {

    return (
        <div className='tag'>
            {tag.name}
        </div>
    );
}