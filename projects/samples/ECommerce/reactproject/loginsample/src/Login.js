import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./appstyle.css";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleClick(e) {
      e.preventDefault();
    let jsn = { "username": username, "password": password };
    let url = "http://localhost:8000/uservalidation";
    const header = {};
    // console.log('hi');
    axios
      .post(url, jsn, header)
      .then((res) => {
        console.log(res.data);
        console.log("hello");
      })
      .catch();
  }

  function linkClick(e) {
    e.preventDefault();
    navigate("/SignUpPage");
  }

  return (
    <div>
      <div>
        <label>UserName</label>{" "}
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.password);
          }}
        />
      </div>
      <div>
        <button onClick={handleClick()}>Click</button>
      </div>
      <div>
        <button onClick={linkClick()}>NewUser?</button>
      </div>
    </div>
  );
}

export default Login;
