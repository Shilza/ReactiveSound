import * as React from "react";
import hoistNonReactStatics from 'hoist-non-react-statics';
import {Loader} from "../Loader";
import {getDisplayName} from "../../utils";
import {withError} from "../withError";

export const withLoader = WrappedComponent => {
    const LoadingScreen = ({loading, ...props}) => (
        <>
            {
                loading ? <Loader/> :
                    <WrappedComponent {...props} />
            }
        </>
    );

    hoistNonReactStatics(LoadingScreen, WrappedComponent);

    LoadingScreen.displayName = `WithLoader(${getDisplayName(
        WrappedComponent, "Loader"
    )})`;

    return withError(LoadingScreen);
};

