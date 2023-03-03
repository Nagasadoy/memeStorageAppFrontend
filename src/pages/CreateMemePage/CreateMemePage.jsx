import {createTag, getAllTags, uploadFile} from "../../actions/file";
import {useEffect, useState} from "react";
import './CreateMemePage.css';
import {Link} from "react-router-dom";
import React from "react";
import CreatableSelect from "react-select/creatable";
import {toast} from "react-hot-toast";
import {Header} from "../../components/Header/Header";

export const CreateMemePage = () => {

    const [imgUrl, setImgUrl] = useState();

    const [file, setFile] = useState();
    const [userMemeName, setUserMemeName] = useState();

    const [tags, setTags] = useState([]);

    const [choosenTagIds, setChoosenTagIds] = useState([]);

    useEffect(() => {
        getAllTags()
            .then(response => response.data)
            .then(data => data.map(tag => {
                return {value: tag.id, label: tag.name};
            }))
            .then(tags => {
                setTags(tags);
            });
    }, []);

    const chooseFileHandler = (event) => {
        const file = event.target.files[0];
        setFile(file);
    }

    const changeUserMemeNameInputHandler = (event) => {
        const name = event.target.value;
        setUserMemeName(name);
    }

    const fileUploadHandler = (e) => {
        e.preventDefault();

        console.log('choosenTagIds', choosenTagIds);

        uploadFile(file, userMemeName, JSON.stringify(choosenTagIds))
            .then(data => {
                const id = data.id;
                const userMemeName = data.userMemeName;
                const url = data.url;
                setImgUrl(data.url)
            })
            .catch(function (error) {
                toast(error.response.data?.message)
            });
    }

    const onChangeSelectHandler = (selectedTags) => {
        let selectedTagIds = [];

        for (let i=0; i < selectedTags.length; i++) {
            let tag = selectedTags[i];

            if (tag.__isNew__) {
                const id = getIdTagByName(tag.value);
                console.log('id', id);
                if (id !== null) {
                    selectedTagIds.push(id);
                } else {
                    createTag({name: tag.value, score: 1})
                        .then(data => {
                            setTags(tags => [...tags, {value: data.id, label: data.name}]);
                            selectedTagIds.push(data.id);
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                }
            } else {
                selectedTagIds.push(tag.value);
            }
        }
        setChoosenTagIds(selectedTagIds);

        // TODO потом посмотреть как сделать это правильно без for цикла

        // const tagIds = tags.map(tag => {
        //     if (tag.__isNew__) {
        //         console.log('tag', tag);
        //         createTag({name: tag.value, score: 1})
        //             .then(data => { console.log('обновляем занчение!'); setCreatedTag(data.id)})
        //             .catch((e) => {
        //
        //             });
        //         console.log(createdTag);
        //         return createdTag;
        //     }
        //     console.log(tag);
        //     return tag.value;
        // });
        // console.log(tagIds);
        // setChoosenTagIds(tagIds);
    }
    
    const getIdTagByName = (tagName) => {
        for (let i=0; i < tags.length; i++) {
            const currentTag = tags[i];
            console.log(currentTag);
            if (currentTag.label === tagName) {
                return currentTag.value;
            }
        }
        return null;
    }

    return (
        <div>
            <Header/>
            <Link to='/'>На главную</Link>
            <h1>Create Meme Page</h1>
            <form className='form-create-meme' onSubmit={fileUploadHandler}>
                <div>
                    <input type='text' placeholder='Введите имя мема' onChange={event => changeUserMemeNameInputHandler(event)}/>
                </div>
                <div>
                    <label htmlFor='upload-input'>Загрузить файл</label>
                    <input type='file' id='upload-input' onChange={event => chooseFileHandler(event)}/>
                </div>
                <div className='choose-tag-selector'>
                    <CreatableSelect
                        isMulti
                        options={tags}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder='Выберите тэги'
                        onChange={elements => onChangeSelectHandler(elements)}
                    />
                </div>
                <div>
                    <button type='submit'>Создать</button>
                </div>
            </form>
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