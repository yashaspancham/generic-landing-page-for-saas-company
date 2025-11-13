import BlueButton from "../blueButton";

const ProjectManagement = () => {
  const titleText1 = "Project ";
  const titleText2 = "Management";
  const paragraphText =
    "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.";
  return (
    <div className="pt-[140px] flex items-center justify-center text-[#212529] max-lg:px-6">
      <img
        src="/images/Curves.png"
        alt="Second curve alt text"
        className="absolute left-0 z-0 opacity-30 2xl:translate-y-20 2xl:-translate-x-0 xl:-translate-x-30  max-xl:hidden"
      />
      <img
        src="/images/CurvesForMobile.png"
        alt="Second curve alt text"
        className="absolute left-0 z-0 opacity-20 -translate-y-52 xl:hidden"
      />
      <div className="flex max-lg:flex-col justify-center items-center 2xl:gap-15  gap-2 max-lg:gap-5 z-1">
        <div
          className="flex flex-col 
        2xl:w-[672px] xl:w-[657px] lg:w-[436px] w-auto max-lg:text-center"
        >
          <p className="font-bold 2xl:text-7xl lg:text-[64px] sm:text-[54px] text-4xl ">
            {titleText1}{" "}
            <span
              className="inline-block leading-[1.7] bg-[url('/images/project_management_underline.png')] bg-no-repeat bg-[length:100%_30px]
              2xl:bg-[position:0_88px] xl:bg-[position:0_72px] lg:bg-[position:0_75px] sm:bg-[position:0_64px] bg-[position:0_44px]"
            >
              {titleText2}
            </span>
          </p>
          <p className="font-normal text-lg pt-6">{paragraphText}</p>
          <BlueButton
            text="Get Started ->"
            extraCSS=" w-[200px] h-[70px] sm:w-[190px] sm:h-[59px] lg:w-[201px] lg:h-[63px] flex items-center justify-center mt-[60px] max-lg:self-center"
          />
        </div>
        <div className="bg-[#C4DEFD] max-lg:mt-[60px] 2xl:w-[748px] 2xl:h-[547px] lg:w-[527.74px] lg:h-[320px] sm:w-[561px] sm:h-[349px] w-[286px] h-[177px]" >
          <img src={"/images/puppies/p0.avif"} alt="puppieImages" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
};
export default ProjectManagement;
