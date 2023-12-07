import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function Login() {
  return (
    <div>
      <div className="mb-4 WidthStyle">
        <input
          type="email"
          className="form-control inputStyle"
          placeholder="Type Your Email"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          className="form-control inputStyle"
          aria-describedby="passwordHelpBlock"
          placeholder="Type Password"
        />
      </div>
      <button type="button" className="btn btn-primary">
            Login
      </button>
    </div>
  );
}
