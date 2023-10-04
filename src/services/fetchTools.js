// import { Base64 }  from 'js-base64';

/*
  window.location.origin polyfill
 */
  export const getLocationOrigin = () => {
    // if (!window.location.origin) {
    //   window.location.origin = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;
    // }
     // return "https://api.sporthood.in/api/v1";
    return "https://127.0.0.1:8000/api/v1";
    // return "http://staging.sporthood.in/api/v1"; 
  };
  
  /*
    query options:
   */
  export const defaultOptions = {
    credentials: 'include'
  };
  
  export const postMethod = {
    method: 'POST'
  };
  
  export const jsonHeader = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  
  /*
    query response helpers:
   */
  export const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      // throw error;
      return Promise.reject(error);
    }
  };
  
  export const parseJSON = (response) => {
    console.log(response);
    return response.json();
  };
  
  /*
   general helpers
   */
//   export const encodeBase64 = (stringToEncode) => {
//     return Base64.encode(stringToEncode);
//   };
  