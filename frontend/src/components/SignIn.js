import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginUser } from "../redux/action";
const SignIn = () => {
  //pour chaque input un state
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //
  //
  const { loading } = useSelector((state) => state);

  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    const user = {
   
      email,
      password,
    };
    dispatch(LoginUser(user))
  };
  return (
    <div>
   
      <Form>
      {loading ? 
          <h1> loading ....</h1>
        :  localStorage.getItem("token") ?
          <Navigate to="/profile" />
        : 

   <>
       <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handelSubmit}>
          Submit
        </Button>
        </>
}
      </Form>
    </div>
  );
};

export default SignIn;
