import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "../layouts/Main-layout";
import Overview from "../pages/Overvie.page";
import Travellers from "../pages/Travellers.page";
import EventPlanners from "../pages/EventPlanners.page";
import Farmers from "../pages/Farmers.page";
import NotFound from "../pages/NotFound.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> <Outlet /> </MainLayout>,
    children: [
      {
        path: "",
        element:<Overview />,
      },
      {
        path: "travellers",
        element:<Travellers />,
      },
      {
        path: "event-planners",
        element:<EventPlanners />,
      },
      {
        path: "farmers",
        element:<Farmers />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
