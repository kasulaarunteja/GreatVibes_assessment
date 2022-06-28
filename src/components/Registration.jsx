

import React from 'react';
import { useState } from 'react';
import "./Registration.css"



export const Registration = () => {

  const [registr, setRegistr] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: "",
  });

  const handleChange = (e) => {
    //  console.log(e.target.value);

    const { id, value } = e.target

    setRegistr({
      ...registr,
      [id]: value,
    })
  };

  const submitData = (e) => {
    // e.preventDefault();
    console.log(registr)
    setRegistr({
      name: "",
      email: "",
      mobile: "",
      country: "",
      city: "",
      state: "",
      message: "",
    })
    alert("user created sucessfully");

  }

  return (
    <div className="register">

      <form onSubmit={submitData}>
        <h1> Registration </h1>
        <label className="form-label">Name</label>
        <input type="text"
          id="name"
          onChange={handleChange}
          className="name"
          placeholder="name"
          required />
        <br />

        <label className="form-label">Email</label>
        <input type="email"
          id="email"
          onChange={handleChange}
          className="email"
          placeholder="email"
          required />
        <br />

        <label className="form-label">Mobile</label>
        <input type="tel"
          id="mobile"
          onChange={handleChange}
          className="mobile"
          placeholder="mobile"
          required />
        <br />

        <label className="form-label">Country</label>
        <input type="text"
          id="country"
          onChange={handleChange}
          className="country"
          placeholder="country"
          required />
        <br />

        <label className="form-label">City</label>
        <input type="text"
          id="city"
          onChange={handleChange}
          className="city"
          placeholder="city"
          required />
        <br />

        <label className="form-label">State</label>
        <input type="text"
          id="state"
          onChange={handleChange}
          className="state"
          placeholder="state"
          required />
        <br />

        <label className="form-label">Message</label>
        <input type="text"
          id="message"
          onChange={handleChange}
          className="message"
          placeholder="message"
          required />
        <br />

        <input className="submitBtn" type="submit" 
        />
      </form>
    </div>
  );
}



