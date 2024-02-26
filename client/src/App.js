import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Entry from "./pages/Entry";
import Home from "./pages/Home";

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
    <RouterProvider router={router} />
    </div>;
}

export default App;
