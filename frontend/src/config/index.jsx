const { default: axios } = require("axios");


let isProd =true;   // ture for production
const BASE_URL = isProd?'https://career-connect-livid.vercel.app':'http://localhost:9000';
export const clientServer = axios.create({
    baseURL: BASE_URL,
})
export default BASE_URL;