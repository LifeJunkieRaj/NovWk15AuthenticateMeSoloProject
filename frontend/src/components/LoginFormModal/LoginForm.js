import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'
import SignupFormModal from "../SignupFormModal";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        
      }
    );
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      
      <h1>Login</h1>
      <p>Don't have an account yet? <SignupFormModal /> </p>
      <hr></hr>
      <label className="userName block">
        Username or Email
      </label>
      <input className="block form-input"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      <label className="password block"> 
        Password
      </label>
      <input className="block form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      <button className="form-submit" type="submit">Log In</button>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    </form>
  );
}

export default LoginForm;