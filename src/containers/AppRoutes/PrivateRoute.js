import React from "react";
import { Outlet, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ ...rest }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (isAuthenticated) return <Outlet />;
    delete rest.component;
    return <Navigate to="/login" />;
};

export default PrivateRoute;
