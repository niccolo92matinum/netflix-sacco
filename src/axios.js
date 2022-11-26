import axios from 'axios';

//library to make request to the server


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})


export default instance;