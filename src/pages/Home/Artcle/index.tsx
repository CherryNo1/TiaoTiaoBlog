import React, { useState, useEffect } from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, List, Skeleton, Space } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { Outlet, useLocation, useParams } from "react-router-dom";
import ArtcleList from "../../../components/ArtcleComp/ArtcleList";

const Artcle: React.FC = () => {
  const location = useLocation();
  console.log(location);
  const params = useParams();
  console.log(params);
  return (
    <React.Fragment>
      {params.artcleId == null && <ArtcleList />}
      <div className="details">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Artcle;
