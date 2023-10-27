import axios from "axios";

const baseUrl = `https://battlephys.onrender.com/api`;

export const postNewUser = (user) => {
  return axios.post(`${baseUrl}/users`, user).then(({ data }) => {
    return data
  });
};

