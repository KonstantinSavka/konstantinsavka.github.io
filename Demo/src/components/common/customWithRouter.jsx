import React from "react";
import {useParams} from "react-router-dom";

const customWithRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

export default customWithRouter