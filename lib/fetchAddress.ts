import { addressApi } from "@/services/addressApi";

export const fetchAddress = async (setMemberAddress: any) => {
  try {
    const data = await addressApi.view();
    setMemberAddress(data.memberAddresses);
  } catch (error) {
    console.error('주소 조회 중 오류 발생:', error);
  }
};