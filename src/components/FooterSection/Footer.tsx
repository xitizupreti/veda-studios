"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [mail, setMail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };
  const validateEmail = (email: string) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!mail) {
      setErrorMessage("Email cannot be empty");
    } else if (!validateEmail(mail)) {
      setErrorMessage("Email address is not valid");
    } else {
      setErrorMessage("");
      console.log("Email is valid:", mail);
    }
  };
  const errorStyles = {
    border: "1px solid rgba(234, 56, 31,1)",
    backgroundImage: "url(/icon-error.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "95% 50%",
  };

  const normalStyles = {
    border: "3px solid hsl(246, 25%, 77%)",
    backgroundImage: "none",
    color: "black",
  };
  return (
    <div className={styles.newsletter}>
      <span className={styles.text}>
        <span
          style={{
            fontWeight: "800",
            fontSize: "20px",
            lineHeight: "30px",
            color: "rgba(44,44,44,1)",
          }}
        >
          Join our newsletter
        </span>
        <br />
        <span
          style={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            color: "rgba(0,0,0,1)",
          }}
        >
          Pawprint that has been for pets.
        </span>
      </span>
      <form className={styles.email} onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "64px",
            justifyContent: "space-between",
          }}
        >
          <input
            value={mail}
            onChange={handleInputEvent}
            type="email"
            className={styles.mail}
            name="mail"
            placeholder="Enter your email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            style={errorMessage ? errorStyles : normalStyles}
          />
          {errorMessage}
        </div>
        <button
          id="submit"
          type="submit"
          className="navbut2"
          style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
