import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import ArtcleList from "@/components/ArticleComp/ArticleList";

const Artcle: React.FC = () => {
  const location = useLocation();
  // console.log(location);
  const params = useParams();
  // console.log(params);
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
