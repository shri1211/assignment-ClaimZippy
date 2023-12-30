import React from "react";
import BtnAddTask from "../Utilities/BtnAddTask";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import SearchField from "./SearchField";
import { useAppDispatch } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import Notification from "./Notification";

const HeaderTasks: React.FC = () => {
  const dispatch = useAppDispatch();


  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };

  return (
    <header className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex ">
      <button
        className="mr-6 block xl:hidden"
        onClick={openMenuHeaderHandler}
        title="open menu"
      >
        <MenuIcon />
      </button>
      <SearchField />
      <div className="text-center">
        <span className="text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden">
          Create Your Task
        </span>
      </div>
      <div className="flex flex-1">
        <Notification />
        <BtnAddTask className="sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent" />
      </div>
    </header>
  );
};

export default HeaderTasks;
