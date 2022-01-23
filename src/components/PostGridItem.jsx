import { Avatar } from "antd";
import React from "react";

const PostGridItem = () => {
  return (
    <>
      <div style={{ width: "380px", color: "#90a2aa" }}>
        <img
          width="400px"
          src="https://static.ghost.org/v4.0.0/images/writing-posts-with-ghost.png"
          alt=""
        />
        <div
          style={{ color: "hotpink", padding: "10px 0px", fontWeight: "600" }}
        >
          GETTING STARTED
        </div>
        <div style={{ fontWeight: "bold", fontSize: "1.6em", color: "white" }}>
          Writing and managing content in Ghost, an advanced guide
        </div>
        <div style={{ fontSize: "1.2em", paddingTop: "10px" }}>
          A full overview of all the features built into the Ghost editor,
          including powerful workflow automations to speed up your creative
          process.
        </div>
        <div
          style={{
            paddingTop: "15px",
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
            <div style={{ fontSize: "13px" }}>Jan 23, 2022 . 1 min read</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostGridItem;
