import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import("./style.css");

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  function handleClick(e) {
    // console.log('login working')
    /*e.preventDefault();
    let url="a";
    let data={"username":username,"password":password};
    let header=('');
    console.log("request=>"+JSON.stringify(data));
    console.log("url=>"+url);
    axios.post(url,data,header).then(()=>{}).catch();*/
    e.preventDefault();
    let url = "http://localhost:8000/uservalidate";
    let data = { username: username, password: password };
    let headr = {};
    console.log("request is" + JSON.stringify(data));
    console.log("url is" + url);
    axios
      .post(url, data, headr)
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          alert('login successful');
          Navigate("/Dashboard");
          console.log("Login successful");
        } else {
          alert('Incorrect username or password');
          console.log("Either you are not a registered user or Incorrect entry for username/password");}
      })
      .catch();
  }

  function handleClick2(e) {
    e.preventDefault();
    Navigate("/SignUpPage");
    console.log("New user click working");
  }
  return (
    <div>
      <div className="maincontainer">
        <div className="subcontainer">
          <p>LOGINPAGE</p>
          <div className="username">
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <p className="newuser" onClick={(e) => handleClick2(e)}>
              NewUser?
            </p>
            <button onClick={(e) => handleClick(e)} className="login">
              Login
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
