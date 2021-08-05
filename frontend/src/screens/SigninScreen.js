import React from "react";
import { useState } from "react";
//We use { Link } because these are`default export so these are main exports  
import  { Link }  from "react-router-dom";

export default function SigninScreen() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler =(e)  =>{
        //by this function call we prevent the page refreshing 
        e.preventDefault();
        //TODO: sigin action
    }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          >
          </input>
        </div>
        <div>
            <label />
            <button className="primary" type="submit">
                Sign In
            </button>
        </div>

        <div>
            <label />
            <div>
                New Customer?. <Link to="/register">Create your account</Link> 
            </div>
        </div>
        </form>
      </div>
  );
}
