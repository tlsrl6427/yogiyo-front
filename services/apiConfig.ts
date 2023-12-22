import axios from 'axios';

export const baseAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
});

// export const setAuthToken = (token: string | null) => {
//   baseAxiosInstance.defaults.headers.common['Authorization'] = token;
// };
