import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/", {
        email,
        password,
      }).then(res=>{
        if(res.data==="exits"){
         history("./home", {state:{id:email}})
        }
        else if(res.data === "notexist"){
          alert("User have not sign up")
        }
      })
      .catch(e=> {
        alert("wrong details")
        console.log(e)
      })
      



    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form action="POST">
        <input
          type="email"
          placeholder="Email"
          name=""
          id=""
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          name=""
          id=""
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/singup">Singup Page</Link>
    </div>
  );
};

export default Login;
