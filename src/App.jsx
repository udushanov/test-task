import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about-me",
    element: <div>about</div>,
  },
  {
    path: "/user-details",
    element: <div>details</div>,
  },
]);

function App() {
  return (
    <>
      <Button>Hello</Button>
      <RouterProvider router={router} />
    </>
  );
}

export default App
