import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
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
        <span></span>
        <h6 style={{ marginTop: 20 }}>
          Already have an account?
          <Link to={"/"}> Log In</Link>
        </h6>
      </div>
    );
  }
}
