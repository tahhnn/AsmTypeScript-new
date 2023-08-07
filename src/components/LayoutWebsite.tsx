import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutWebsite = (props: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <Outlet />
    </div>
  );
};

export default LayoutWebsite;
