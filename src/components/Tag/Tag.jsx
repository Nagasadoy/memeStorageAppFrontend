import './Tag.css';

export const Tag = ({tag}) => {

    return (
        <div className='tag'>
            <div>
                {tag.name}
                <button>x</button>
            </div>
        </div>
    );
}