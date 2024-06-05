import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import "./App.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    navigate("/export"); // 待改
  };

  return (
    <div className="d-flex justify-content-center align-items-center background-image">
      <div className="bg-white p-3 rounded w-40">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <h1>新竹馬偕兒醫請假管理後台</h1>
            <h3>登入帳號</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="phone">
              <strong>手機號碼</strong>
            </label>
            <input
              type="phone"
              placeholder="輸入手機號碼..."
              name="phone"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.phone && (
              <span className="text-danger"> {errors.phone}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>密碼</strong>
            </label>
            <input
              type="password"
              placeholder="輸入密碼..."
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success">
            登入
          </button>
          <Link
            to="/signup"
            className="btn btn-default border text-decoration-none"
          >
            創建帳號
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
