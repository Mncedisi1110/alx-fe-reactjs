import.meta.env.VITE_GITHUB_API_KEY;
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

 function fetchUserData(){
    return axios.create({
        get: /users/,
        baseURL: BASE_URL,
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
            Accept: 'application/vnd.github+json',
        },
    });
}

export { fetchUserData };