import React, { useState } from "react";
import "./SignUp.css";
import "./NavBar.js";
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
    <div>
      <img src="/images/header_bkg.jpg" alt="header" />
      <NavBar />
      <div className="SignUp">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </label>
          <label>
            Pravara : Rushi
            <input
              type="text"
              value={pravara}
              onChange={(e) => setPravara(e.target.value)}
              required
            />
          </label>
          <label>
            Pravara : Gothram
            <input
              type="text"
              value={gotra}
              onChange={(e) => setGotra(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Name of the Pathasala:
            <input
              type="text"
              value={pathasalaname}
              onChange={(e) => setPathasalaname(e.target.value)}
              required
            />
          </label>
          <label>
            Location Of the Pathasala:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <label>
            Scope of Education:
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
            Upload your Certificate to:
            <input
              type="file"
              onChange={(e) => setCerti}
              accept="image/*, application/pdf, .doc, .docx"
            />
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
