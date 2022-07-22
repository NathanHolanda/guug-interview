import axios from "axios";

const api = axios.create({
    baseURL: "https://dev.guug.com.br/password/test",
});

export default api;
