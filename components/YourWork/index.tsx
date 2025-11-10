import BlueButton from "../blueButton";

const YourWork = () => {
  const titleText1 = "Your work, everywhere ";
  const titleText2 = "you are";
  const paragraphText =
    "Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!";
  return (
    <div className="py-[140px] bg-[#043873] text-white flex flex-col items-center px-[16px]">
      <img
        src={"/images/SecondCurve.png"}
        alt="curves images here"
        className="absolute z-0 left-0 xl:-translate-x-[50px] -translate-x-[200px] -translate-y-[300px] opacity-30"
      />
      <div className="xl:w-[1064px] lg:w-[650px] sm:w-[604px] w-auto z-1 relative flex flex-col items-center">
        <p className="font-bold xl:text-7xl lg:text-[64px] sm:text-[54px] text-[36px]">
          {titleText1}
          <span
            className="inline-block leading-[1.7] bg-[url('/images/blueUnderline.png')] bg-no-repeat bg-[length:100%_30px]
          2xl:bg-[position:0_88px] xl:bg-[position:0_72px] lg:bg-[position:0_75px] sm:bg-[position:0_64px] bg-[position:0_44px]"
          >
            {titleText2}
          </span>
        </p>
        <p className="font-normal text-lg text-center mt-[24px]">
          {paragraphText}
        </p>
        <BlueButton
          text="Get Taskey ->"
          extraCSS="mt-[60px] w-[195px] h-[63px] flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default YourWork;
