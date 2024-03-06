import { useState } from "react";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import Dashboard from "./components/Task/Dashboard";

function App() {
  return (
    <div>
      {/* <SignUp />
      <SignIn /> */}
      <Dashboard />
    </div>
  );
}

export default App;
