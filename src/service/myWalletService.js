import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("token"));
    const config = {
        headers: {
            Authorization: `Bearer ${auth}`
        }
    }

    return config;
}

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
};

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
};

function postValue(body) {
    const config = createHeaders();
    const promise = axios.post(`${BASE_URL}/wallet`, body, config);
    return promise;
};

function getValues() {
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/wallet`, config);
    return promise;
};

function updateValue(id, body) {
    const config = createHeaders();
    const promise = axios.put(`${BASE_URL}/wallet/${id}`, body, config);
    return promise;
}

function deleteValue(id) {
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/wallet/${id}`, config);
    return promise;
}

export { postSignUp, postLogin, postValue, getValues, updateValue, deleteValue };