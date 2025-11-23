import axios from 'axios';
import { useEffect } from 'react';
const fetchUserData =  (username) => {
    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.error("Looks like we cant find the user", error);
                return null;
            });
    }, [username]);
};
export default { fetchUserData };


