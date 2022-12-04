import React from "react";
import { createRoot } from "react-dom/client";
import App from "./container/App";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";

import { UserInfoProvider } from "./contexts/userInfoContext";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = createRoot(document.getElementById("root"));
root.render(
    <UserInfoProvider>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </UserInfoProvider>
);
