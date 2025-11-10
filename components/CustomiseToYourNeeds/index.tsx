import BlueButton from "../blueButton";

const CustomiseToYourNeeds = () => {
  const titleText1 = "Customise it to ";
  const titleText2 = "your needs";
  const paragraphText1 =
    "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.";
  return (
    <div className="my-[140px] flex items-center justify-evenly max-lg:flex-col px-[16px]">
      <div className="bg-[#C4DEFD] 2xl:w-[714px] 2xl:h-[532px] xl:w-[670px] xl:h-[500px] sm:w-[534px] sm:h-[400px] w-[288px] h-[214px]" />

      <div className="2xl:w-[669px] xl:w-[646px] lg:w-[494px] w-auto max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:mt-[60px]">
        <p className="font-bold xl:text-7xl lg:text-[64px] sm:text-[54px] text-[40px]">
          {titleText1}
          <span
            className="inline-block leading-[1.7] bg-[url('/images/project_management_underline.png')] bg-no-repeat bg-[length:100%_30px]
             2xl:bg-[position:0_88px] xl:bg-[position:0_72px] lg:bg-[position:0_75px] sm:bg-[position:0_64px] bg-[position:0_44px]"
          >
            {titleText2}
          </span>
        </p>
        <p className="font-normal text-lg mt-[24px]">{paragraphText1}</p>
        <BlueButton text="Let's Go ->" extraCSS="mt-[32px]" />
      </div>
    </div>
  );
};

export default CustomiseToYourNeeds;
