import {getUrlFileById, uploadFile} from "../../actions/file";
import {useState} from "react";
import './CreateMemePage.css';
import {Link} from "react-router-dom";

export const CreateMemePage = () => {

    const [imgUrl, setImgUrl] = useState();

    const [file, setFile] = useState();
    const [userMemeName, setUserMemeName] = useState();

    //fileUploadHandler
    const chooseFileHandler = (event) => {
        const file = event.target.files[0];
        setFile(file);
        console.log(file);
    }

    const changeUserMemeNameInputHandler = (event) => {
        const name = event.target.value;
        setUserMemeName(name);
        console.log(userMemeName);
    }

    const fileUploadHandler = () => {
        console.log('tut');
        uploadFile(file, userMemeName).then(data => {
            const id = data.id;
            const userMemeName = data.userMemeName;
            const url = data.url;

            setImgUrl(data.url)
        });
    }


    return (
        <div>
            <Link to='/'>На главную</Link>
            <h1>Create Meme Page</h1>
            <label htmlFor='user-name-meme-input'>Пользовательское имя мема:</label>
            <input type='text' id='user-name-meme-input' onChange={event => changeUserMemeNameInputHandler(event)}/>
            <label htmlFor='upload-input'>Загрузить файл</label>
            <input type='file' id='upload-input' onChange={event => chooseFileHandler(event)} />
            <input type='button' value='Добавить' onClick={fileUploadHandler} />
            <div className='crop'>
                {imgUrl &&
                    <div>
                        <h1>
                            {userMemeName}
                        </h1>
                        <img src={imgUrl} alt='нет фото'/>
                    </div>
                }
            </div>
        </div>
    );
}