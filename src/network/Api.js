import axios from 'axios';

// const DEFAULT_BASE_URL = "http://127.0.0.1:9000";
const DEFAULT_BASE_URL = "/";
export const BASE_URL = (window.backend === undefined ? DEFAULT_BASE_URL : window.backend);
const instance = axios.create({baseURL: BASE_URL});

export class ApiNetwork {

    static getAddress = (pk) => {
        return instance.post("generateAddress", {
            stealthPK: pk
        });
    };

    static info = () => {
        return instance.get("info");
    };

}
