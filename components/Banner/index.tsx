import BlueButton from "../blueButton";
const BannerSection = () => {
  const H2text = "Get More   Done with whitepace";
  const paragraphText =
    "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks";
  return (
    <div className="bg-[url('/images/TopSection.png')] bg-cover bg-center h-screen flex max-lg:flex-col items-center justify-center max-lg:px-4">
      <div className="text-white 2xl:w-[656px]  lg:w-[562px] w-auto max-lg:text-center flex flex-col items-start max-lg:items-center">
        <p
          className={`mt-6 font-bold text-[36px] md:text-[54px] xl:text-[64px] stroke-text [text-shadow:0px_4px_4px_#00000040]`}
        >
          {H2text}
        </p>
        <p className="font-normal text-lg">{paragraphText}</p>

        <BlueButton text={"Try Whitepace free ->"} extraCSS="mt-[60px] w-[222px] h-[63px] flex items-center justify-center" />
      </div>
      <div className="bg-[#C4DEFD] 2xl:w-[824px] 2xl:h-[549px] xl:w-[685px] xl:h-[456px] lg:w-[526px] lg:h-[350.45px] sm:w-[551px] sm:h-[367px] w-[286px] h-[191px] mt-[100px]" />
    </div>
  );
};

export default BannerSection;
