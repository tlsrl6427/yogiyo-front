interface Info {
  name: string;
  rate?: number;
  img?: string;
  delay?: string;
  delFee?: string;
}

const MarketInfoCard = (info: Info) => {
  return (
    <div className="w-[190px] h-[300px] flex flex-col gap-2.5">
      <div className="img_container w-[100px] h-[100px] flex justify-center items-center rounded-lg overflow-hidden">
        <img className="w-full h-full" src={info.img} />
      </div>
      <div className="title_container flex justify-start gap-1.5">
        <i>yogiyo_icon</i>
        <p>{info.name}</p>
      </div>
      <div className="rate_container flex justify-start gap-1.5">
        <i>star_icon</i>
        <p>{info.rate}</p>
      </div>
      <div className="delay">
        <p>{info.delay}</p>
      </div>
      <div className="delFee">
        <p>{info.delFee}</p>
      </div>
    </div>
  )
}

export default MarketInfoCard
