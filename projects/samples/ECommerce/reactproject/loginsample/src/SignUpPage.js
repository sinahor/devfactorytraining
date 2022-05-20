import { useState } from "react";

function SignUpPage() {
  const [usertype, setUserType] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [countryname, setCountryName] = useState("");
  const [statename, setStateName] = useState("");

  return (
    <div>
      <div class="container">
        <div class="innerdiv">
          <div class="heading1">
            <h1>Add an address so you can get paid</h1>
          </div>
          <div class="heading2">
            <h1>This will be used as default business address</h1>
          </div>
          <div class="heading3">
            <h1>You can always change this later</h1>
          </div>
          <div class="formelement1">
            <label>Country/region</label>
            <select id="country" name="country">
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="China">China</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Srilanka">SriLanka</option>
            </select>
          </div>

          <div class="formelement2">
            <div class="box">
              <label>FirstName</label>
              <input type="Text" placeholder="FirstName" />
            </div>
            <div class="box1">
              <label>LastName</label>
              <input type="Text" placeholder="LastName" />
            </div>
          </div>
          <div class="formelement3">
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
          <div class="formelement3">
            <label>Apartment,suite</label>
            <input type="text" placeholder="Apartment" />
          </div>
          <div class="formelement4">
            <div class="box2">
              <label>City</label>
              <input type="text" placeholder="city" />
            </div>
            <div class="box3">
              <label>State</label>
              <select id="state" name="state">
                <option value="Kerala">Kerala</option>
                <option value="Tamilnadu">TamilNadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Orissa">Orissa</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
            </div>
            <div class="box4">
              <label>Pincode</label>
              <input type="text" placeholder="pincode" />
            </div>
          </div>
          <div class="formelement5">
            <div class="box">
              <label>Phone</label>
              <input type="number" placeholder="phoneno" />
            </div>
            <div class="box1">
              <label>Business website(optional)</label>
              <input type="url" placeholder="website" />
            </div>
          </div>
          <div class="formelement6">
            <input type="checkbox" />
            <label>This is a registered business</label>{" "}
          </div>
        </div>

        <div class="footer1">
          <button class="btnleft">Back</button>
          <button class="btnright">Enter my store</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
