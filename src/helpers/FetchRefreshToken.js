import {setToken} from "../feature/user/tokenSlice";

export const fetchWithTokenRefresh = async (url, options = {}, dispatch, token) => {
    if (token) {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const req = await fetch(url, options);
        if (!req.ok) {
            throw new Error('Request failed: ' + req.status);
        }
        const contentType = req.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const response = await req.json();
            if (req.status === 401) {
                const refresh = await fetch('https://mikeleman.fr/auth/refresh', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({token})
                });
                const res = await refresh.json();
                if (res.token) {
                    dispatch(setToken(res.refresh_token));
                    return fetchWithTokenRefresh(url, options, dispatch, res.refresh_token);
                }
            }
            return response;
        } else {
            throw new Error('Response is not JSON');
        }
    } catch (error) {
        console.error('Error while fetching:', error);
        throw error; // Renvoyer l'erreur pour la gestion ultérieure
    }
};
