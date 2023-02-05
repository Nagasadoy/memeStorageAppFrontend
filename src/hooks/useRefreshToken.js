import { useState } from 'react';

export default function useRefreshToken() {

    const refreshTokenKeyName = 'refresh_token';
    const getRefreshToken = () => {
        return sessionStorage.getItem(refreshTokenKeyName);
    }
    const [refreshToken, setRefreshToken] = useState(getRefreshToken);

    const saveRefreshToken = userToken => {
        sessionStorage.setItem(refreshTokenKeyName, JSON.stringify(userToken));
        setRefreshToken(userToken);
    }

    return {
        refreshToken,
        setRefreshToken: saveRefreshToken
    }
}