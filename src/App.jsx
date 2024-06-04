import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import "./App.css";
import All from "./components/All";
import Fullstackdev from "./components/Fullstackdev";
import Datascience from "./components/Datascience";
import Cybersecurity from "./components/Cybersecurity";
import Career from "./components/Career";
import './components/Components.css';

const AppLayout = ({ element }) => {
  return (
    <div>
      <Navbar />
      {element} 
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout element={<All />} />
  },
  {
    path: "/fullstackdev",
    element: <AppLayout element={<Fullstackdev />} />
  },
  {
    path: "/datascience",
    element: <AppLayout element={<Datascience />} />
  },
  {
    path: "/cybersecurity",
    element: <AppLayout element={<Cybersecurity />} />
  },
  {
    path: "/career",
    element: <AppLayout element={<Career />} />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
