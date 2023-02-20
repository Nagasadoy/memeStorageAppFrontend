import axios from "axios";

export function uploadFile(file) {

    const host = 'http://localhost:8080';
    const url = `${host}/api/meme/file/create`;

    const formData = new FormData();
    formData.append('file', file);

    return axios.post(
        url, formData, {
            headers: {Authorization: `Bearer: ${localStorage.getItem('token')}`}
        })
        .then(response => response.data)
        .then(data => {
            return data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function getUrlFileById(id) {
    const host = 'http://localhost:8080';
    const url = `${host}/api/meme/image/${id}`;
    
    return axios.get(url)
        .then(response => response.data)
        .then(data => data.url)
        .catch((e) => {
            console.log(e);
        })
}