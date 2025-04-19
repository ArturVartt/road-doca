import { JSX } from "react";
import question from "../../../images/code-question.svg";

interface IInformationTableProps {
  title: string;
  text: JSX.Element;
}

const InformationTable = ({ title, text }: IInformationTableProps) => {
  return (
    <div className="p-3 border-[2px] border-[#dfdddd] rounded-sm my-2">
      <div className="flex items-center mb-3">
        <h5 className="text-xl font-semibold mr-2 ">{title}</h5>
        <img className="h-4" src={question} />
      </div>
      <div className="flex flex-col gap-1.5">{text}</div>
    </div>
  );
};

export default InformationTable;
