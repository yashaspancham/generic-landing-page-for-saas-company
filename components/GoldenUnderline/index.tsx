interface GoldenUnderlinePropsT {
  text: string;
}

const GoldenUnderline = ({ text }: GoldenUnderlinePropsT) => {
  return (
    <span
      className="inline-block leading-[1.7] bg-[url('/images/project_management_underline.png')] bg-no-repeat bg-[length:100%_30px]
             2xl:bg-[position:0_88px] xl:bg-[position:0_72px] lg:bg-[position:0_75px] sm:bg-[position:0_64px] bg-[position:0_44px]"
    >
      {text}
    </span>
  );
};

export default GoldenUnderline;
