import axios from "axios";
const url = "http://localhost:8080";

export const signUp = async (data) => {
  try {
    let res = await axios.post(`${url}/signUp`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (data) => {
  try {
    let res = await axios.post(`${url}/logIn`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};