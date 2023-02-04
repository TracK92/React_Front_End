import React from "react";

import "./form.css";

const Form = () => {
  return (
    <form>
      {/* phone number */}
      <label htmlFor="phone_number">Enter Phone Number</label>
      <input
        type="tel"
        id="phone_number"
        name="phone_number"
        placeholder="123-45-678"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        required
      />
      <p className="format">Format: 123-45-678</p>
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
        required
      />
      {/* submit button */}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
