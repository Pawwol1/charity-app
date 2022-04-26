import React from "react";
import "./UserLogout.scss";
import MainMenu from "../MainMenu/MainMenu";
import decoration from "../../assets/Decoration.svg";

export default function UserLogout() {
  return (
    <>
      <MainMenu />
      <section className="user-login">
        <h1>Wylogowanie nastąpiło pomyślnie!</h1>
        <img src={decoration} alt="decoration" height="33" />
        <div className="buttons buttons-centered">
          <button className="outlined" id="login">
            Strona główna
          </button>
        </div>
      </section>
    </>
  );
}
