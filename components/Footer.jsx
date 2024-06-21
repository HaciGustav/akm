import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "@mui/material";
const Footer = () => {
  return (
    <footer
      style={{
        minHeight: "9rem",
        backgroundColor: "#385982",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          width: "90%",
          margin: "auto",
          paddingBlock: "1.5rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "8px",
            width: "50%",
          }}
        >
          <img style={{ width: "50%" }} src="./assets/Logo_footer.png" alt="" />
          <div style={{ color: "#fff", display: "flex", columnGap: "8px" }}>
            <Link
              sx={{
                textDecoration: "none",
                color: "#fff",
                width: "2rem",
                height: "2rem",
                border: "1px solid #fff",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                transition: "all 0.3s ease-out",
                "&:hover": { transform: "scale(1.2) rotate(15deg)" },
              }}
              target="blank"
              href="https://youtube.com/@anadolukulturmerkezi6147"
            >
              <YouTubeIcon />
            </Link>
            <Link
              sx={{
                textDecoration: "none",
                color: "#fff",
                width: "2rem",
                height: "2rem",
                border: "1px solid #fff",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                transition: "all 0.3s ease-out",
                "&:hover": { transform: "scale(1.2) rotate(15deg)" },
              }}
              target="blank"
              href="https://twitter.com/AAvusturya?t=ziQFyjftZ-X_b4SvInWk3w&s=08"
            >
              <TwitterIcon />
            </Link>
            <Link
              sx={{
                textDecoration: "none",
                color: "#fff",
                width: "2rem",
                height: "2rem",
                border: "1px solid #fff",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                transition: "all 0.3s ease-out",
                "&:hover": { transform: "scale(1.2) rotate(15deg)" },
              }}
              target="blank"
              href="https://instagram.com/akmviyana?igshid=YmMyMTA2M2Y="
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            rowGap: "10px",
            // border: "1px solid red",
          }}
        >
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="mailto:office@anadolukultur.at"
          >
            office@anadolukultur.at
          </a>
          <div
            style={{
              display: "flex",
              columnGap: "8px",
              display: "flex",

              alignItems: "center",
            }}
          >
            <img
              src="./assets/location.svg"
              style={{ width: "2rem", height: "2rem" }}
              alt=""
            />
            <a
              href="https://maps.app.goo.gl/StpYFxN2fjtM2qrEA"
              target="_blank"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <strong>
                Reumannplatz 7/3,
                <br />
                1100 Wien, Österreich
              </strong>
            </a>
          </div>
        </div>
      </div>
      <p
        style={{
          padding: "0.5rem",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#fff",
          fontSize: "0.8rem",
          color: "#385982",
          fontWeight: "lighter",
        }}
      >
        Copyright © {new Date().getFullYear()} AKM - Alle Kulturen Miteinander |
        Alle Rechte vorbehalten.
      </p>
    </footer>
  );
};

export default Footer;
