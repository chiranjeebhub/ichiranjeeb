import React from "react";

import { Avatar, Space } from "antd";

const Nav = () => {
  return (
    <div
      //   className="navcss"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        // paddingTop: "20px",
        background: "white",
      }}
    >
      <Space>
        {/* <Avatar
          size={40}
          src="https://chatsgx.s3-us-east-2.amazonaws.com/chiranjib.jena@gmail.com/1628090376099.jpeg"
        /> */}
        <div>
          <img
            src={require("../images/logo.png")}
            alt=""
            style={{ width: "200px" }}
          />
        </div>
      </Space>
      <Space size="large">
        <div className="navitem">
          <div className="navInside">💰&nbsp;&nbsp;Personal Finance</div>
        </div>
        <div className="navitem">
          <div className="navInside">🚀&nbsp;&nbsp;Stock Market</div>
        </div>
        <div className="navitem">
          <div className="navInside">🤑&nbsp;&nbsp;Tax Management</div>
        </div>
        <div className="navitem">
          <div className="navInside">💳&nbsp;&nbsp;Credit Cards</div>
        </div>
      </Space>
    </div>
  );
};

export default Nav;
