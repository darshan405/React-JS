import { FETCH_LOGIN_BEGIN, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from './types';
import axios from 'axios';

export const HEADERS_DEFAULT = {
  'Content-Type': 'application/json'
};

export const HEADERS_WITH_AUTH = () => ({
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json'
});

export function ajaxLoading(){
    return {type: FETCH_LOGIN_BEGIN}
}

export function successLogin(loginToken){
  return {
    type: FETCH_LOGIN_SUCCESS,
    loginToken: {loginToken},
  }
}

export function errorLogin(error){
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: { error }
  }
}

export function submitLogin(userdata) {
  //console.log(userdata);
  return dispatch => {
      dispatch(ajaxLoading());
      axios.post('http://localhost:8001/api/user/login',JSON.stringify(userdata),{
       headers:  HEADERS_DEFAULT
      }).then(response => {
              dispatch(successLogin(response.data));
          })
          .catch(error => {
            dispatch(errorLogin(error));
          });
  };
}



