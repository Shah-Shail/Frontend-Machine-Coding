import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routes";

import { ThemeProvider } from "./theme-context";
import Navbar from "./components/Navbar";

function DarkLigthMode() {
  return (
    <ThemeProvider>
      <RouterProvider router={createBrowserRouter(routesConfig)} />
    </ThemeProvider>
  );
}

export default DarkLigthMode;
