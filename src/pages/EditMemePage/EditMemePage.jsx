import {useLocation, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getAllMemesUser, getAllTags, getMemeById} from "../../actions/file";
import {MemeCard} from "../../components/MemeCard/MemeCard";
import {MemeCardForEdit} from "../../components/MemeCard/MemeCardForEdit";
import CreatableSelect from "react-select/creatable";
import {toast} from "react-hot-toast";
import {Header} from "../../components/Header/Header";

export const EditMemePage = () => {

    let { id } = useParams();

    const [tags, setTags] = useState([]);

    const [meme, setMeme] = useState(null);

    useEffect(() => {
        getAllTags()
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
            <CreatableSelect
                isMulti
                options={tags}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Выберите тэги'
                onChange={elements => console.log(elements)}
            />
        </div>
    );
}