import * as React from "react";
import hoistNonReactStatics from 'hoist-non-react-statics';
import {getDisplayName} from "../../utils";
import {Error} from "../Error";

export const withError = WrappedComponent => {
    const ErrorWrapper = ({error = false, ...props}) => (
        <>
            {
                error ? <Error/> :
                    <WrappedComponent {...props} />
            }
        </>
    );

    hoistNonReactStatics(ErrorWrapper, WrappedComponent);

    ErrorWrapper.displayName = `withError(${getDisplayName(
        WrappedComponent, "Error"
    )})`;

    return ErrorWrapper;
};

