import { Outlet } from "react-router-dom";
import NavBar from "./components/Common/NavBar";
import Dashboard from "./components/Task/Dashboard";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
