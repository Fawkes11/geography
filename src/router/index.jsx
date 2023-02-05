import { createBrowserRouter } from "react-router-dom";
import CityView from "../components/laptopViews/CityView";
import GeneralInformation from "../components/laptopViews/GeneralInformation";
import MajorCities from "../components/laptopViews/MajorCities";
import NationalInsignia from "../components/laptopViews/NationalInsignia";
import RootLayout from "../layout/RootLayout";
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
                path:'/geography/informacion-general',
                element: <GeneralInformation />,
            },
            {
                path:'/geography/insignias-nacionales',
                element: <NationalInsignia />,
            },
            {
                path:'/geography/ciudades-principales',
                element: <MajorCities />
            }
            
        ]
    },
    {
        path: '/geography/ciudades-principales/barcelona',
        element: <CityView/>
    },
    {
        path: '/',
        element: <Start />
    }
]);

