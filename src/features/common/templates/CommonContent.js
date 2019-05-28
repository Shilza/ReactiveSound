import React from "react";
import {Header, SubHeader} from "../organisms";
import {Main} from "../../../ui/templates";

export const CommonContent = ({section, location, error, loading, children, subHeaderChild}) => (
    <>
        <Header/>
        {
            (section || location) &&
            <SubHeader section={section} location={location}>
                {subHeaderChild}
            </SubHeader>
        }
        <Main
            loading={loading}
            error={error}
        >
            {children}
        </Main>
    </>
);