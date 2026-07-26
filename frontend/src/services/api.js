import axios from "axios";

const api = axios.create({
    baseURL: "https://KusumaV.pythonanywhere.com"
});

export default api;