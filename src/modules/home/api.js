import axios from 'axios';
import { baseUrl, API_ENDPOINTS } from '../../config';

export const getCoinsInfo = limit => {
    const params = { start: '1', limit, convert: 'USD' };
    return axios.get(`${baseUrl}${API_ENDPOINTS.getCoinsAPI}`, { params });
}
