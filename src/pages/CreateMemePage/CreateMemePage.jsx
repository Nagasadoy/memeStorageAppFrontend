import {getUrlFileById, uploadFile} from "../../actions/file";
import {useState} from "react";
import './CreateMemePage.css';

export const CreateMemePage = () => {

    const [imgUrl, setImgUrl] = useState();

    function fileUploadHandler(event) {
        const file = event.target.files[0];
        uploadFile(file).then(data => {
            const id = data.id;
            getUrlFileById(id).then(url => setImgUrl(url));
        });
    }

    return (
        <div>
            <h1>Create Meme Page</h1>
            <label htmlFor='upload-input'>Загрузить файл</label>
            <input type='file' id='upload-input' onChange={event => fileUploadHandler(event)} />
            <div className='crop'>
                <img src={imgUrl} alt='нет фото'/>
            </div>
        </div>
    );
}