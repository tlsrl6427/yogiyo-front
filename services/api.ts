import axios from 'axios';

export const baseAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

/*
export const getNaverAuth = async () => {
  axios
    .get(
      'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=0o_XScx3lU6SBOFvKmsc&redirect_uri=http://localhost:3000/&state=false',
    )
    .then(() => {
      console.log('abc');
    });
};
*/

export const getNaverAuth = () => {
  window.location.href =
    'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=0o_XScx3lU6SBOFvKmsc&redirect_uri=http://localhost:3000/loading/&state=false';
};
