const Header = () => {
  return (
    <header className="bg-blue-gray px-8 py-3 flex justify-between items-center border-b-1">
      <a href="#">
        <span className="text-3xl font-bold">RoadDoca</span>
      </a>
      <input
        className="border rounded-[4px] py-1 px-1.5 bg-space-blue  "
        type="text"
        placeholder="search"
      />
    </header>
  );
};

export default Header;
