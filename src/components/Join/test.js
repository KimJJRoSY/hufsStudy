import React, { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 폼 제출 시 서버로 회원가입 정보 전송
    axios
      .post("http://localhost:8000/api/signup/", formData)
      .then((response) => {
        console.log(response.data);
        // 회원가입 성공 시 처리
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        // 회원가입 실패 시 처리
      });
  };

  return (
    <div>
      <h2>회원가입 페이지</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUpPage;
