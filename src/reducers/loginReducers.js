import { FETCH_LOGIN_BEGIN, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from '../actions/types';

const INPUT_STATE = {
  loginTokenFromReducer: '',
  loading: false,
  error: null
};

export default (state = INPUT_STATE, action) => {
  switch (action.type) {
   case FETCH_LOGIN_BEGIN:
    return { ...state, loading: true, error: null };
   case FETCH_LOGIN_SUCCESS:
   console.log(action);
    return { ...state, loading: false, loginTokenFromReducer: action.loginToken.loginToken.token}
  case FETCH_LOGIN_FAILURE:
    return { ...state, loading: false, error: action.payload.error}
  default:
    return state;
  }
};
