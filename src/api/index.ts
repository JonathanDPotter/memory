import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://memory-back-13e6d705d26d.herokuapp.com/",
});

const getCats = async (numberOfCats: number) => {
  try {
    const result = await axiosInstance.get(`api/cats/${numberOfCats}`);
    return result.data;
  } catch (error: any) {
    console.log(error);
  }
};

const api = { getCats };

export default api;
