import axios from "axios";

let instance = axios.create();


instance.defaults.baseURL = "/api";
console.log(instance.defaults.baseURL);

// Do something before request is sent
instance.interceptors.request.use(
    (config) => {
        // console.log("Axios:", axios);
        // console.log("config:", config);
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// // Add a response interceptor
// instance.interceptors.response.use(
//   (response) => {
//     // Do something with response data
//     console.log(response);
//     return response;
//   },
//   (error) => {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

// export const pagination = (agent) => {
//   // switch (key) {
//   //     case value:

//   //         break;

//   //     default:
//   //         break;
//   // }
//   return async (req, res, next) => {};
// };

export default instance;
