import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
