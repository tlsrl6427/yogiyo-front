import axios from 'axios';
import type { ShopListRequest, ShopListResponse } from '@/lib/types';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//상점 리스트 조회
export const shopApi = {
  async list (params: ShopListRequest) {
    try {
      const response = await api.get<ShopListResponse>('shop/list', {params})
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}