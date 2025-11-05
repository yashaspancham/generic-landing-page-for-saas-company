interface BlueButtonProps {
  extraCSS?: string;
  text:string;
}

const BlueButton = ({ extraCSS,text }: BlueButtonProps) => {
  return (
    <button
      className={`flex gap-2 w-[222px] h-[63px] p-5 rounded-lg text-white bg-[#4F9CF9] ${extraCSS}`}
    >
      <p className="font-medium text-lg">{text}</p>
    </button>
  );
};
export default BlueButton;
