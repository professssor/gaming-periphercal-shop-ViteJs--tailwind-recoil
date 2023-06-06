import React from "react";

import payment from "../../assets/payment.png";
import footerbg from "../../assets/footerbg2.jpg";
import { Box } from "@mui/material";
import "./Footer.css";
export default function Footer() {
  return (
    // wrapper for footer
    <div
      style={{
        background: `url(${footerbg})`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          padding: "1rem 4rem",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            width: "100%",
          }}
        >
          {/* first column */}
          <div
            style={{
              color: "white",
              width: "100%",

              textAlign: "left",
            }}
          >
            <p style={{ fontSize: "1.5rem" }}>Categories</p>
            <a style={{ textDecoration: "none" }}>
              <p>Graphic Card</p>
            </a>
            <a href="/products/2" style={{ textDecoration: "none" }}>
              <p>Cabinet</p>
            </a>
            <a style={{ textDecoration: "none" }}>
              <p>CPU</p>
            </a>
            <a style={{ textDecoration: "none" }}>
              <p>Monitor</p>
            </a>{" "}
            <a style={{ textDecoration: "none" }}>
              <p>Solid State Drive</p>
            </a>
          </div>

          {/* second column */}
          <div
            style={{
              color: "white",
              width: "100%",
              textAlign: "left",
            }}
          >
            <p style={{ fontSize: "1.5rem" }}>Links</p>
            <div className="">
              <a style={{ textDecoration: "none" }}>
                <p>FAQ</p>
              </a>
              <a style={{ textDecoration: "none" }}>
                <p>Pages</p>
              </a>
              <a style={{ textDecoration: "none" }}>
                <p>Stores</p>
              </a>
              <a style={{ textDecoration: "none" }}>
                <p>Compare</p>
              </a>
              <a style={{ textDecoration: "none" }}>
                <p>Cookies</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* second part */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            color: "white",
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "1rem" }}>
            Gamingstore.com
          </h1>
          <span
            style={{
              fontSize: ".7rem",
              alignSelf: "center",
            }}
          >
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div style={{ marginLeft: "4px" }}>
          <img
            style={{ margin: "auto", height: "2rem" }}
            src={payment}
            alt=""
          />
        </div>
      </Box>
    </div>
  );
}
