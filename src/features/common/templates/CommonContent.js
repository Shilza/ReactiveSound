import {Main} from "../../../ui/templates";
import React from "react";
import {Header} from "../organisms";

export const CommonContent = ({ children }) => (
    <Main header={<Header/>}>
        {children}
    </Main>
);