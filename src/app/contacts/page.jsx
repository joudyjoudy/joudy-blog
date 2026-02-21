"use client";

import Button from "@/Components/UiElements/Button";
import { useState } from "react";
import classes from "./page.module.css";

export default function ContactsPage() {
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
      name.trim().length === 0 ||
      !email.trim().includes("@") ||
      subject.trim().length < 5
    ) {
      if (name.trim().length === 0) {
        setNameError("Please provide a valid name!");
      }

      if (!email.trim().includes("@")) {
        setEmailError("Please provide a valid email!");
      }

      if (subject.trim().length < 5) {
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
            if (e.target.value.trim().length > 0) {
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
            if (e.target.value.trim().includes("@")) {
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