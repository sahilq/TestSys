import * as types from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: "",
  errorMessage: "",
  userId: "",
  userName: "",
  participants: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: "",
        token: action.payload.token,
        userId: action.payload.user.id,
        userName: action.payload.user.name
      };
    case types.SIGN_IN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: "",
        token: action.payload.token,
        userId: action.payload.user.id,
        userName: action.payload.user.name,
        role: action.payload.user.role
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.payload,
        token: null,
        userId: "",
        role: ""
      };
    case types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: "",
        token: null,
        userId: ""
      };
    case types.GET_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        participants: action.payload
      };
    default:
      return state;
  }
};
