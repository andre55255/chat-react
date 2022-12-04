import React from "react";
import { Routes, Route } from "react-router-dom";
import { pathRoutes } from "../helpers/constants";

import LoginPage from "../pages/public/Login/LoginPage";
import UserCreatePage from "../pages/public/UserCreate/UserCreatePage";

import ChatTemplate from "../components/chat/ChatTemplate";
import ChatMainPage from "../pages/private/chatMain/ChatMainPage";

const Router = (props) => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path={pathRoutes.homeLogin} element={<LoginPage />} />
            <Route path={pathRoutes.createUser} element={<UserCreatePage />} />

            {/* Private routes */}
            <Route path={pathRoutes.chatMain} element={<ChatTemplate />}>
                <Route index element={<ChatMainPage />} />
            </Route>

            {/* Redirect not found */}
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
};

export default Router;
