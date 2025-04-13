import ListOfTopics from "../../shared/list-of-topics/ui/list-of-topics";

const Sidebar = () => {
  return (
    <aside className="bg-lavender-gray relative col-start-1 row-span-full row-start-1 max-lg:hidden w-[230px]  ">
      <nav className=" h-full flex flex-col overflow-auto p-3 gap-3 ">
        <ListOfTopics />
      </nav>
    </aside>
  );
};

export default Sidebar;
