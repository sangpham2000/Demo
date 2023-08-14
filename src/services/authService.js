import * as api from 'src/services/apiService';
import { useUserStore } from 'src/stores/UserStore';
import { instance } from 'src/boot/axios';

const userStore = useUserStore();
export function LoginGoogle(googleUser) {
   return new Promise(async (resolve, reject) => {
      instance
         .post(api.API_AUTH_LOGIN_BYGOOGLE, googleUser)
         .then((response) => {
            userStore.setUser(response.data.data);
            resolve();
         })
         .catch((err) => {
            reject(err);
         });
   });
}
