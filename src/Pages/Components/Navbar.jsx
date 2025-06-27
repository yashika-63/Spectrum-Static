import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/ComponentsCSS/Navbar.css";
import { FaAngleRight, FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const menuData = {
  "products & services": {
    HealthTech: [
      {
        label: "MRI Machine",
        link: "/HealthTech",
      },
    ],
    "Wiring Devices": [
      { label: "Switches", link: "/WiringDevices" },
      { label: "Outlets", link: "/WiringDevices" },
      { label: "Fan Regulators", link: "/WiringDevices" },
      { label: "Dimmers", link: "/WiringDevices" },
      { label: "Plates", link: "/WiringDevices" },
    ],
    "Low Voltage Switchgear": [
      { label: "MCB", link: "/ProtectionSwitchgear" },
      { label: "Isolators", link: "/ProtectionSwitchgear" },
      { label: "RCCB", link: "/ProtectionSwitchgear" },
      { label: "RCBO", link: "/ProtectionSwitchgear" },
      { label: "Distribution Boards", link: "/ProtectionSwitchgear" },
      { label: "MCCB", link: "/ProtectionSwitchgear" },
    ],
    "Electrical Power Panels": [
      { label: "Electrical Power Panels", link: "/ElectricalPowerPanels" },
    ],
    "EV Chargers": [{ label: "EV Chargers", link: "/EVChargers" }],
    "Manufacturing Services": [
      { label: "Surface Treatment", link: "/ContractManufacturing" },
      { label: "Metal Enclosures", link: "/ContractManufacturing" },
      { label: "Metal Stamping", link: "/ContractManufacturing" },
      { label: "Precision Injection Moulding", link: "/ContractManufacturing" },
      {
        label: "Irrigation Products Fabrication",
        link: "/ContractManufacturing",
      },
      // { label: "Automotive Components", link: "/ContractManufacturing" },
      { label: "Modern Tool Room", link: "/ContractManufacturing" },
      {
        label: "Electromechanical Assemblies",
        link: "/products/contract/assembly",
      },
    ],
  },
  "investor relations": {
    Shareholders: [
      { label: "Shareholding patterns", link: "/InvestorRelations" },
      { label: "Shareholders meeting", link: "/InvestorRelations" },
      { label: "Corporate action", link: "/InvestorRelations" },
    ],
    Subsidiaries: [
      { label: "Subsidiaries", link: "/InvestorRelations" },
      { label: "Board of meeting", link: "/InvestorRelations" },
    ],
    Reports: [
      { label: "Annual reports & returns", link: "/InvestorRelations" },
      { label: "Finanical Results", link: "/InvestorRelations" },
      { label: "Composition of Committies", link: "/InvestorRelations" },
      { label: "CSR", link: "/InvestorRelations" },
    ],
    Disclosures: [
      { label: "Quarterly Disclosures", link: "/InvestorRelations" },
      { label: "Event based disclosures", link: "/InvestorRelations" },
      { label: "Half yearly disclosures", link: "/InvestorRelations" },
      { label: "Disclosures", link: "/InvestorRelations" },
    ],
    QIP: [
      { label: "QIP - other documents", link: "/InvestorRelations" },
      { label: "PD", link: "/InvestorRelations" },
      { label: "PPD", link: "/InvestorRelations" },
    ],
    Policies: [{ label: "All policies", link: "/InvestorRelations" }],
  },
  social: {
    Insights: [
      { label: "CSR", link: "/CSR" },
      { label: "Events", link: "/Events" },
      { label: "Sustainability", link: "/Sustainability" },
    ],
  },
  company: {
    "About us": [
      { label: "Awards & Certificates", link: "/Awards" },
      { label: "Leadership Team", link: "/LeadershipTeam" },
      { label: "Our Vision", link: "/CorePath" },
      // { label: "History", link: "/History" },
    ],
    News: [{ label: "Latest News", link: "/News" }],
    Carrers: [{ label: "Apply Now", link: "/Careers" }],
    "Contact Us": [{ label: "Contact Us", link: "/ContactUs" }],
    "Whistle Blower": [{ label: "Report a Concern", link: "/WhistleBlower" }],
  },
};

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [activeTab, setActiveTab] = useState("products & services");
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(menuData[activeTab])[0]
  );
  const [leaveTimeout, setLeaveTimeout] = useState(null);

  const toggleMobileTab = (tabKey) => {
    setActiveMobileTab((prev) => (prev === tabKey ? null : tabKey));
  };

  const getActiveTopTab = () => {
    for (let tabKey in menuData) {
      for (let category in menuData[tabKey]) {
        for (let item of menuData[tabKey][category]) {
          if (location.pathname === item.link) {
            return tabKey;
          }
        }
      }
    }
    return null;
  };

  const currentTab = getActiveTopTab();

  const handleTabHover = (tab) => {
    if (leaveTimeout) clearTimeout(leaveTimeout);
    setActiveTab(tab);
    setActiveCategory(Object.keys(menuData[tab])[0]);
    setHoveredTab(tab);
  };

  const handleLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredTab(null);
    }, 200);
    setLeaveTimeout(timeout);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => (window.location.href = "/")}>
        <img
          src="https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum-static/SpectrumNew.png"
          alt="Spectrum Logo"
        />
      </div>

      <div
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars />
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        {isMobileMenuOpen ? (
          <div className="mobile-menu-wrapper">
            {Object.keys(menuData).map((tabKey) => (
              <li key={tabKey} className="mega-parent">
                <div className="mega-wrapper">
                  <span
                    className={`menu-tab ${
                      activeMobileTab === tabKey ? "active" : ""
                    }`}
                    onClick={() => toggleMobileTab(tabKey)}
                  >
                    {tabKey.toUpperCase()}
                    <FaAngleRight className="only-mobile" />
                  </span>

                  {activeMobileTab === tabKey && (
                    <div className="mobile-submenu">
                      {Object.keys(menuData[tabKey]).map((cat) => (
                        <div key={cat}>
                          <strong>{cat}</strong>
                          {menuData[tabKey][cat].map((item, i) => (
                            <Link
                              key={i}
                              to={item.link}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveMobileTab(null);
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </div>
        ) : (
          Object.keys(menuData).map((tabKey) => (
            <li key={tabKey} className="mega-parent">
              <div
                className="mega-wrapper"
                onMouseEnter={() => handleTabHover(tabKey)}
                onMouseLeave={handleLeave}
              >
                <span
                  className={`menu-tab ${
                    hoveredTab === tabKey || currentTab === tabKey
                      ? "active"
                      : ""
                  }`}
                >
                  {tabKey.toUpperCase()}
                </span>
                {hoveredTab === tabKey && window.innerWidth > 768 && (
                  <div className="mega-menu animated">
                    <div className="mega-left">
                      {Object.keys(menuData[tabKey]).map((cat) => (
                        <div
                          key={cat}
                          className={`mega-item ${
                            activeCategory === cat ? "active" : ""
                          }`}
                          onMouseEnter={() => setActiveCategory(cat)}
                        >
                          <span className="mega-item-content">
                            <span>{cat}</span>
                            <FaAngleRight className="right-arrow-icon" />
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mega-right fade-in">
                      <h4>{activeCategory}</h4>
                      {menuData[tabKey][activeCategory].map((item, i) => (
                        <Link
                          key={i}
                          to={item.link}
                          onClick={() => setHoveredTab(null)}
                        >
                          <span className="mega-item-content">
                            <ul>
                              <li>{item.label}</li>
                            </ul>
                            <FaAngleRight className="right-arrow-icon" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
}
