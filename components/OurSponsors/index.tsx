const Oursponsors = () => {
  const titleText1 = "Our ";
  const titleText2 = "Sponsors";
  const icons:string[]=["AppleIcon.png","GoogleIcon.png","microsoftIcon.png","SlackIcon.png"]
  return (
    <div className="sm:py-[140px] py-[80px] flex flex-col items-center justify-center sm:mx-[32px] mx-[20px]">
      <p className="font-bold xl:text-7xl lg:text-[64px] sm:text-[54px] text-[36px] text-center">
        {titleText1}{" "}
        <span
          className="inline-block leading-[1.7] bg-[url('/images/OurSponsorUnderline.png')] bg-no-repeat bg-[length:100%_30px]
            2xl:bg-[position:0_84px] xl:bg-[position:0_72px] lg:bg-[position:0_75px] sm:bg-[position:0_64px] bg-[position:0_44px]"
        >
          {titleText2}
        </span>
      </p>
      <div className="flex items-center justify-evenly max-lg:flex-col max-lg:gap-[100px] 2xl:w-[1482px] w-full mt-[100px]">
        {icons.map((iconSrc,index)=>(
            <img key={index} src={`/icons/${iconSrc}`} alt={`${iconSrc} alt`}/>
        ))}
      </div>
    </div>
  );
};
export default Oursponsors;
