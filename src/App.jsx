import { Outlet } from "react-router-dom";
import Dashboard from "./components/Task/Dashboard";

function App() {
  return (
    <div>
      Hello
      <Outlet />
    </div>
  );
}

export default App;
