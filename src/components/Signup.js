import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function SignUp() {
  return (
    <div>
        <h3>Sign Up Page</h3>
      <div className="mb-2 WidthStyle">
        <input
          type="text"
          className="form-control inputStyle"
          placeholder="Enter Full Name"
        />
      </div>
      <div className="mb-2 WidthStyle">
        <input
          type="email"
          className="form-control inputStyle"
          placeholder="Enter Email Address"
        />
      </div>
      <div className="mb-2 WidthStyle">
        <input
          type="password"
          className="form-control inputStyle"
          placeholder="Enter Password"
        />
      </div>
      <div className="mb-4 WidthStyle">
        <input
          type="password"
          className="form-control inputStyle"
          placeholder="Confirm your password"
        />
      </div>
      <button type="button" className="btn btn-primary button">
        Sign Up
      </button>
    </div>
  );
}
