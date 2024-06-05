import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    professional: "",
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

    // 檢查是否所有欄位都填寫正確
    const hasErrors = Object.keys(errors).some((key) => errors[key]);

    if (!hasErrors) {
      // 不知道為什麼通知不會work
      if ("Notification" in window && Notification.permission === "granted") {
        const notification = new Notification("帳號創建成功", {
          body: "您的帳號已成功創建",
        });
        setTimeout(() => {
          navigate("/");
          notification.close();
        }, 3000);
      } else if (
        "Notification" in window &&
        Notification.permission !== "denied"
      ) {
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
            const notification = new Notification("帳號創建成功", {
              body: "您的帳號已成功創建",
            });
            setTimeout(() => {
              navigate("/");
              notification.close();
            }, 3000);
          }
        });
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 rounded">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <h3>創建帳號</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>治療師姓名</strong>
            </label>
            <input
              type="text"
              placeholder="輸入姓名..."
              onChange={handleInput}
              name="name"
              className="form-control rounded-0"
            />
            {errors.name && <span className="text-danger"> {errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="professional">
              <strong>治療專業別</strong>
            </label>
            <select
              required
              name="professional"
              value={values.professional}
              onChange={handleInput}
              className="form-control rounded-0"
            >
              <option value="">選擇專業別</option>
              <option value="OT">職能治療師</option>
              <option value="PT">物理治療師</option>
              <option value="ST">語言治療師</option>
            </select>
            {errors.professional && (
              <span className="text-danger"> {errors.professional}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="輸入email..."
              onChange={handleInput}
              name="email"
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger"> {errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phone">
              <strong>手機號碼（帳號）</strong>
            </label>
            <input
              type="phone"
              placeholder="輸入手機號碼..."
              onChange={handleInput}
              name="phone"
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
              onChange={handleInput}
              name="password"
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success">
            創建帳號
          </button>
          <Link to="/" className="btn btn-default border text-decoration-none">
            已有帳號？登入
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
