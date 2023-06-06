import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../State/AuthContext";

export const PrivatePage = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};
