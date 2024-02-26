import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Entry from "./pages/Entry";
import Home from "./pages/Home";
import Popup from "./pages/popup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path:"/register",
      element:<Entry />
    },
    {
      path:"/home",
      element:<Home />
    }
  ]);

  return <div className="App">
    {/* <RouterProvider router={router} /> */}
    <Popup />
    </div>;
}

export default App;
