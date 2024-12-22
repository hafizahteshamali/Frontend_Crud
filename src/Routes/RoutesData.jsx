import AddUser from "../pages/AddUser";
import Error from "../pages/Error";
import GetUser from "../pages/GetUser";

export const RoutesData = [
    {
        path: '/',
        element: <GetUser />,
    },
    {
        path: '/adduser',
        element: <AddUser />,
    },
    {
        path: '*',
        element: <Error />,
    }
]