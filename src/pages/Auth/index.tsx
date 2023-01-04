import React from "react";

function isAuth() {
  const token = localStorage.getItem("Authorization");
  return token != null;
}

export default isAuth;
