import BlueButton from "../blueButton";

const UseAsExtension = () => {
  const titleText1 = "Use as ";
  const titleText2 = "Extension";
  const paragraphText =
    "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.";
  return (
    <div className="bg-[#043873] flex max-lg:flex-col justify-evenly items-center py-[140px] px-8">
      <div className="text-white 2xl:w-[700px] xl:w-[600px] lg:w-[527px] w-auto max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
        <p className="font-bold xl:text-7xl lg:text-[64px] sm:text-[54px] text-[36px] mb-[24px]">
          {titleText1}
          <span
            className="inline-block leading-[1.7] bg-[url('/images/project_management_underline.png')] bg-no-repeat bg-[length:100%_30px]
             2xl:bg-[position:0_88px] xl:bg-[position:0_72px] lg:bg-[position:0_75px] sm:bg-[position:0_64px] bg-[position:0_44px]"
          >
            {titleText2}
          </span>
        </p>
        <p className="font-normal text-lg">{paragraphText}</p>
        <BlueButton text="Let's Go ->" extraCSS="w-[170px] h-[69px] flex items-center justify-center mt-[60px]"/>
      </div>
      <div className="bg-[#C4DEFD] xl:w-[686px] xl:h-[479px] lg:w-[459px] lg:h-[320.5px] sm:w-[557px] sm:h-[388.93px] w-[284.5px] h-[198.65px] max-lg:mt-[60px]" />
    </div>
  );
};
export default UseAsExtension;
