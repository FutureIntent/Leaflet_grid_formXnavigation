import axios from '@services/axios';

export const getAllDevices = () =>
    axios
        .get('/devices')
        .then((response) => response.data)
        .catch((error) => Promise.reject(error.response.data.message));
