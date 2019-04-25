import allRoutesFn from "./config";
import { AddComments, Users, Table, Progress } from "./asyn-lazy";


const routes = [
    {
        path: "/add-comments",
        exact: true,
        component: AddComments
    },

    {
        path: "/users",
        exact: true,
        component: Users
    },
    {
        path: "/table",
        component: Table
    },
    {
        path: "/progress",
        component: Progress
    }
];

export { routes, allRoutesFn };