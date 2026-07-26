import axios from "axios";

const api = axios.create({
    baseURL: "https://KavanaV.pythonanywhere.com"
});

export default api;