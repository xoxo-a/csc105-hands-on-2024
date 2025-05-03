import { Axios } from '../utils/axiosInstance';
 

const getTodoAPI = async () => {
    try {
        const response = await Axios.get('/todo/get');
        console.log(response)
        return response.data;
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
            msg: 'AXIOS ERROR',
        };
    }
};
 
export { getTodoAPI };