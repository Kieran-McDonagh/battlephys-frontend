import axios from "axios";

const baseUrl = `https://battlephys.onrender.com/api`;

export const postNewUser = (user) => {
  return axios.post(`${baseUrl}/users`, user).then(({ data }) => {
    return data;
  });
};

export const getMongoData = async (uid) => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    const { data } = response;
    const { users } = data;
    for (let user of users) {
      if (user.firebaseId === uid) {
        return user;
      }
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
