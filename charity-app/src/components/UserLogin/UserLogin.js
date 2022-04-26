import React, { useState } from "react";
import "./UserLogin.scss";
import MainMenu from "../MainMenu/MainMenu";
import decoration from "../../assets/Decoration.svg";

export default function UserLogin() {
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = () => {
    return emailField.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePassword = () => {
    return passwordField.length >= 6;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError(!validateEmail());
    setPasswordError(!validatePassword());
  };

  return (
    <>
      <MainMenu />
      <section className="user-login">
        <h1>Zaloguj się</h1>
        <img src={decoration} alt="decoration" height="33" />
        <form>
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            className={emailError ? "errored" : ""}
            value={emailField}
            onChange={(e) => setEmailField(e.target.value)}
          />
          <p
            className="error-message"
            style={emailError ? { display: "block" } : { display: "none" }}
          >
            Podany email jest nieprawidłowy!
          </p>
          <label for="password">Hasło</label>
          <input
            id="password"
            type="password"
            className={passwordError ? "errored" : ""}
            value={passwordField}
            onChange={(e) => setPasswordField(e.target.value)}
          />
          <p
            className="error-message"
            style={passwordError ? { display: "block" } : { display: "none" }}
          >
            Podane hasło jest za krótkie!
          </p>
        </form>
        <div className="buttons">
          <button id="signup">Załóż konto</button>
          <button className="outlined" id="login" onClick={handleSubmit}>
            Zaloguj się
          </button>
        </div>
      </section>
    </>
  );
}
