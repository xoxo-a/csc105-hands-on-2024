import { Axios } from '../utils/axiosInstance';
 

const deleteTodo = async (id) => {
    try {
        const response = await Axios.delete(`/todo/delete?id=${id}`);
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
 
export { deleteTodo };