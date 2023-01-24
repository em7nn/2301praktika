
import {createBrowserRouter} from "react-router-dom";
import DetailPage from "../Components/HomeComponents/PracticeAreas/DetailPage";
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
      element: <DetailPage/>,
    }
  ]);

  export { router }