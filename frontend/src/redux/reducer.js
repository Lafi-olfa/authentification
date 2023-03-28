import {
  REGISTER,
  LOGIN,
  REGISTER_FAILED,
  GET_PROFILE_FAILED,
  REGISTER_SUCCESS,
  LOGIN_FAILED,
  GET_PROFILE,
  LOGIN_SUCCESS,
  GET_PROFILE_SUCCESS,
} from "./actionTypes";

const init = {
  loading: false,
  users: null,
  errors: null,
  token: null,
  isAuth: false,
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case GET_PROFILE:
    case LOGIN:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, users: payload, errors: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        token: payload.token,
        users: payload.user,
      };
    case GET_PROFILE_SUCCESS:
      return { ...state, users: payload, isAuth: true,loading:false };
    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case GET_PROFILE_FAILED:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};

export default reducer;
