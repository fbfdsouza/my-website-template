import React from "react";
import LogIn from "../pages/LogIn";
import Layout from "./Layout";

const useAuth = () => {
    const user = { loggedIn: true };
    return user && user.loggedIn
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Layout /> : <LogIn />
}

export default ProtectedRoutes;