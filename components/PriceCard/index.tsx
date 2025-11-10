interface PriceCardDataT {
  id: number;
  title: string;
  cost: string;
  description: string;
  bulletPoints: string[];
}
interface PriceCardProps {
  cardsData: PriceCardDataT;
  isActive?: boolean;
}

const PriceCards = ({ cardsData, isActive }: PriceCardProps) => {
  return (
    <div
      className={` ${isActive ? "text-white" : "text-[#212529]"} 
      ${isActive ? "bg-[#043873]" : "bg-white"}
      ${isActive ? "" : "border-1 border-[#FFE492]"}
      ${isActive ? "sm:py-[80px]" : "sm:py-[40px]"}  py-[20px]
      flex flex-col gap-2 rounded-xl
      2xl:w-[384px] xl:w-[349px] lg:w-[253px] sm:w-[384px] w-[249px]
      sm:px-[44px] px-[20px]
      `}
    >
      <p className={`font-semibold text-2xl`}>{cardsData.title}</p>
      <p className={`font-bold text-4xl ${isActive ? "text-[#FFE492]" : ""}`}>
        {cardsData.cost}
      </p>
      <p
        dangerouslySetInnerHTML={{ __html: cardsData.description }}
        className="font-medium text-lg"
      />
      <div className={`flex flex-col gap-[28px] mt-[25px]`}>
        {cardsData.bulletPoints.map((bullet, index) => (
          <div key={index} className={`flex gap-[19px] items-center`}>
            <img
              src={
                isActive
                  ? "/icons/bulletIconGold.png"
                  : "/icons/bulletIconBlack.png"
              }
              alt="blackBulletIcon"
            />{" "}
            <p className={`font-normal text-base`}>{bullet}</p>
          </div>
        ))}
      </div>
      <button
        className={`
            mt-[25px] rounded-lg w-[176px] h-[62px] sm:w-[166px] sm:h-[51px]
             ${isActive ? "" : "border-1 border-[#FFE492]"}
             ${isActive ? "bg-[#4F9CF9] text-white" : ""}
             `}
      >
        Get Started
      </button>
    </div>
  );
};

export default PriceCards;
