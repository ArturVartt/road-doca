import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-blue-gray px-8 py-3 flex justify-between items-center border-b-1">
      <Link to="/">
        <span className="text-3xl font-bold">RoadDoca</span>
      </Link>
      <input
        className="border rounded-[4px] py-1 px-1.5 bg-space-blue-light  "
        type="text"
        placeholder="search"
      />
    </header>
  );
};

export default Header;
