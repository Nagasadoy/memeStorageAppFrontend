import { useState } from 'react';

export default function useAccessToken() {
    const getAccessToken = () => {
        return localStorage.getItem('token');
    }
    const [accessToken, setAccessToken] = useState(getAccessToken);

    const saveAccessToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setAccessToken(userToken);
    }

    return {
        accessToken,
        setAccessToken: saveAccessToken,
    }
}