import React, { useState } from "react";
import MainMenu from "../MainMenu/MainMenu";
import decoration from "../../assets/Decoration.svg";

export default function UserRegister() {
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [password2Field, setPassword2Field] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password2Error, setPassword2Error] = useState(false);

  const validateEmail = () => {
    return emailField.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePassword = () => {
    return passwordField.length >= 6;
  };

  const validatePassword2 = () => {
    return password2Field === passwordField;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError(!validateEmail());
    setPasswordError(!validatePassword());
    setPassword2Error(!validatePassword2());
  };

  return (
    <>
      <MainMenu />
      <section className="user-login">
        <h1>Załóż konto</h1>
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
          <label for="passwordconfirm">Powtórz hasło</label>
          <input
            id="passwordconfirm"
            type="password"
            className={password2Error ? "errored" : ""}
            value={password2Field}
            onChange={(e) => setPassword2Field(e.target.value)}
          />
          <p
            className="error-message"
            style={password2Error ? { display: "block" } : { display: "none" }}
          >
            Hasła muszą być takie same!
          </p>
        </form>
        <div className="buttons">
          <button id="login">Zaloguj się</button>
          <button className="outlined" id="signup" onClick={handleSubmit}>
            Załóż konto
          </button>
        </div>
      </section>
    </>
  );
}
