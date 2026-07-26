import axios from "axios";

const api = axios.create({
    baseURL: "http://KusumaV.pythonanywhere.com"
});

export default api;