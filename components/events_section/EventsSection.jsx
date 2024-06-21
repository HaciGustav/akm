import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const EventsSection = () => {
  const [cardArr, setCardArr] = useState([]);

  const cardInfos = [
    {
      title: "lorem ipsum dolor sit amet",
      text: "ASDASD im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/16871608/pexels-photo-16871608/free-photo-of-geast-blatter-baum-gebaude-aussen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "cxvxycvxyn im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/5940278/pexels-photo-5940278.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "döklfgjasd im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/19908899/pexels-photo-19908899/free-photo-of-landschaft-sand-wuste-trocken.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "poxcpvo im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/18132120/pexels-photo-18132120/free-photo-of-wahrzeichen-skyline-ozean-australien.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "586868 im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/14781473/pexels-photo-14781473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "kzujzu im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/9316207/pexels-photo-9316207.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "rtzrtz im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-02/adobestock_144255497.jpeg?itok=7Rt-bVOy",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "io.o.io im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/18821921/pexels-photo-18821921/free-photo-of-feld-tiere-pferde-herde.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "erterterter im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/19915879/pexels-photo-19915879/free-photo-of-kalt-schnee-holz-landschaft.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "Begegnungstreffen im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/19748403/pexels-photo-19748403/free-photo-of-stadt-ferien-strasse-sommer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "Begegnungstreffen im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/11608639/pexels-photo-11608639.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "Begegnungstreffen im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/19960223/pexels-photo-19960223/free-photo-of-meer-stadt-wasser-hafen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "Begegnungstreffen im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/19895853/pexels-photo-19895853/free-photo-of-meer-wasser-ozean-sommer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "Begegnungstreffen im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/17758065/pexels-photo-17758065/free-photo-of-meer-himmel-mann-strand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "lorem ipsum dolor sit amet",
      text: "Begegnungstreffen im Merida e.V. . In unseren Räumlichkeiten gab es ein schönes leckeres Frühstücksbüffet mit einer tollen Austausch. Stadt",
      img: "https://images.pexels.com/photos/17504061/pexels-photo-17504061/free-photo-of-stadt-pelikan-menschen-strasse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  const handleLoadMore = () => {
    const length = cardArr.length;
    setCardArr(cardInfos.slice(0, length + 3));
  };
  useEffect(() => {
    setCardArr(cardInfos.slice(0, 3));
  }, []);

  return (
    <Paper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "20vh",
          rowGap: "0.5rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "montserrat, sans-serif",
            fontSize: "2rem",
            textAlign: "center",
            color: "#385982",
          }}
        >
          <em>Erinnerungen von unseren Veranstaltungen</em>
        </Typography>
        <div
          style={{
            height: "1rem",
            borderTop: "2px solid #385982",
            borderBottom: "2px solid #385982",
            width: "40%",
            minWidth: "170px",
            transform: "skew(-83deg)",
          }}
        ></div>
      </div>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={1.5}
          sx={{
            width: { xs: "80%", lg: "70%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          {cardArr.map((item, index) => (
            <EventCard
              key={index}
              index={index}
              cardArr={cardArr}
              source={item.img}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
        <div
          style={{
            textAlign: "center",
            padding: "1rem",
          }}
        >
          {cardInfos.length !== cardArr.length && (
            <Button onClick={handleLoadMore} variant="outlined">
              Mehr Laden
            </Button>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default EventsSection;
