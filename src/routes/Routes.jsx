import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffee from "../pages/Coffee";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayouts></MainLayouts>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          children: []
        },
        {
          path: '/coffees',
          element: <Coffee></Coffee>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        }
      ]
    }
  ])
export default routes;