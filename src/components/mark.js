import React from "react";
import { Spin } from "antd";

const Mark = ({ isAnimating }) => {
  return (
    <React.Fragment>
      {isAnimating && (
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.20)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin tip="Loading..." size="large" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Mark;
