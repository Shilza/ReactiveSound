import * as React from "react";
import hoistNonReactStatics from 'hoist-non-react-statics';
import {Loader} from "../Loader";

export const withLoader = WrappedComponent => {
    const LoadingScreen = ({loading, ...props}) => {
        return (
            <>
                {
                    loading ? <Loader/> :
                        <WrappedComponent {...props} />
                }
            </>
        )
    };

    hoistNonReactStatics(LoadingScreen, WrappedComponent);

    LoadingScreen.displayName = `WithLoader(${getDisplayName(
        WrappedComponent
    )})`;

    return LoadingScreen;
};

function getDisplayName(WrappedComponent) {
    return (
        WrappedComponent.displayName || WrappedComponent.name || "Loader"
    );
}