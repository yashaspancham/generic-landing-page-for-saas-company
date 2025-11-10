interface clientSaysCardT {
  id: number;
  description: string;
  clientName: string;
  clientTitle: string;
  clientProfilePic: string;
}
interface ClientsSayCardPropsT {
  clientSay: clientSaysCardT;
  isActive?: boolean;
}

const ClientsSayCard = ({ clientSay, isActive }: ClientsSayCardPropsT) => {
  return (
    <div
      className={`
        2xl:w-[391px] xl:w-[389px] lg:w-[293px] w-[248px]
        lg:py-[60px] 2xl:px-[40px] sm:px-[24px] px-[20px] py-[20px] 
        flex flex-col items-center justify-center rounded-[10px] ${
          isActive ? "bg-[#4F9CF9]" : "bg-white"
        }
      
      shadow-[15px_10px_50px_0px_#0000001a]
      `}
    >
      <div
        className={`
        ${isActive ? "border-white" : "border-[#212529]"} border-b-1  
        `}
      >
        <img
          src={`/images/${
            isActive ? "quoteWhiteIcon.png" : "quoteBlueIcon.png"
          }`}
          alt="quoteIcon alt"
        />
        <p className="mt-[32px] mb-[40px] font-normal lg:text-lg text-base">
          {clientSay.description}
        </p>
      </div>
      <div
        className="flex lg:gap-[42px] gap-[24px] max-lg:flex-col
       xl:py-[60px] lg:pt-[60px] lg:pb-[40px] pb-[20px] pt-[40px]"
      >
        <img
          src={`/images/${clientSay.clientProfilePic}`}
          alt="clients profile pic alt"
          className="rounded-[50%] sm:w-[95px] sm:h-[95px] w-[65px] h-[65px]"
        />
        <div className="flex flex-col">
          <p
            className={`font-semibold lg:text-2xl text-[18px] ${
              isActive ? "text-[#043873]" : "text-[#212529]"
            }`}
          >
            {clientSay.clientName}
          </p>
          <p
            className={`font-normal text-base  ${
              isActive ? "text-white" : "text-[#212529]"
            }`}
          >
            {clientSay.clientTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientsSayCard;
