import { Link } from "react-router";

const ListOfTopics = () => {
  return (
    <div>
      <h3 className="text-2xl p-1 font-medium">Js</h3>
      <div className="p-1 ">
        <ul className="font-medium flex flex-col gap-0.5 break-words border-l pl-1 ">
          <li className="hover:bg-space-blue px-1.5 py-0.5 rounded-sm ">
            <Link to="/intro">
              <span>Введение в JavaScript</span>
            </Link>
          </li>
          <li className="hover:bg-space-blue px-1.5 py-0.5 rounded-sm ">
            <Link to="/starting">
              <span>Начинаем нырять в JavaScript</span>
            </Link>
          </li>
          <li className="hover:bg-space-blue px-1.5 py-0.5 rounded-sm ">
            <Link to="">
              <span>Типы данных</span>
            </Link>
          </li>
          <li className="hover:bg-space-blue px-1.5 py-0.5 rounded-sm ">
            <Link to="">
              <span>EvenLoop</span>
            </Link>
          </li>
          <li className="hover:bg-space-blue px-1.5 py-0.5 rounded-sm ">
            <Link to="">
              <span>Замыкание</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListOfTopics;
