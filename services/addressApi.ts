import axios from 'axios';
import type { RegisterAddressRequest } from '@/lib/types';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const addressApi = {
  // 멤버 주소 등록
  async register(data: RegisterAddressRequest, accessToken: string | null) {
    try {
      const response = await api.post('/address/register', data, {
        headers: { Authorization: accessToken },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // 멤버 주소 조회
  async view(accessToken: string | null) {
    try {
      const response = await api.get('/address/view', {
        headers: { Authorization: accessToken },
      });  
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // 멤버 주소 삭제
  async delete(memberAddressId: number, accessToken: string | null) {
    try {
      const response = await api.delete(`/address/${memberAddressId}`, {
        headers: { Authorization: accessToken },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // '요기' 위치 설정
  async change(memberAddressId: number, accessToken: string | null) {
    try {
      const response = await api.patch(
        `/address/here/${memberAddressId}`,
        {},
        {
          headers: { Authorization: accessToken },
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
