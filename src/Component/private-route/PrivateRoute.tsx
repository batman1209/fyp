import { Route, Redirect } from "react-router-dom";
import fakeAuth from "./fake-auth";
import React, { Component } from 'react';
const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component auth="test" />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);

export default PrivateRoute;

