import PrevPageC from "./PrevPageC"
import PrevPageX from "./PrevPageX"

/**
 * type 0 : none, type 1 : '<' button, type 2 : 'x' button
 * @params {type, label}
 */

interface Prop {
  type: number,
  label: string
}
const Header = ({type, label}: Prop) => {
  return(
    <div className="flex py-4 px-2 bg-white text-[1.1rem] items-center">
      <div>{type === 1 ? <PrevPageC /> : type === 2 ? <PrevPageX /> : ''}</div>
      <div className="flex flex-1">
        <p className="w-full font-bold text-center">{label}</p></div>
      <div className="w-[28px] h-[28px]"></div>
    </div>
  )
}

export default Header

