import React from "react";
import { Link } from "react-router-dom";

function Export() {
  const exportData = () => {
    // 在這裡實現匯出資料庫內容的邏輯
    console.log("匯出資料庫內容");
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
