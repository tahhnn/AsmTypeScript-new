import React from "react";

type Props = {};

const Dashboard = () => {
  const client = JSON.parse(localStorage.getItem("users"));

  return <div>Xin chào {client?.name}</div>;
};

export default Dashboard;
