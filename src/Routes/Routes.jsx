import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/bookService/:id",
        element: <PrivetRoutes><BookService></BookService></PrivetRoutes>,
        loader: ({ params }) =>
          fetch(`https://car-dorctor-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRoutes>
            <Bookings></Bookings>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

export default router;
