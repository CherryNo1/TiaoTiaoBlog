import React from "react";

function isAuth() {
  const token = localStorage.getItem("token");
  return token != null;
}

export default isAuth;
