import React from "react";
import { Routes, Route } from "react-router-dom";
import { pathRoutes } from "../helpers/constants";

import LoginPage from "../pages/public/Login/LoginPage";

const Router = (props) => {
    return (
        <Routes>
            <Route path={pathRoutes.homeLogin} element={<LoginPage />} />

            <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
    );
}

export default Router;