import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
}
export default App;
