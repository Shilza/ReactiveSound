import React from "react";
import {CommonContent} from "../../common/templates";
import {SubHeader} from "../../favorites/organisms";

export const User = ({match: {params}}) => (
    <CommonContent>
        <SubHeader location={params.id}/>
    </CommonContent>
);