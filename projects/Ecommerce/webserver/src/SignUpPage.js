import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./newstyle.css";

// function SignUpPage() {
//   const Navigate = useNavigate();
//   const [countryname, setCountryName] = useState("");

//   useEffect(()=>{  },[])

//   function handleClick(e) {
//     e.preventDefault();
//      console.log("return to loginpage");

//   }
//   function handleClick2(e) {
//         // console.log('login working')
//     /*e.preventDefault();
//     let url="a";
//     let data={"username":username,"password":password};
//     let header=('');
//     console.log("request=>"+JSON.stringify(data));
//     console.log("url=>"+url);
//     axios.post(url,data,header).then(()=>{}).catch();*/
//   }

//   return (
//     <div>

//     </div>
//   );
// }
// export default SignUpPage;

function SignUpPage() {
  const Navigate = useNavigate();
  const [countryname, setCountryName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [Apartment, setApartment] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [Website, setWebsite] = useState("");
  const [RegisteredBusiness, setRegisteredBusiness] = useState("");

  useEffect(() => {
    console.log("success");
    // app.post("/countryfetch", (req, res) => {
    //   var sql ="SELECT'"+txtCountryName+"'FROM tblcountry" ;
    //  console.log(sql)
    //    con.query(sql, function (err, result, fields) {
    //      if (err) res.send(err);
    //      res.send(result.data);
    //    });
    //  });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    Navigate("/");
    console.log(e);
    console.log("return to loginpage");
  }
  function handleClick2(e) {
    e.preventDefault();
    let url = "http://localhost:8000/userinsert";
    let data = {};
    let headr = {};
    console.log("request is" + JSON.stringify(data));
    console.log("url is" + url);
    axios
      .post(url, data, headr)
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          alert("login successful");
          Navigate("/Dashboard");
          console.log("Login successful");
        } else {
          alert("Incorrect username or password");
          console.log(
            "Either you are not a registered user or Incorrect entry for username/password"
          );
        }
      })
      .catch();
  }

  return (
    <div>
      <div class="container">
        <div class="outerdiv">
          <div class="heading1">
            <h1>Add an address so you can get paid</h1>
          </div>
          <div class="heading2">
            <h2>This will be used as default business address</h2>
          </div>
          <div class="heading3">
            <h3>You can always change this later</h3>
          </div>
          <div class="innerdiv">
            <div class="formelement">
              <label>Country/region</label>
              <select
                id="country"
                name="country"
                value={countryname}
                onChange={(e) => {
                  setCountryName(e.target.value);
                }}
              >
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="China">China</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Srilanka">SriLanka</option>
              </select>
            </div>
            <div class="outerrow">
              <div className="half">
                <div class="formelement">
                  <label>FirstName</label>
                  <input
                    type="Text"
                    placeholder="FirstName"
                    value={FirstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="halfright">
                {" "}
                <div class="formelement">
                  <label>LastName</label>
                  <input
                    type="Text"
                    placeholder="LastName"
                    value={LastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div class="formelement">
              <label>Address</label>
              <input
                type="text"
                placeholder="Address"
                value={Address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div class="formelement">
              <label>Apartment,Suite</label>
              <input
                type="text"
                placeholder="Apartment"
                value={Apartment}
                onChange={(e) => {
                  setApartment(e.target.value);
                }}
              />
            </div>
            <div class="outerrow">
              <div class="third">
                <div class="box1">
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="City"
                    value={City}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
                <div class="box2">
                  <label>State</label>
                  <select
                    id="state"
                    name="state"
                    value={State}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  >
                    <option value="Kerala">Kerala</option>
                    <option value="Tamilnadu">TamilNadu</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Orissa">Orissa</option>
                    <option value="Maharashtra">Maharashtra</option>
                  </select>
                </div>
                <div class="box3">
                  <label>Pincode</label>
                  <input
                    type="text"
                    placeholder="Pincode"
                    value={Pincode}
                    onChange={(e) => {
                      setPincode(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div class="formelement5">
              <div class="box">
                <label>Phone</label>
                <input
                  type="number"
                  placeholder="Phoneno"
                  value={Phoneno}
                  onChange={(e) => {
                    setPhoneno(e.target.value);
                  }}
                />
              </div>
              <div class="box1">
                <label>Business website</label>
                <input
                  type="url"
                  placeholder="Website"
                  value={Website}
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="formelement6">
              <input
                type="checkbox"
                value={RegisteredBusiness}
                onChange={(e) => {
                  setRegisteredBusiness(e.target.value);
                }}
              />
              <label>This is a registered business</label>{" "}
            </div>
          </div>
        </div>
        <div class="footer1">
          <button class="btnleft" onClick={(e) => handleClick(e)}>
            Back
          </button>
          <button class="btnright" onClick={(e) => handleClick2(e)}>
            Enter my store
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
