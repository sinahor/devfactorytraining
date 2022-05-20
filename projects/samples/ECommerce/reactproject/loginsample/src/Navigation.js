
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Login";
import SignUpPage from "./SignUpPage";


function Navigation(){
  return(
<div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
         
      </Route>
      <Route path="/" element={<SignUpPage />}>
         
      </Route>
    </Routes>
  </BrowserRouter>

  </div>
  );
 }
  
export default Navigation;