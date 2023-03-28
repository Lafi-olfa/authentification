import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authUser } from "../redux/action";

const ProfileUser = () => {
  const dispatch = useDispatch();
  const { users, isAuth } = useSelector((state) => state);
  useEffect(() => {
    dispatch(authUser());
  }, []);
  return (
    <div>{!isAuth ? <Navigate to="/login"/> : <div>Welcome {users.email}</div>}</div>
  );
};

export default ProfileUser;
