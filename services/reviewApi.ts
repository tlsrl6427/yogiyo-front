import { Review } from "@/types/types";
import { baseAxiosInstance } from "./apiConfig";

export const getReviewList = async () => {
  const res = ''
  return res
}

export const postReview = async (review : Review) => {
  const res = await baseAxiosInstance.post('/member/review/write', review)
  console.log(res)
  return res.data
}