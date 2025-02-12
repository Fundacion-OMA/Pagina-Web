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
    <div className={`${className} overflow-hidden  box w-full flex flex-col`}>
      <div className={`py-[20px] px-[15px] ${titleClassName}`}>
        <h3 className="text-black text-[32px] font-bold font-['Neue Regrade']">
          {title}
        </h3>
      </div>
      <div className={`${bodyClassName} border-t-2 border-black p-[20px] `}>
        <div className="overflow-hidden text-ellipsis h-[125px]">
          {children}
        </div>
        {seeMoreLink && (
          <a
            href={seeMoreLink}
            className="text-black text-xl font-medium font-['Neue Regrade'] underline"
          >
            Ver más
          </a>
        )}
      </div>
    </div>
  );
};

export default Folder;
