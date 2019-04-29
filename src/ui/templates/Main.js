import React from "react";

export const Main = ({ header, children }) => (
    <div>
        {header}
        <main>{children}</main>
    </div>
);