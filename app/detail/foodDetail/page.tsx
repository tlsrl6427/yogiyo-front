'use client'
import { useEffect } from "react";
import { shopApi } from "@/services/shopApi";

const FoodDetail = ({menu, shopId}: any) => {
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(shopId){
          await shopApi.getShopOptionGroup(shopId);
        }
      } catch (error){
        console.error(error);
      }
    }
  }, [])

  return (
    <>
    </>
  )
};

export default FoodDetail;