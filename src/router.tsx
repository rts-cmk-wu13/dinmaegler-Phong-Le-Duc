import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ListBolig from "./pages/ListBolig";
import ListMaeglere from "./pages/ListMaeglere";
import FavoriteHomes from "./pages/FavoriteHomes";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";

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
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);
export default router;