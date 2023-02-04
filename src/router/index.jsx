import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Algo from "../pages/algo";
import Home from "../pages/Home";
import Start from "../pages/Start";

export const router = createBrowserRouter([
    {
        path: '/geography',
        element: <RootLayout/>,
        errorElement: <h1>NO HAY RUTA</h1>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/geography/algo',
                element: <Algo />,
            }

        ]
    },
    {
        path: '/',
        element: <Start />
    }
]);


/* export const router = createBrowserRouter([
    {
        path: '/geography',
        element: <RootLayout/>,
        errorElement: <h1>NO HAY RUTA</h1>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/geography/algo',
                element: <Algo />,
            }

        ]
    },
    {
        path: '/',
        element: <Start />
    }
]); */