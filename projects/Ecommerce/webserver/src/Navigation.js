import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import Productlist from "./Productlist";
import SignUpPage from "./SignUpPage";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Productlist" element={<Productlist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;
