import { GoChevronLeft } from 'react-icons/go';
import { useRouter } from 'next/navigation';

/**
 * @props size?:string(fontSize default 2rem)
 */
interface Props {
  size?: string
}
const PrevPageC = (props :Props) => {
  const router = useRouter();

  const setSize = () => {
    if(props.size){
      return {fontSize: props.size}
    }else{
      return {fontSize: '2rem'}
    }
  }

  const size = setSize()
  const handleC = () => {
    router.back();
  };

  return (
    <div className=''>
      <GoChevronLeft style={size} onClick={handleC} />
    </div>
  );
};

export default PrevPageC;
