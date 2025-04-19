import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Favorites from "../pages/Favorites";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/favorites',
            element: <Favorites />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/phone-details',
            element: <PhoneDetails />
        }
      ]
    },
  ]);
