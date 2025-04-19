import { JSX } from "react";

interface TopicTitle {
  title: string;
  text: JSX.Element;
}

const TopicTitle = ({ title, text }: TopicTitle) => {
  return (
    <div className="w-full ">
      <h1 className="pb-2 text-[39px] font-medium ">{title}</h1>
      {text}
    </div>
  );
};

export default TopicTitle;
