import { useState } from 'react';

export default function useAccessToken() {
    const getAccessToken = () => {
        return sessionStorage.getItem('token');
    }
    const [accessToken, setAccessToken] = useState(getAccessToken);

    const saveAccessToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setAccessToken(userToken);
    }

    return {
        accessToken,
        setAccessToken: saveAccessToken,
    }
}