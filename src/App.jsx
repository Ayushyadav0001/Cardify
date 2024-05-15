import { useState } from "react";
import LandingPage from "./Components/Landingpage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputDetails from "./Components/DetailsInput/InputDetails";
import VisitingCard from "./Components/Visitingcard/VisitingCard";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [jobtitle, setJobtitle] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route
            path="/details"
            element={
              <InputDetails
                setName={setName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPhone={setPhone}
                setAddress={setAddress}
                setCompany={setCompany}
                setJobtitle={setJobtitle}
              />
            }
          ></Route>
          <Route
            path="/card"
            element={
              <VisitingCard
                name={name}
                lastname={lastname}
                email={email}
                phone={phone}
                address={address}
                company={company}
                jobtitle={jobtitle}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
