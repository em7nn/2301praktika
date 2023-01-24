
import {createBrowserRouter} from "react-router-dom";
import AddPage from "../Pages/AddPage";
import HomePage from "../Pages/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/addpage",
      element: <AddPage/>,
    },
    {
      path: "/cards/:id",
      element: <AddPage/>,
    }
  ]);

  export { router }