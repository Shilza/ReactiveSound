import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import InfiniteScroll from 'react-infinite-scroller';
import {Loader} from "../organisms/Loader";

export const withPagination = WrappedComponent => {
    const Paginator = ({fetchNext, hasMore, ...props}) => (
        <InfiniteScroll
            pageStart={0}
            loadMore={fetchNext}
            hasMore={hasMore}
            loader={<Loader key='loader'/>}
        >
            <WrappedComponent {...props} />
        </InfiniteScroll>
    );

    hoistNonReactStatics(Paginator, WrappedComponent);

    Paginator.displayName = `Paginator(${getDisplayName(
        WrappedComponent
    )})`;

    return Paginator;
};

function getDisplayName(WrappedComponent) {
    return (
        WrappedComponent.displayName || WrappedComponent.name || "Paginator"
    );
}
