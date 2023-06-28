import { createBrowserRouter } from "react-router-dom"; 
import HomeLayout from "../components/Layout/HomeLayout";
import HomeScreen from "../pages/HomeScreen";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen/>
      },
    ],
  },
]);
