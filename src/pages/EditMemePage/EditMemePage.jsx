import {useLocation, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getAllMemesUser, getAllUserTags, getMemeById} from "../../actions/file";
import {MemeCardForEdit} from "../../components/MemeCard/MemeCardForEdit";
import CreatableSelect from "react-select/creatable";
import {toast} from "react-hot-toast";
import {Header} from "../../components/Header/Header";
import './EditMemePage.css';

export const EditMemePage = () => {

    let { id } = useParams();

    const [tags, setTags] = useState([]);

    const [meme, setMeme] = useState(null);

    useEffect(() => {
        getAllUserTags()
            .then(response => response.data)
            .then(data => data.map(tag => {
                return {value: tag.id, label: tag.name};
            }))
            .then(tags => {
                setTags(tags);
            });

        getMemeById(id)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                setMeme(data)
            })
            .catch(e => {
                console.log(e);
                toast(e.response?.data?.message ?? 'Ошибка!');
            })
    }, []);

    return (
        <div>
            <Header/>
            <MemeCardForEdit meme={meme}/>
            <form className='form-edit-meme'>
                <div className={'choose-tag-selector'}>
                    <CreatableSelect
                        isMulti
                        options={tags}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder='Выберите тэги'
                        onChange={elements => console.log(elements)}
                    />
                </div>
                <div>
                    <input type='text' placeholder='Введите имя мема' />
                </div>
                <div>
                    <button type='submit'>Сохранить</button>
                </div>
            </form>
        </div>
    );
}