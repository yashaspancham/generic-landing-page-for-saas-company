import BlueButton from "../blueButton";

const Footer = () => {
  const titleText = "Try Whitepace today";
  const paragraphText =
    "Get started for free. Add your whole team as your needs grow.";
  const whiteIcons: string[] = [
    "androidWhiteIcon.png",
    "appleWhiteLogo.png",
    "microsftWhiteLogo.png",
  ];
  return (
    <div className="bg-[#043873] text-white">
      <div className="lg:py-[140px] py-[100px] flex items-center justify-center">
        <div className="sm:w-[608px] w-[288px] flex flex-col items-center text-center">
          <p className="font-bold lg:text-7xl sm:text-[62px] text-[40px]">
            {titleText}
          </p>
          <p className="mt-[24px] font-normal text-lg ">{paragraphText}</p>
          <BlueButton
            text="Try Taskey free ->"
            extraCSS="w-[193px] h-[70px] sm:w-[241px] sm:h-[63px] items-center justify-center my-[40px]"
          />
          <p className="font-normal text-[18px] sm:text-2xl">
            On a big team? Contact sales
          </p>
          <div className="flex sm:gap-[44px] gap-[40px] mt-[40px]">
            {whiteIcons.map((iconSrc, index) => (
              <img
                src={`/icons/${iconSrc}`}
                alt="white icons alt text"
                key={index}
                className="sm:h-[60px] h-[36px]"
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center max-lg:flex-col max-lg:text-center gap-[100px] max-lg:px-[32px]">
          <div className="lg:w-[240px]">
            <div className="flex gap-[10px] items-center max-lg:justify-center">
              <img
                src={"/icons/whitespacwWhiteLogo.png"}
                alt="whitespaceIcons"
              />
              <p className="font-bold text-[28px]">WhiteSpace</p>
            </div>
            <p className="font-normal text-lg mt-[25px]">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <p className="font-bold text-[18px]">Product</p>
            <p className="font-normal text-base">Overview</p>
            <p className="font-normal text-base">Pricing</p>
            <p className="font-normal text-base">Customer stories</p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <p className="font-bold text-[18px]">Resources</p>
            <p className="font-normal text-base">Blog</p>
            <p className="font-normal text-base">Guides & tutorials</p>
            <p className="font-normal text-base">Help center</p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="font-bold text-[18px]">Company</p>
            <p className="font-normal text-base">About us</p>
            <p className="font-normal text-base">Careers</p>
            <p className="font-normal text-base">Media kit</p>
          </div>
          <div className="flex flex-col items-center gap-[16px] lg:w-[300px] ">
            <p className="font-bold text-[28px] w-[200px]">Try It Today</p>
            <p className="font-normal text-base">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <BlueButton text="Start today ->" extraCSS="h-[53px] w-[183px] items-center justify-center text-[16px]"/>
          </div>
        </div>

        <div className="flex max-lg:flex-col  max-lg:items-start max-sm:items-center items-center justify-around mt-[100px] pb-[32px]">
          <div className="flex gap-[60px] max-sm:gap-[10px]  max-sm:flex-col items-center justify-evenly font-normal text-base">
            <div className="flex gap-1 items-center justify-center">
              <img
                src={"/icons/internetIWhitecon.png"}
                alt="internetIcon"
                className="h-[19px]"
              />
              <p>English</p>
              <img
                src={"/icons/DownWhiteIcon.png"}
                alt="down icon alt"
                className="h-[6px]"
              />
            </div>
            <p>Terms & privacy</p>
            <p>Security</p>
            <p>Status</p>
            <p>©2021 Whitepace LLC.</p>
          </div>
          <img src={"/icons/SocialWhiteIcon.png"} alt="Socal Icons alt"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
