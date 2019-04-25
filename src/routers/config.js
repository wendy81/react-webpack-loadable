import React from 'react';
import { Route } from "react-router-dom";


// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
    return (

        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                // route.routes is subroutes, now it isn't
                <route.component {...props} exact={route.exact} routes={route.routes} />
            )}
        />

    );
}

/**
 * itertor all routes, render Route 
 *  @param routes is all router's config,include path and components
 *  @RouteWithSubRoutes  iterate routes, render <Route />
 */
const allRoutesFn = (routes) => routes.map((route, i) => (
    <RouteWithSubRoutes key={i} {...route} />
))

export default allRoutesFn;