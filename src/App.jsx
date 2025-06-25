import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./global.css";
import Navbar from "./Pages/Components/Navbar";
import Footer from "./Pages/Components/Footer";
import Home from "./Pages/Home/Home";
import Timeline from "./Pages/AboutUs/Timeline";
import CorePath from "./Pages/AboutUs/CoreValues";
import Leadership from "./Pages/AboutUs/Leadership";
import NewsPage from "./Pages/AboutUs/NewsPage";
import NewsDetails from "./Pages/AboutUs/NewsDetails";
import CsrPage from "./Pages/Social/CsrPage";
import CsrDetails from "./Pages/Social/CsrDetails";
import PeoplePage from "./Pages/Social/PeoplePage";
import PeopleDetails from "./Pages/Social/PeopleDetails";
import SustainabilityPage from "./Pages/Social/SustainabilityPage";
import SustainDetails from "./Pages/Social/SustainabilityDetails";
import HealthTech from "./Pages/ProductsServices/HealthTech";
import WiringDevices from "./Pages/ProductsServices/WiringDevices";
import ProtectionSwitchgear from "./Pages/ProductsServices/ProtectionSwitchgear";
import EVChargers from "./Pages/ProductsServices/EVChargers";
import ElectricalPowerPanel from "./Pages/ProductsServices/ElectricalPowerPanel";
import ContractManufacturing from "./Pages/ProductsServices/ContractManufacturing";
import ScrollToTop from "./Pages/Components/ScrollToTop";
import AwardsPage from "./Pages/AboutUs/AwardsPage";
import Careers from "./Pages/AboutUs/Careers";
import Contact from "./Pages/AboutUs/Contact";
import WhistleBlower from "./Pages/AboutUs/WhistleBlower";
import InvestorRelations from "./Pages/Investor/InvestorRelations";
import PrivacyPolicy from "./Pages/Components/PrivacyPolicy";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Navbar />
        <ScrollToTop />
        <div className="homeMain">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/History" element={<Timeline />} />
            <Route path="/CorePath" element={<CorePath />} />
            <Route path="/LeadershipTeam" element={<Leadership />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

            <Route path="InvestorRelations" element={<InvestorRelations />} />

            <Route path="/News" element={<NewsPage />} />
            <Route path="/News/:id" element={<NewsDetails />} />
            <Route path="/CSR" element={<CsrPage />} />
            <Route path="/CSR/:id" element={<CsrDetails />} />
            <Route path="/Events" element={<PeoplePage />} />
            <Route path="/Events/:id" element={<PeopleDetails />} />
            <Route path="/Sustainability" element={<SustainabilityPage />} />
            <Route path="/Sustainability/:id" element={<SustainDetails />} />
            <Route path="/Awards" element={<AwardsPage />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/ContactUs" element={<Contact />} />
            <Route path="/WhistleBlower" element={<WhistleBlower />} />

            <Route path="/HealthTech" element={<HealthTech />} />
            <Route path="/WiringDevices" element={<WiringDevices />} />
            <Route
              path="/ProtectionSwitchgear"
              element={<ProtectionSwitchgear />}
            />
            <Route path="/EVChargers" element={<EVChargers />} />
            <Route
              path="/ElectricalPowerPanels"
              element={<ElectricalPowerPanel />}
            />
            <Route
              path="/ContractManufacturing"
              element={<ContractManufacturing />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
