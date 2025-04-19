import { FC, ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1000px]">
      <div className="flex flex-col items-center gap-6 text-[17px] pt-4 ">
        {children}
      </div>
    </div>
  );
};

export default Container;
