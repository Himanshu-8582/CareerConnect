const { default: axios } = require("axios");

const BASE_URL = 'http://localhost:9000';
export const clientServer = axios.create({
    baseURL: BASE_URL,
})
export default BASE_URL;