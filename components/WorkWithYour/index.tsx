import BlueButton from "../blueButton";

const WorkWithYour = () => {
  const titleText = "Work with Your Favorite Apps Using whitepace";
  const paragraphText =
    "Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.";

  return (
    <section className="bg-[url('/images/WorkWithYourBackgroundImage.png')] py-[140px] flex items-center justify-center gap-[100px] max-lg:flex-col max-lg:py-[80px] px-[16.5px] sm:px-[32px]">
      <img
        src={"/images/WorkWithYourSectionImage.png"}
        alt="WorK with your section image"
        className="lg:w-[582px] w-auto"
      />
      <div className="text-white 2xl:w-[798px] xl:w-[694px] lg:w-[460px] w-auto px-[20px] max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
        <p className="font-bold text-[64px] sm:text-[54px] text-[36px]">
          {titleText}
        </p>
        <p className="font-normal text-lg mt-[24px]">{paragraphText}</p>
        <BlueButton text="Read more ->" extraCSS="lg:w-[194px] sm:h-[63px] sm:w-[203px] w-[193px] h-[70px] mt-[60px]"/>
      </div>
    </section>
  );
};

export default WorkWithYour;
