import { useRef, useState } from "react";
import copyCode from "../../../shared/images/copy-code.svg";

interface ICodeTableProps {
  fileName?: string;
  code: string[];
}

const CodeTable = ({ fileName, code }: ICodeTableProps) => {
  const codeRef = useRef<HTMLElement>(null);
  const [isCopy, setIsCopy] = useState(false);

  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(!isCopy);
    } catch (err) {
      console.log(`"Ошибка:" ${err}`);
    } finally {
      setTimeout(() => setIsCopy(false), 700);
    }
  };

  const getText = () => {
    if (codeRef.current) {
      copyTextToClipboard(codeRef.current.textContent || "");
    }
  };

  return (
    <div>
      <span className="mb-1 block font-display">{fileName}</span>
      <div className="bg-lavender-gray text-[#2d2d2d] p-4 rounded-[4px]  text-[16px]  border border-[#bdb9b9] relative  ">
        <pre className="flex">
          <ul className="mr-3">
            {code.map((_, i) => (
              <li key={i}>{i + 1}</li>
            ))}
          </ul>
          <code ref={codeRef} className="flex flex-col leading-[1.5]">
            {code.map((el, i) => {
              return <code key={i}>{el}</code>;
            })}
          </code>
        </pre>

        <button
          onClick={getText}
          className="absolute flex top-1 right-10 cursor-pointer text-[14px] px-1 text-center"
        >
          <img className=" h-5 mr-1  " src={copyCode} />
          {isCopy === false ? (
            <span className=" border-b ">копировать</span>
          ) : (
            <span className=" border-b">скопировано</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeTable;
