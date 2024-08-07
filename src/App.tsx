import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./HomePage/LandingPage";
import GraphRenderPage from "./GraphRenderPage/GraphRenderPage";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/create-graph", element: <GraphRenderPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
