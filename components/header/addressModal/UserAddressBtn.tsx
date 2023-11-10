import { BiHomeAlt } from 'react-icons/bi';
import { BsBagDash } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { userAddress, currentCoord, currentAddress, headerModalState } from '@/recoil/state';
import { addressApi } from '@/services/addressApi';
import { fetchAddress } from '@/lib/fetchAddress';
import { FiMapPin } from 'react-icons/fi';

const UserAddressBtn = ({addressTarget}: any) => {
  const setMemberAddress = useSetRecoilState(userAddress)
  const setCurCoord = useSetRecoilState(currentCoord)
  const setCurAdd = useSetRecoilState(currentAddress)
  const setHeaderModal = useSetRecoilState(headerModalState);

  const fullAddress = addressTarget.address.street + ' ' + addressTarget.address.detail

  const iconRenderSelect = () => {
    const type = addressTarget.addressType;
    let result;
  
    switch (type) {
      case 'HOME':
        result = <BiHomeAlt style={{ fontSize: '1.5rem' }} />;
        break;
      case 'COMPANY':
        result = <BsBagDash style={{ fontSize: '1.5rem' }} />;
        break;
      default:
        result = <FiMapPin style={{ fontSize: '1.5rem' }} />;
        break;
    }
  
    return result;
  };

  return (
    <div className='flex p-[20px]'>
      <div className='flex flex-1 gap-2 cursor-pointer' onClick={() => {
        setCurCoord({ lat: addressTarget.latitude, lng: addressTarget.longitude }); // Default to Seoul
        setCurAdd(fullAddress)
        setHeaderModal(false)
      }}>
        {iconRenderSelect()}
        <div className='flex flex-col flex-1 gap-1'>
          <span className='text-[1rem] font-bold'>{addressTarget.nickname}</span>
          <span className='text-[0.9rem] text-slate-600'>{fullAddress}</span>
        </div>
      </div>
      <i
        className="text-[2rem] relative cursor-pointer w-[1.3rem] h-[1.3rem] bg-slate-200 rounded-[50%]"
        onClick={() => {
          const isConfirm = confirm(`${addressTarget.nickname} 주소를 삭제하시겠어요?`)
          if(isConfirm) {
            addressApi.delete(addressTarget.id)
            fetchAddress(setMemberAddress)
          }
      }}
      >
        <div className="absolute w-[0.95rem] h-[1px] bg-slate-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        <div className="absolute w-[0.95rem] h-[1px] bg-slate-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[135deg]"></div>
      </i>
    </div>
  )
}

export default UserAddressBtn