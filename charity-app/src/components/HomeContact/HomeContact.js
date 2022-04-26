import React, { useState } from "react";
import "./HomeContact.scss";
import decoration from "../../assets/Decoration.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";

export default function HomeContact() {
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [msgField, setMsgField] = useState("");

  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);

  const validateName = () => {
    return nameField.match("^[A-Za-z]{1,20}$");
  };

  const validateEmail = () => {
    return emailField.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateMsg = () => {
    return msgField.length >= 120;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formOK = true;
    if (validateName()) {
      setNameError(false);
    } else {
      setNameError(true);
      formOK = false;
    }
    if (validateEmail()) {
      setEmailError(false);
    } else {
      setEmailError(true);
      formOK = false;
    }
    if (validateMsg()) {
      setMsgError(false);
    } else {
      setMsgError(true);
      formOK = false;
    }
    if (formOK) submitForm();
  };

  const submitForm = async () => {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameField,
        email: emailField,
        message: msgField,
      }),
    });
    console.log(response);
    const content = await response.json();
    console.log(content);
  };

  const textareaPlaceholder =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      <section className="contact" name="contact">
        <div className="image"></div>
        <div className="right">
          <h1>O nas</h1>
          <img src={decoration} alt="decoration" height="33" />
          <form>
            <div className="form-top">
              <div>
                <label for="name">Wpisz swoje imię</label>
                <input
                  className={nameError ? "errored" : ""}
                  type="text"
                  id="name"
                  placeholder="Mike"
                  value={nameField}
                  onChange={(e) => setNameField(e.target.value)}
                />
                <p
                  className="error-message"
                  style={nameError ? { display: "block" } : { display: "none" }}
                >
                  Podane imię jest nieprawidłowe!
                </p>
              </div>
              <div>
                <label for="email">Wpisz swój email</label>
                <input
                  className={emailError ? "errored" : ""}
                  type="email"
                  id="email"
                  placeholder="mike@tyson.com"
                  value={emailField}
                  onChange={(e) => setEmailField(e.target.value)}
                />
                <p
                  className="error-message"
                  style={
                    emailError ? { display: "block" } : { display: "none" }
                  }
                >
                  Podany email jest nieprawidłowy!
                </p>
              </div>
            </div>
            <div className="form-middle">
              <label for="message">Wpisz swoją wiadomość</label>
              <textarea
                className={msgError ? "errored" : ""}
                id="message"
                placeholder={textareaPlaceholder}
                rows="5"
                value={msgField}
                onChange={(e) => setMsgField(e.target.value)}
              ></textarea>
              <p
                className="error-message"
                style={msgError ? { display: "block" } : { display: "none" }}
              >
                Wiadomość musi mieć conajmniej 120 znaków!
              </p>
            </div>
            <div className="form-bottom">
              <button onClick={handleSubmit}>Wyślij</button>
            </div>
          </form>
        </div>
      </section>
      <footer>
        <p>Copyright by Coders Lab</p>
        <img
          className="facebook-icon"
          src={Facebook}
          alt="facebook"
          height="30"
        />
        <img
          className="instagram-icon"
          src={Instagram}
          alt="instagram"
          height="30"
        />
      </footer>
    </>
  );
}
