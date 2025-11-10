import ClientsCards from "../ClientsCards";

const ClientsSay = () => {
  const titleText1 = "What Our Clients ";
  const titleText2 = "Say";
  return (
    <div className="flex flex-col gap-[60px] items-center justify-center sm:py-[140px] py-[100px]">
      <p className="font-bold lg:text-[70px] sm:text-[54px] text-[40px] text-center text-[#212529]">
        {titleText1}
        <span
          className="inline-block leading-[1.7] bg-[url('/images/project_management_underline.png')] bg-no-repeat bg-[length:100%_30px]
             2xl:bg-[position:0_88px] xl:bg-[position:0_72px] lg:bg-[position:0_75px] sm:bg-[position:0_64px] bg-[position:0_44px]"
        >
          {titleText2}
        </span>
      </p>
      <ClientsCards />
    </div>
  );
};

export default ClientsSay;
