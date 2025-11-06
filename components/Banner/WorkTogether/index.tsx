import BlueButton from "@/components/blueButton";

const WorkTogether = () => {
  const titleText1 = "Work ";
  const titleText2 = "together";
  const paragraphText =
    "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.";
  return (
    <div className="pt-[100px] pb-[140px] flex max-lg:flex-col-reverse justify-evenly items-center gap-10 xl:gap-20 px-8">
      <img src={"/images/WorkTogeteher_img.png"} alt="WorkTogetherImage" className="lg:w-[528px] xl:w-[542px] 2xl:w-[710px]"/>
      <div className="text-[#212529] 2xl:w-[670px] xl:w-[633px] lg-w-[527px] w-auto flex flex-col items-start max-lg:items-center">
        <p className="font-bold xl:text-7xl lg:text-[64px] sm:text-[54px] text-4xl mt-6">
          {titleText1}{" "}
          <span
            className="inline-block leading-[1.7] bg-[url('/images/project_management_underline.png')] bg-no-repeat bg-[length:100%_30px]
             2xl:bg-[position:0_88px] xl:bg-[position:0_72px] lg:bg-[position:0_75px] sm:bg-[position:0_64px] bg-[position:0_44px]"
          >
            {titleText2}
          </span>
        </p>
        <p className="font-normal text-lg">{paragraphText}</p>
        <BlueButton text="Try it now ->" extraCSS="lg:w-[186px] lg:h-[63px] sm:w-[177px] sm:h-[59px] w-[200px] h-[70px] flex items-center justify-center mt-[60px]" />
      </div>
    </div>
  );
};

export default WorkTogether;
