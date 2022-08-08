
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ReactSession }  from 'react-client-session';

export const baseURL = 'https://api-nerdtech.herdhelp.com'
let headers = {};
const axiosIns = axios.create({
    baseURL: 'https://api-nerdtech.herdhelp.com/',
    headers,
});

axiosIns.interceptors.request.use(

    async (config) => {
        const access = ReactSession.get("access");
        if (access) {
            config.headers.Authorization = `Bearer ${access}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosIns.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
        if (error.response.status === 401) {
            console.log("401");
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    },
);

export default axiosIns;