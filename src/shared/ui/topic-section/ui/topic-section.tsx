import { FC, ReactNode } from "react";

interface ITopicSectionProps {
  children: ReactNode;
  title: string;
}

const TopicSection: FC<ITopicSectionProps> = ({ children, title }) => {
  return (
    <div className=" w-full flex flex-col gap-3 ">
      <h2 className="text-[28px] font-semibold ">{title}</h2>
      {children}
    </div>
  );
};

export default TopicSection;
