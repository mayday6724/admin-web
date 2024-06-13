import React from "react";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
// import axios from "axios";

function Export() {
  const exportData = async () => {
    try {
      const response = await fetch(
        "/api/v1/get_appointment_details?user_id=123&start_date=2024-06-10&end_date=2024-06-14"
      );
      const data = await response.json();
      downloadCSV(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((row) => Object.values(row).join(",")).join("\n");
    return `${headers}\n${rows}`;
  };

  const downloadCSV = (data) => {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "後台預約資料.csv");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column align-items-center mb-3">
        <button onClick={exportData} type="submit" className="btn btn-success">
          匯出系統資料
        </button>
        <Link
          to="/"
          className="btn btn-default border text-decoration-none mt-2"
        >
          登出
        </Link>
      </div>
    </div>
  );
}

export default Export;
