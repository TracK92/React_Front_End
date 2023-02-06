import React from "react";
import axios from "axios";

import "./form.css";

const Form = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [accessCode, setAccessCode] = React.useState("");

  // fetch data from backend

  const createAccessCode = async (e) => {
    e.preventDefault();
    const post = { phoneNumber: phoneNumber };

    try {
      const res = await axios.post(
        "http://localhost:4000/createNewAccessCode",
        post
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const validateAccessCode = async (e) => {
    e.preventDefault();
    const post = { phoneNumber: phoneNumber, accessCode: accessCode };

    try {
      const res = await axios.post(
        "http://localhost:4000/validateAccessCode",
        post
      );
      console.log(res);

      if (res.data["message"] === "Access code is invalid") {
        alert("Access Code is valid");
      } else if (res.data["message"] === "User doesn't exist.") {
        alert("User doesn't exist.");
      } else if (
        res.data["message"] === "Access code and phone number are required"
      ) {
        alert("Access code and phone number are required");
      } else {
        alert("Success");
        // save phone number to local storage
        localStorage.setItem("phoneNumber", phoneNumber);
        setPhoneNumber("");
        setAccessCode("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="codes_form">
      {/* phone number */}
      <label htmlFor="phone_number">Enter Phone Number</label>
      <input
        type="text"
        id="phone_number"
        name="phone_number"
        placeholder="+1-430-123-4567"
        pattern="^\+1-[0-9]{3}-[0-9]{3}-[0-9]{4}$"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <p className="format">Format: +1-123-456-7890</p>
      <button type="button" onClick={createAccessCode}>
        Create Access Code
      </button>
      {/* access code */}
      <label htmlFor="access_code">Enter Access Code</label>
      <input
        type="password"
        id="access_code"
        name="access_code"
        minLength="6"
        maxLength="6"
        autoComplete="off"
        placeholder="123456"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
        required
      />
      {/* submit button */}
      <button type="button" onClick={validateAccessCode}>
        Validate Access Code
      </button>
    </form>
  );
};

export default Form;
