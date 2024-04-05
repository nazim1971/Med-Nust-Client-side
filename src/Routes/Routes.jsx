import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
  ]);

export default routes;