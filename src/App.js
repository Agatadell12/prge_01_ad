import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Services from "./components/services/Services";
import Map from "./components/map/Map";
import dasboard from "./components/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/map",
    element: <Map />,
  },
  {
    path: "/services/dashboard",
    element: <dashboard />,
  },
]);

function App() {
  // const imie = "world";

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
