import axios from 'axios';
import { ReqAuth, SocialLogin } from '@/lib/types';

export const baseAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getNaverAuth = (req: ReqAuth) => {
  const baseURL = 'https://nid.naver.com/oauth2.0/authorize';
  window.location.href=`${baseURL}?response_type=${req.code}&client_id=${req.client_id}&redirect_uri=${req.redirect_uri}&state=${req.state}`
};

export const getKakaoAuth = async (req: ReqAuth) => {
  const baseURL = 'https://kauth.kakao.com/oauth/authorize';
  window.location.href=`${baseURL}?response_type=${req.code}&client_id=${req.client_id}&redirect_uri=${req.redirect_uri}`
}

export const getAccessToken = async (reqbody: SocialLogin) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const resTokenAPI = await baseAxiosInstance.post('/memberLogin', reqbody, {headers});
  const accessToken = resTokenAPI.headers.authorization;
  console.log(resTokenAPI);
  console.log(accessToken);
  const userId = resTokenAPI.data.userId;
  const resUserInfo = await getUserInfo(accessToken);
  let userInfo = {...resUserInfo.data, id: userId};
  console.log(userInfo);
  return {accessToken, userInfo};
}

export const getUserInfo = async (token: string) => {
  const headers = {
    'Authorization' : token,
  }
  console.log(headers);
  const res = await baseAxiosInstance.get('/member/mypage', {headers});
  return res.data;
}