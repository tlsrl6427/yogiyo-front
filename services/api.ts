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

export const getGoogleAuth = () => {
  const client_id = process.env.NEXT_APP_GOOGLE_CLIENT_ID || '537166278727-jae76ojhm1nqed65iv89iq1vb5qpuh5v.apps.googleusercontent.com';
  const redirect_uri = process.env.NEXT_APP_LOGIN_REDIRECT_URI || 'http://localhost:3000/loading';
  const response_type= 'code'
  const scope = 'email profile'

  const callLoginWindow = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`
  console.log(callLoginWindow)
  window.location.href = callLoginWindow;
}
