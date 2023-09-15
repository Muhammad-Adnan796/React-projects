import axios from "axios";

const initialDataModal = {
  image: "",
  title: "",
  description: "",
  price: "",
  category: "",
  rating: { rate: "", count: "" },
};

export const jsonData = JSON.stringify(initialDataModal);

const apiHandle = axios.create({
  baseURL: `https://fakestoreapi.com`,
});

export const Get = (endPoint, id) => {
  return apiHandle.get(`${endPoint}/${id ? id : ``}`);
};
export const Post = (endPoint, modal) => {
  return apiHandle.post(`${endPoint}`, modal);
};
export const Put = (endPoint, id, modal) => {
  return apiHandle.put(`${endPoint}/${id ? id : ``}`, modal);
};
export const Delete = (endPoint, id) => {
  return apiHandle.delete(`${endPoint}/${id ? id : ``}`);
};
