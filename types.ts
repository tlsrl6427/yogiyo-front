
/*
  순서대로
  가게이름, 별점, 가게이미지, 배달시간, 배달요금
*/
export interface MaketInfoType {
  info: {
    name: string;
    rate?: number;
    img?: string;
    delay?: string;
    delFee?: string;
  }
}
