const PREFIXSYSTEM = process.env.ENV_SYS;
const TOKEN = PREFIXSYSTEM + 'TOKEN';
const PERTOKEN = PREFIXSYSTEM + 'PERTOKEN';
const LANGUAGE = PREFIXSYSTEM + 'LANGUAGE';

//token
export function setToken(value) {
   return localStorage.setItem(TOKEN, value);
}
export function getToken() {
   return localStorage.getItem(TOKEN);
}
export function removeToken() {
   localStorage.removeItem(PERTOKEN);
   return localStorage.removeItem(TOKEN);
}
//permission token
export function setPermisionToken(value) {
   return localStorage.setItem(PERTOKEN, value);
}
export function getPermisionToken() {
   return localStorage.getItem(PERTOKEN);
}
export function removePermisionToken() {
   return localStorage.removeItem(PERTOKEN);
}
//Language
export function setLanguage(value) {
   return localStorage.setItem(LANGUAGE, value);
}
export function getLanguage() {
   return localStorage.getItem(LANGUAGE);
}
