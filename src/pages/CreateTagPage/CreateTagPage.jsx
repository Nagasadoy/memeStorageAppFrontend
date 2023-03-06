import {useState} from "react";
import {createTag} from "../../actions/file";
import {Link} from "react-router-dom";
import 'react-select-search/style.css'
import Select from "react-select/base";
import {Header} from "../../components/Header/Header";

export const CreateTagPage = () => {

    const [tag, setTag] = useState();
    const [message, setMessage] = useState(null);

    const buttonHandler = () => {
        console.log('tag', tag);
        createTag({name: tag})
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
            <Header/>
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