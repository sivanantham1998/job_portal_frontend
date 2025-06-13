import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard/Dashboard";
import User from "./UserAuthendicate/User";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="userauthendicate" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
