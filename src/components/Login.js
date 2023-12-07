import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
        <h3>Log In Page</h3>
      <div className="mb-4 WidthStyle">
        <input
          type="email"
          className="form-control inputStyle"
          placeholder="Enter Email"
        />
      </div>
      <div className="mb-4 WidthStyle">
        <input
          type="password"
          className="form-control inputStyle"
          aria-describedby="passwordHelpBlock"
          placeholder="Enter Password"
        />
      </div>
      <button type="button" className="btn btn-primary button">
        Login
      </button>
      <h6 style={{ marginTop: 20 }}>
        Don't have an account?
        <Link to={"/signup"}> Sign Up</Link>
      </h6>
    </div>
  );
}
