import axios from 'axios';

const BASE_URL = 'https://api.vip4care.ir/admin/get-all-cooperation';

const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/allusers`)
    return response.data;
}

export { getUsers };