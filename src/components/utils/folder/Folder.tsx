interface FolderProps {
  title: string;
  children: React.ReactNode;
  seeMoreLink?: string;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
}

const Folder: React.FC<FolderProps> = ({
  title,
  children,
  seeMoreLink,
  className,
  titleClassName,
  bodyClassName,
}) => {
  return (
    <div className={`${className} w-full relative mt-[33px]`}>
      <div className={` box flex flex-col overflow-hidden z-0`}>
        <div className={`py-[20px] px-[15px] ${titleClassName} `}>
          <h3 className="text-black text-[32px] font-bold font-['Neue_Regrade']">
            {title}
          </h3>
          <div className="absolute bottom-[calc(100%-4px)] left-[42px] z-20 folder-tab bg-inherit h-[33px] w-[157px]"></div>
          <img
            className="absolute bottom-[calc(100%-3px)] left-[42px] z-20"
            src="/images/folder_tab.svg"
          />
          <div className="absolute bottom-[calc(100%-4px)] left-[42px] z-30 bg-inherit h-[2px] w-[157px]"></div>
        </div>
        <div className={`${bodyClassName} border-t-2 border-black p-[20px] `}>
          <div className="overflow-hidden text-ellipsis h-[125px]">
            {children}
          </div>
          {seeMoreLink && (
            <a
              href={seeMoreLink}
              className="text-black text-xl font-medium font-['Neue_Regrade'] underline"
            >
              Ver más
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Folder;
