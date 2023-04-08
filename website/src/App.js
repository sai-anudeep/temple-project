import React, { useState } from "react";
import "./SignUp.css";
// import "./App.scss";
import "./NavBar.js";
import bkg from './bkg.jpg';
import headerpic from './headerpic.jpg';
import displaypic from './displaypic.png';
import NavBar from "./NavBar.js";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pravara, setPravara] = useState("");
  const [email, setEmail] = useState("");
  const [pathasalaname, setPathasalaname] = useState("");
  const [location, setLocation] = useState("");
  const [scope, setScope] = useState("");
  const [setCerti] = useState("");
  const [gotra, setGotra] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="MainPage">
      <header>
        <img src={displaypic} className="HeaderPic" alt="header" />
        <NavBar />
      </header>

      {/* <div class="form_wrapper">
        {/* <div class="form_container">
          <div class="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form onSubmit={handleSubmit}>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                  <input type="password" name="password" placeholder="Password" required />
                </div>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                  <input type="password" name="password" placeholder="Re-type Password" required />
                </div>
                <div class="row clearfix">
                  <div class="col_half">
                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                      <input type="text" name="name" placeholder="First Name" />
                    </div>
                  </div>
                  <div class="col_half">
                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                      <input type="text" name="name" placeholder="Last Name" required />
                    </div>
                  </div>
                </div>
                  <div class="input_field select_option">
                    <select>
                      <option>Select a country</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                    <div class="select_arrow"></div>
                  </div>
                  <div class="input_field checkbox_option">
                    <input type="checkbox" id="cb1">
                      <label for="cb1">I agree with terms and conditions</label>
                    </input>
                  </div>
                  <div class="input_field checkbox_option">
                    <input type="checkbox" id="cb2">
                      <label for="cb2">I want to receive the newsletter</label>
                    </input>
                  </div>
                  <input class="button" type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div> */}

      <div className="SignUp">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span className="FieldHeader">First Name:</span>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Last Name:</span>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Pravara : Rushi</span>
            <input
              type="text"
              value={pravara}
              onChange={(e) => setPravara(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Pravara : Gothram</span>
            <input
              type="text"
              value={gotra}
              onChange={(e) => setGotra(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Name of the Pathasala:</span>
            <input
              type="text"
              value={pathasalaname}
              onChange={(e) => setPathasalaname(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Location Of the Pathasala:</span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Scope of Education:</span>
            <select value={scope} onChange={(e) => setScope} required>
              <option value="">Select a location</option>
              <option value="Veda">Krishna Yajur Vedam</option>
              <option value="Veda">Shukla Yajur Vedam</option>
              <option value="Veda">Rig Vedam</option>
              <option value="Veda">Sama Vedam</option>
              <option value="Veda">Atharvana Vedam</option>
              <option value="SaivaAgama">SaivaAgama</option>
              <option value="VaishnavaAgama">VaishnavaAgama</option>
              <option value="Sastra">Sastra</option>
              <option value="Smartha">Smartha</option>
              <option value="Prabandha">Prabandha</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
          <span className="FieldHeader">Upload your Certificate to:</span>
            <input
              type="file"
              onChange={(e) => setCerti}
              accept="image/*, application/pdf, .doc, .docx"
            />
          </label>
          <span className="Submit">
          <button type="submit">Submit</button>
          </span>
        </form>
      </div> 
    </div>
  );
}

export default SignUp;
