import axios from 'axios';

const getBlogs = async () => {
    const response = await axios.get("https://api.vip4care.ir/blog/get")
    return response.blogs;
}

export { getBlogs };