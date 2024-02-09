import Home from "./Home";
import Error from "./Error";
import Layout from "../src/layout/Layout";

export const config = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: ,
        // action: ,
        errorElement: <Error />,
      },
      {
        path: "login",
        element: <h1>Login</h1>,
        // loader: ,
        // action: ,
        errorElement: <Error />,
      },
      {
        path: "dashboard",
        element: <h1>Dashboard</h1>,
        // loader: ,
        // action: ,
        errorElement: <Error />,
      },
      {
        path: "profile",
        element: <h1>Profile</h1>,
        // loader: ,
        // action: ,
        errorElement: <Error />,
      },
    ],
  },
];
