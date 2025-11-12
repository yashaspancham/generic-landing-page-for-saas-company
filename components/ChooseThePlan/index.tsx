import GoldenUnderline from "../GoldenUnderline";
import PriceOptions from "../PriceOptions";

const ChooseThePlan = () => {
  const titleText1 = "Choose ";
  const titleText2 = "Your Plan";
  const paragraphText =
    "The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.";

  return (
    <div className="flex flex-col  items-center justify-center my-[140px] lg:px-[32px] sm:px-[20px] px-[16px]">
      <div className="flex flex-col">
        <p className="font-bold xl:text-7xl lg:text-[64px] sm:text-[54px] text-[36px] text-center">
          {titleText1}
          <GoldenUnderline text={titleText2} />
        </p>
        <p className="font-normal text-lg text-center mt-[24px] max-w-[1481px]">
          {paragraphText}
        </p>
      </div>
      <PriceOptions />
    </div>
  );
};

export default ChooseThePlan;
