import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import { AdminLayout, ClientLayout, ErrorLayout } from "../layouts";
import { Error404 } from "../pages/Error";

const routes = [
  ...routesAdmin,
  ...routesClient,
  // {
  //   path: "*",
  //   layout: ErrorLayout,
  //   page: Error404,
  // },
];

export default routes;