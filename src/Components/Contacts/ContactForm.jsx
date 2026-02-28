"use client";
import { useState } from "react";
import Button from "../UiElements/Button";
import classes from "./ContactForm.module.css"
import { isEmail, isEmpty, isSubject } from "@/helpers/validators";


export default function ContactForm(params) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();

    // send to an api
    console.log(name, email, subject);

    if (
      isEmpty(name) ||
      !isEmail(email) ||
      isMinLength(subject)
    ) {
      if (isEmpty(name)) {
        setNameError("Please provide a valid name!");
      }

      if (!isEmail(email)) {
        setEmailError("Please provide a valid email!");
      }

      if (isMinLength(subject)) {
        setSubjectError("Subject should be at least 5 chars!");
      }

      return;
    }

    setName("");
    setEmail("");
    setSubject("");
  };
  return (
     <form onSubmit={handleSubmit} className={classes["contact-form"]}>
      <h3>Contact Us</h3>

      <div className={classes["form-input"]}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Write your real name"
          onChange={(e) => {
            setName(e.target.value);
            if (!isEmpty(e.target.value)) {
              setNameError("");
            }
          }}
          value={name}
        />
        <p className={classes["error"]}>{nameError}</p>
      </div>

      <div className={classes["form-input"]}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Write a valid email"
          onChange={(e) => {
            setEmail(e.target.value);
            if (isEmail(e.target.value)) {
              setEmailError("");
            }
          }}
          value={email}
        />
        <p className={classes["error"]}>{emailError}</p>
      </div>

      <div className={classes["form-input"]}>
        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          placeholder="Write the subject in details"
          onChange={(e) => {
            setSubject(e.target.value);
            if (e.target.value.trim().length >= 5) {
              setSubjectError("");
            }
          }}
          value={subject}
        ></textarea>
        <p className={classes["error"]}>{subjectError}</p>
      </div>

      <Button className={classes["btn"]}>Send</Button>
    </form>
  );
}