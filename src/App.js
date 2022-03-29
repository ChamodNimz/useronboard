import logo from "./logo.svg";
import "./App.css";
import ParentForm from "./main/parentForm";
import ContactDetailsForm from "./components/contactDetailsForm";
import InvestmentPlansForm from "./components/investmentPlansForm";
import InvestmentPrefForm from "./components/investmentPrefForm";
import {BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="grid-container">
          <Routes>
            <Route path="/contactDetails" element={<ContactDetailsForm/>} exact />
            <Route path="/investmentPlans" element={<InvestmentPlansForm/>} exact />
            <Route path="/investmentPref" element={<InvestmentPrefForm/>} exact />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
