import axios from "axios";

export function uploadFile(file, userMemeName) {

    const host = 'http://localhost:8080';
    const url = `${host}/api/meme/create`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userMemeName', userMemeName);

    const token = JSON.parse(localStorage.getItem('token'));

    return axios.post(
        url, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
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

export function createTag(credentials) {

    const host = 'http://localhost:8080';
    const url = `${host}/api/tag/create`;

    return axios.post(url, credentials)
        .then(response => response.data)
}

export function getAllMemesUser() {
    const host = 'http://localhost:8080';
    const url = `${host}/api/tag/create`;
}