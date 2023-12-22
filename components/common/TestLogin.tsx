'use client'
import { baseAxiosInstance } from "@/services/apiConfig"

const TestLogin = () => {
  const param = {
    "email" : "4321@gmail.com",
    "password" : "12341234",
    "authCode" : null,
    "providerType" : "DEFAULT",
  }
  const login = async () => {
    try {
      const response = await baseAxiosInstance.post('/memberLogin', param, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      })
      console.log(response)
      return response
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div onClick={login}>로그인해보자</div>
  )
}

export default TestLogin