'use client'
import { useState, useEffect } from "react";
import { shopApi } from "@/services/shopApi";

const FoodDetail = ({menu, shopId}: any) => {

  const [options, setOptions] = useState([]);
  console.log(shopId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(shopId){
          const result = await shopApi.getShopOptionGroup(shopId);
          setOptions(result);
        }
      } catch (error){
        console.error(error);
      }
    }
    fetchData()
  }, [shopId])

  useEffect(() => {
    options.forEach((option, i) => {
      option.menus.forEach(optionMenu => {
        return menu === optionMenu
      })
    })
  }, [])

  return (
    <div className="w-full h-full fixed top-0 left-0 z-50 bg-black">
      {shopId}
    </div>
  )
};

export default FoodDetail;