import {useState} from "react";
import {createTag} from "../../actions/file";
import {Link} from "react-router-dom";

export const CreateTagPage = () => {

    const [tag, setTag] = useState();
    const [message, setMessage] = useState(null);

    const buttonHandler = () => {
        console.log('tag', tag);
        createTag({name: tag, score: 1})
            .then(data => setMessage('Тэг успешно создан!'))
            .catch((e) => {
                console.log(e);
                setMessage(e.response.data.message);
            });
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setTag(value);
    }


    return (
        <div>
            {message ? <h1>{message}</h1> : ''}
            <h1>Create tag page</h1>
            <div>
                <label htmlFor='createTagInput'>Название:</label>
                <input id='createTagInput' type='text' onChange={handleChange}/>
                <button onClick={buttonHandler}>Создать тэг</button>
            </div>
            <Link to='/'>На главную</Link>
        </div>
    );
}