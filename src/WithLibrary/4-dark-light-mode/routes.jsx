import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
