import BlueButton from "../blueButton";

const YourData = () => {
  const titleText1 = "100% ";
  const titleText2 = "your data";
  const paragraphText =
    "The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.";
  return (
    <div className="xl:py-[169px] sm:py-[140px] py-[80px] text-[#212529] flex max-lg:flex-col-reverse justify-center items-center max-lg:px-[20px]">
      <div className="flex flex-col justify-center max-lg:items-center 2xl:w-[800px] xl:w-[695px] lg:w-[526px] w-auto max-lg:mt-[100px]">
        <p className="font-bold xl:text-7xl lg:text-[64px] sm:text-[54px] text-[36px]">
          {titleText1}
          <span
            className="inline-block leading-[1.7] bg-[url('/images/project_management_underline.png')] bg-no-repeat bg-[length:100%_30px]
          2xl:bg-[position:0_88px] xl:bg-[position:0_72px] lg:bg-[position:0_75px] sm:bg-[position:0_64px] bg-[position:0_44px]"
          >
            {titleText2}
          </span>
        </p>
        <p className="font-normal text-lg mt-[24px] text-center">{paragraphText}</p>
        <BlueButton
          text="Read More ->"
          extraCSS="lg:w-[197px] lg:h-[63px] sm:w-[184px] sm:h-[59px] w-[193px] h-[70px] flex items-center justify-center mt-[60px]"
        />
      </div>
      <img src={"/images/YourData.png"} alt="100% your data section image" className="xl:w-[681px] lg:w-[562px] sm:w-[512px] w-auto"/>
    </div>
  );
};
export default YourData;
