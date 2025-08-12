import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ListBolig from "./pages/ListBolig";
import ListMaeglere from "./pages/ListMaeglere";
import FavoriteHomes from "./pages/FavoriteHomes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'list-homes',
                element: <ListBolig />
            },
            {
                path: 'list-maeglere',
                element: <ListMaeglere />
            },
            {
                path: 'favorite-homes',
                element: <FavoriteHomes />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },

            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);
export default router;