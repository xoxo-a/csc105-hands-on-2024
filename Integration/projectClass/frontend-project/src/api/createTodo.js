import { Axios } from '../utils/axiosInstance';
 

const craeteTodoAPI = async (name) => {
    try {
        const response = await Axios.post('/todo/add', {
            name: name
        });
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
 
export { craeteTodoAPI };