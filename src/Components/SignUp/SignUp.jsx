"use client";

import { useState } from "react";

import Button from "../UiElements/Button";
import { isEmail, isEmpty, isPast, minLength } from "@/helpers/validators";
import Input from "../UiElements/Input";

import classes from "./SignUp.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [birthDate, setBirthDate] = useState("")
  const [birthDateError, setBirthDateError] = useState(false)

  const handleSignUp= (e) => {
    e.preventDefault();

    console.log(name, email, password, birthDate);
    if (isEmpty(name) || !isEmail(email) || !minLength(password)
       || !isPast(birthDate)) {
      if (isEmpty(name)) {
        setNameError(true);
      }

      if (!isEmail(email)) {
        setEmailError(true);
      }
      if (!minLength(password , 8)){
        setPasswordError(true)
      }
      
      if(isPast(!birthDate)){
        setBirthDateError(true)
      }
      return;
    }

    setName("");
    setEmail("");
    setPassword("");
    setBirthDate("");
  };

  return (
    <form onSubmit={handleSignUp} className={classes["sign-up-form"]}>
      <h3>Sign up</h3>

      <Input
        id="name"
        type="text"
        label="Name"
        placeholder="Write a valid name!"
        value={name}
        error={nameError}
        errorText="Please provide a valid name!"
        onChange={(e) => {
          const { value } = e.target;
          setName(value);
          if (!isEmpty(value)) setNameError(false);
        }}
      />

      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="Write a valid email"
        value={email}
        error={emailError}
        errorText="Please provide a valid email!"
        onChange={(e) => {
          const { value } = e.target;
          setEmail(value);
          if (isEmail(value)) setEmailError(false);
        }}
      />

      <Input
        id="password"
        type="Password"
        label="password"
        placeholder="Write your password "
        value={password}
        error={passwordError}
        errorText="Subject should be at least 8 chars!"
        onChange={(e) => {
          const { value } = e.target;
          setPassword(value);
          if (minLength(value)) setPasswordError(false);
        }}
      />

      <Input
        id="password confirm"
        type="password"
        label="Password confirm"
        placeholder="Write your password again"
        value={password}
        error={passwordError}
        errorText="Subject should be at least 8 chars!"
        onChange={(e) => {
          const { value } = e.target;
          setPassword(value);
          if (minLength(value)) setPasswordError(false);
        }}
      />
      <Input
        id="birth date"
        type="date"
        label="Birth date"
        placeholder="Write your birth date "
        value={birthDate}
        error={birthDateError}
        errorText="birth date must be in the past!"
        onChange={(e) => {
          const { value } = e.target;
          setBirthDate(value);
          if (isPast(value)) setBirthDateError(false);
        }}
      />

      <Button className={classes["btn"]}>Sign up</Button>
    </form>
  );
}