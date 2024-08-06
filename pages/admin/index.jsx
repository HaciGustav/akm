import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/router";

const EditCard = ({ title, img, nav }) => {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(nav)} sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Admin = () => {
  const cards = [
    {
      title: "Kurse",
      nav: "/admin/courses",
      img: "/assets/courses-card.jpg",
    },
    {
      title: "Projekte",
      nav: "/admin/projects",
      img: "/assets/projects-card.jpg",
    },
    {
      title: "Erinnerungen",
      nav: "/admin/events",
      img: "/assets/events-card.jpg",
    },
    {
      title: "Bulletin",
      nav: "/admin/announcement",
      img: "/assets/announcement-card.jpg",
    },
  ];

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        minHeight: "70vh",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      {cards.map((card) => (
        <EditCard
          key={card.title}
          title={card.title}
          img={card.img}
          nav={card.nav}
        />
      ))}
    </div>
  );
};

export default Admin;
