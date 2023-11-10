import axios from "axios";
import type { RegisterAddressRequest } from "@/lib/types";

//임시 엑세스토큰
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0QGdtYWlsLmNvbSIsInByb3ZpZGVyVHlwZSI6IkRFRkFVTFQiLCJ1c2VyVHlwZSI6Ik1lbWJlciIsImV4cCI6MTY5OTYwODg5M30.vpVvEacHN7d5Xk7m54VZrybet3z81ibOOjsYgaKU9iU'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const addressApi = {
  // 멤버 주소 등록
  async register(data: RegisterAddressRequest) {
    try {
      const response = await api.post('/address/register', data, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // 멤버 주소 조회
  async view() {
    try {
      const response = await api.get('/address/view', {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // 멤버 주소 삭제
  async delete(memberAddressId: number) {
    try {
      const response = await api.delete(`/address/${memberAddressId}`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
};