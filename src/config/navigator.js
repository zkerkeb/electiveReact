import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from '../screens/about';
import France from '../screens/france';
import Home from '../screens/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/about/:id",
    element: <France />
  },
]);


const Navigator = () => {
    return (
      <RouterProvider router={router} />
    );
};

export default Navigator;