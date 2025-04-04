import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://peliculas-backend-cv5o.onrender.com'
});

export {
    axiosInstance
}