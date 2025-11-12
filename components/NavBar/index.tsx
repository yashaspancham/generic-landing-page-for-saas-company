import BlueButton from "../blueButton";

const NavBar = () => {
  return (
    <div
      className="2xl:px-[220px] 2xl:-translate-x-1 sm:px-[32px] px-[16px] 
      w-[100vw] h-[56px] sm:h-[66px] lg:h-[92px] bg-[#043873] fixed z-10 text-white
      flex items-center justify-between"
    >
      <div className="flex gap-[10px] items-center max-lg:justify-center">
        <img src={"/icons/whitespacwWhiteLogo.png"} alt="whitespaceIcons" />
        <p className="font-bold text-[28px]">WhiteSpace</p>
      </div>{" "}
      <div className="flex gap-[32px] items-center">
        <div className="flex gap-[10px] items-center max-xl:hidden">
          <p>Products</p>{" "}
          <img
            src={"/icons/DownWhiteIcon.png"}
            alt="down icon alt"
            className="h-[6px]"
          />
        </div>
        <div className="flex gap-[10px] items-center max-xl:hidden">
          <p>Solutions</p>{" "}
          <img
            src={"/icons/DownWhiteIcon.png"}
            alt="down icon alt"
            className="h-[6px]"
          />
        </div>
        <div className="flex gap-[10px] items-center max-xl:hidden">
          <p>Resources</p>{" "}
          <img
            src={"/icons/DownWhiteIcon.png"}
            alt="down icon alt"
            className="h-[6px]"
          />
        </div>
        <div className="flex gap-[10px] items-center max-xl:hidden">
          <p>Pricing</p>{" "}
          <img
            src={"/icons/DownWhiteIcon.png"}
            alt="down icon alt"
            className="h-[6px]"
          />
        </div>
        <button className="bg-[#FFE492] w-[126] h-[60] opacity-100 gap-2.5 px-10 py-4 rounded-lg  text-[#043873] text-[18px] font-medium max-lg:hidden">
          Login
        </button>
        <BlueButton
          text={"Try Whitepace free ->"}
          extraCSS="w-[227px] h-[60px] max-lg:hidden items-center justify-center"
        />
        <div className="flex flex-col gap-[12px] xl:hidden">
          <div className="w-[42px] h-0 border-2" />
          <div className="w-[42px] h-0 border-2" />
          <div className="w-[42px] h-0 border-2" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
