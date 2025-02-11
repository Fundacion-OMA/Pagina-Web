interface BoxButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  url: string;
  iconLink: string;
  text: string;
  className?: string;
}

const BoxButton: React.FC<BoxButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={`${className} box w-full px-[25px] py-[20px] flex flex-col gap-y-[15px]`}
      {...props}
      onClick={() => (window.location.href = props.url)}
    >
      <img src={props.iconLink} alt="" />
      <span className="text-left text-black font-bold font-['Neue Regrade']">
        {props.text}
      </span>
    </button>
  );
};

export default BoxButton;
