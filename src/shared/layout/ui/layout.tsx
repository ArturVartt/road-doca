import { FC, JSX } from "react";
import Header from "../../../widgets/header/header";
import Sidebar from "../../../widgets/sidebar/sidebar";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
