import {
  REGISTER,
  LOGIN,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_PROFILE,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
} from "./actionTypes";
import axios from "axios";
//Register
export const RegisterUser = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  try {
    const { data } = await axios.post("/user/register", newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILED,
      payload: error.response.data,
    });
  }
};
//Login
export const LoginUser = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });

  try {
    const { data } = await axios.post("/user/login", user);
    console.log(data)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("token", data.token);

  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response.data,
    });
  }
};
// //Authentification
export const authUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const { data } = await axios.get("/user/auth",config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAILED,
      payload: error.response.data,
    });
  }
};
