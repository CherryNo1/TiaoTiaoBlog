import React, { useState, useEffect } from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, List, Skeleton, Space } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { Outlet } from "react-router-dom";
import ArtcleList from "../../../components/ArtcleComp/ArtcleList";

const Artcle: React.FC = () => {
  return (
    <React.Fragment>
      {false && <ArtcleList />}
      <div className="details">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Artcle;
