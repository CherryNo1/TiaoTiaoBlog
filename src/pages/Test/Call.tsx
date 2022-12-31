import React from "react";
import { NavigateOptions, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import AMapContainer from "@/components/AMapContainer";
export default function FuncComponent() {
  return <div>
    <AMapContainer />
  </div>;
}
