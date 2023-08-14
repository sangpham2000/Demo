console.log('dfadf', process.env);

// if(process.env.NODE_ENV=='development') {
//   process.env.SERVER_URL_API = 'http://localhost:3000/api/'
// }

export const SERVER_URL_API = process.env.SERVER_URL_API;
export const SERVER_URL_UPLOAD = process.env.SERVER_URL_UPLOAD;
//authen
export const API_AUTH_LOGIN = SERVER_URL_API + 'auth/login';
export const API_AUTH_LOGIN_BYGOOGLE = SERVER_URL_API + 'auth/loginbygoogle';
export const API_AUTH_AUTO_LOGIN = SERVER_URL_API + 'auth/autologin';
export const API_AUTH_LOGIN_BYCOOKIES = SERVER_URL_API + 'auth/ssologin';
export const API_AUTH_LOGOUT = SERVER_URL_API + 'auth/logout';
