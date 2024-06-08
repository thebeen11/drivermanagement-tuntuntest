import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Driver from "../pages/Driver";
import Beranda from "../pages/Beranda";
import PickUp from "../pages/Pickup";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          index: true,
          element: <Beranda/>
        },
        {
          path: '/driver-management',
          element: <Driver/>
        },
        {
          path: '/pickup',
          element: <PickUp/>
        }
      ]
    },
  ]);