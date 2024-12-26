import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://assignment-eleven-server-amber.vercel.app'
})
// 'https://assignment-eleven-server-amber.vercel.app'
const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;