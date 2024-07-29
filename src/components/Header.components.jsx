import React from "react";
import ContainerComponents from "./Container.components";
import CategoriesButtonComponents from "./CategoriesButton.components";
import { Link } from "react-router-dom";

const HeaderComponents = () => {
  return (
    <header className=" mx-auto bg-slate-50 fixed w-full z-50 h-20 shadow">
      <nav className="px-3 xl:px-0 max-w-7xl mx-auto flex justify-between items-center h-full">
        <Link to={"/"}>
        <h1 className="font-headings font-bold text-3xl text-slate-500">
          Online Shop
        </h1>
        </Link>
        <Link to={"/my-cart"}>
        <CategoriesButtonComponents className="relative h-10">
          Cart{" "}
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-400 text-white flex justify-center items-center border border-white">
            0
          </span>
        </CategoriesButtonComponents>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderComponents;
