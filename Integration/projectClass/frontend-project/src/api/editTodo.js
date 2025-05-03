import { Axios } from "../utils/axiosInstance";

const editTodoAPI = async (id, name) => {
  try {
    const response = await Axios.patch(`/todo/edit?id=${id}`, {
      name,
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
      msg: "AXIOS ERROR",
    };
  }
};

export { editTodoAPI };
