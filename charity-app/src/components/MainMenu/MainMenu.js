import React from "react";
import "./MainMenu.scss";
import LoginMenu from "./LoginMenu";
import NavMenu from "./NavMenu";

export default function MainMenu() {
  return (
    <header>
      <div>
        <LoginMenu />
        <NavMenu />
      </div>
    </header>
  );
}
