import BlueButton from "../blueButton";

const ProjectManagement = () => {
  const titleText1 = "Project ";
  const titleText2 = "Management";
  const paragraphText =
    "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.";
  return (
    <div className="pt-[140px] flex items-center justify-center text-[#212529]">
      <div className="flex max-lg:flex-col justify-evenly items-center gap-5 px-8">
        {/* [padding-left:clamp(8px,2vw,24px)] [padding-right:clamp(8px,2vw,24px)] */}
        <div className="flex flex-col 2xl:w-[640px] xl:w-[540px] lg:w-[440px] w-auto max-lg:text-center">
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
        <div className="bg-[#C4DEFD] max-lg:mt-[60px] 2xl:w-[748px] 2xl:h-[547px] xl:w-[719px] xl:h-[448px] lg:w-[527.74px] lg:h-[328.48px] sm:w-[561px] sm:h-[349px] w-[286px] h-[177px]" />
      </div>
    </div>
  );
};
export default ProjectManagement;
