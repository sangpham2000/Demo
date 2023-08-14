import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const instance = axios.create({
  baseURL: process.env.BASE_API, // api base_url
  timeout: 3000000, // request timeout
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI3YTRkYjk5MWVjZjY0OGQzYjQ3MTk5NWM3NDQ1YzM1ZSIsIm9yZ2lkIjoiIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJzYW5nLnBoYW1AYmx1ZW9jZWFuLm5ldC52biIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJQaOG6oW0gVGhhbmggU2FuZyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNhbmcucGhhbUBibHVlb2NlYW4ubmV0LnZuIiwiZXhwIjoxNjg1OTM1MDQ3LCJpc3MiOiJodHRwczovL3Rlc3Rzc28uaXNtYXJ0LmVkdS52biIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTE2MCJ9._y6dTwTMjU-3X0ON1p4sAziFw_7E1ppNeV2_bhU_jdM";
    config.headers["Perm-Token"] =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI3YTRkYjk5MWVjZjY0OGQzYjQ3MTk5NWM3NDQ1YzM1ZSIsIm9yZ2lkIjoiIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJzYW5nLnBoYW1AYmx1ZW9jZWFuLm5ldC52biIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJQaOG6oW0gVGhhbmggU2FuZyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNhbmcucGhhbUBibHVlb2NlYW4ubmV0LnZuIiwiZXhwIjoxNjg1OTM1MDQ3LCJpc3MiOiJodHRwczovL3Rlc3Rzc28uaXNtYXJ0LmVkdS52biIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTE2MCJ9._y6dTwTMjU-3X0ON1p4sAziFw_7E1ppNeV2_bhU_jdM";
    config.headers["OrganizationId"] = "b6a5c0019ea74af7897a4fafa49ccf5f";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      // redirect to login page
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = instance;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { instance };
