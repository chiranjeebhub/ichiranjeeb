import React from "react";
import Nav from "./components/Nav";
import "./css/myStyle.css";
import "antd/dist/antd.css";
import Hero from "./components/Hero";
import { Avatar, Col, Row } from "antd";

export default function App() {
  return (
    <div
      style={{
        // background: "#EBF4F9",
        background: "#151719",
        height: "100vh",
      }}
    >
      <Nav />

      <Row
        style={{ padding: "30px 10vw", display: "flex", alignItems: "center" }}
        gutter={30}
      >
        <Col span={16}>
          <img
            width="100%"
            src="https://codecloud.ghost.io/content/images/size/w2000/2022/01/---7-.png"
            alt=""
          />
        </Col>
        <Col span={8} style={{ color: "#60757e", fontSize: "16px" }}>
          <h2 style={{ color: "white" }}>Hello World</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          <div
            style={{
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              size={40}
              src="https://chatsgx.s3-us-east-2.amazonaws.com/chiranjib.jena@gmail.com/1628090376099.jpeg"
            />
            <div style={{ paddingLeft: "10px" }}>
              <div style={{ fontWeight: "600", color: "white" }}>
                Chiranjeeb Jena
              </div>
              <div>Jan 23, 2022 . 1 min read</div>
            </div>
          </div>
        </Col>
      </Row>

      {/* <h1>ichiranjeeb</h1>
      <h2>The site is under construction...</h2>
      <img src="https://res.cloudinary.com/teepublic/image/private/s--7xwk_r6B--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1509335238/production/designs/2010030_1.jpg" /> */}
    </div>
  );
}
