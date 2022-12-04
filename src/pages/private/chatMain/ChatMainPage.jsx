import React from "react";
import HeaderChat from "../../../components/chat/HeaderChat";
import { Star } from "@mui/icons-material";

export default function ChatMainPage() {
    return (
        <>
            <HeaderChat icon={<Star />} title="Geral" />
        </>
    );
}
