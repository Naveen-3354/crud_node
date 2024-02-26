import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return <div className="App"><RouterProvider router={router} /></div>;
}

export default App;
