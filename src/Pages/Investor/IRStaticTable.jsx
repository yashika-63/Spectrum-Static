import React from "react";
import { FaEye, FaDownload } from "react-icons/fa";
import "../../CSS/Investor/InvestorRelation.css";

const IRStaticTable = ({ title, files }) => {
  return (
    <div className="ir-static-table">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "6%" }}>Sr No</th>
            <th>File</th>
            <th style={{ width: "8%" }}>View</th>
            <th style={{ width: "5%" }}>Download</th>
          </tr>
        </thead>
        <tbody>
          {files.map((fileObj, idx) => {
            const fileUrl = fileObj.url;
            const displayName = fileObj.label;

            return (
              <tr key={idx}>
                <td>{idx + 1}.</td>
                <td>{displayName}</td>
                <td>
                  <a href={fileUrl} target="_blank" rel="noreferrer">
                    <FaEye />
                  </a>
                </td>
                <td>
                  <a href={fileUrl} download target="_blank" rel="noreferrer">
                    <FaDownload />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IRStaticTable;
