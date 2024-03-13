'use client'
import GridIconMenu from '@/components/home/GridIconMenu';
import MyOrderedEateries from '@/components/home/MyOrderedEateries';
import NewEateries from '@/components/home/NewEateries';
import SearchBarLink from '@/components/home/SearchBarLink';
import { useRecoilState } from 'recoil';
import { userInfoAtom } from '@/recoil/state';
import { getUserInfo } from '@/services/loginAPI';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Homes = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userInfoAtom);
  
  const handleGetUserInfo = async () => {
    try{
      const res = await getUserInfo();
      console.log(res)
      const loginUser = {
        email: res.email,
        nickname: res.nickname,
        userId: res.userId,
        isLogin: true,
        phone: '',
      }
      console.log(loginUser)
      setUser(loginUser);
      console.log(user)
    }catch(e){
      console.error(e)
    }
  } 

  useEffect(()=>{
    console.log(user)
    if(user.isLogin){
      handleGetUserInfo();
    }else{
      router.push('/login');
    }
  },[])
  
  return (
    <div className="flex flex-col w-full">
      <SearchBarLink />
      <GridIconMenu />
      <div className="p-1.5 bg-slate-100" />
      <MyOrderedEateries />
      <div className="p-1.5 bg-slate-100" />
      <NewEateries />
    </div>
  );
};

export default Homes;
