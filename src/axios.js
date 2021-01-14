import axios from 'axios';


const instance = axios.create({
    baseURL: "https://clone-app-backend-tinder.herokuapp.com"
});

export default instance;
