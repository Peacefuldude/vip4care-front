import axios from 'axios';

const BASE_URL = 'https://api.vip4care.ir/requestService';

const getRequests = async () => {
    const response = await axios.get(`${BASE_URL}/get`)
    return response.data;
}

export { getRequests };