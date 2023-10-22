/*
  순서대로
  가게이름, 별점, 가게이미지, 배달시간, 배달요금
*/
export interface MaketInfoType {
  info: {
    name?: string;
    rate?: string;
    img?: string;
    delay?: string;
    delFee?: string;
  };
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface MenuOption {
  name: string
  content: string
}

export interface Tab {
  initialLoad?: boolean
  name: string
  handle?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface InputBox {
  title?: string
  placeholder: string
  type: string
  style?: string
}
