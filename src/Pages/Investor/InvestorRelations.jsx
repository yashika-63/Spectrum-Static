import React, { useState } from "react";
import { investorData } from "../../Data/InvestorData";
import '../../CSS/Investor/InvestorRelation.css';
import IRSidebarLayout from "./IRSidebarLayout";
import IRStaticTable from "./IRStaticTable";

const InvestorRelations = () => {
  const [activeStatic, setActiveStatic] = useState(null);

  return (
    <div className="ir-page">
      <h1 className="title">Investor Relations</h1>

      <div className="static-buttons">
        {Object.keys(investorData.staticSections).map((section) => (
          <button
            key={section}
            className={activeStatic === section ? "active" : ""}
            onClick={() =>
              setActiveStatic(activeStatic === section ? null : section)
            }
          >
            {section}
          </button>
        ))}
      </div>

      {activeStatic && (
        <>
          <IRStaticTable
            title={activeStatic}
            files={investorData.staticSections[activeStatic]}
          />
          <div className="ir-sidebar-below">
            <IRSidebarLayout />
          </div>
        </>
      )}

      {!activeStatic && <IRSidebarLayout />}
    </div>
  );
};

export default InvestorRelations;
