import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../redux/action";
import { Navigate } from "react-router-dom";
const SignUp = () => {
  //pour chaque input un state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //
  const { loading, users } = useSelector((state) => state);
  //
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      email,
      password,
    };
    dispatch(RegisterUser(newUser));
  };
  return (
    <div>
      <Form>
        {loading ? 
          <h1> loading ....</h1>
        : users ? 
          <Navigate to="/login" />
        : 
          <>
            <Form.Group className="mb-3">
              <Form.Label>fullName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>
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

export default SignUp;
