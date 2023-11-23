import { myAxios, privateAxios } from "./helper";

export const loginUser = (loginDetail) => {
  return myAxios
    .post(`/auth/login`, loginDetail)
    .then((response) => response.data);
};

export const getAllUsers = () => {
  return privateAxios
    .get(
      `/users/`
    )
    .then((response) => response.data);
};

export const updateUser = (update, userId) => {
  return privateAxios
    .put(`/users/${userId}`, update)
    .then((response) => response.data);
};