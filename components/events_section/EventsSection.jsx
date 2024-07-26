import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const EventsSection = () => {
  const [cardArr, setCardArr] = useState([]);

  const cardInfos = [
    {
      title: "Einen besonderen Dank an das Bundesheer für euren Einsatz!",
      text: "Um vom Herzen für den Einsatz der SoldatInnen die aus der Türkei zurück sind zu danken, haben wir sie am Hauptplatz in Korneuburg mit Blumen empfangen. Wir bedanken uns vom ganzen Herzen für den Einsatz bei der Bergung und Rettung der Erdbebenopfer.",
      img: "/assets/posts/2870691_n.jpg",
    },
    {
      title: "Kulturhaus Brotfabrik Samstagatelier!",
      text: "Wir waren mit 11 Jugendlichen im Alter von 11-13 Jahren in der Kulturhaus Brotfabrik im Samstagatalier! Werken ist ein Handwerksberuf, einige von uns sind sehr talentiert darin! Sie machten sehr gerne Keramik und Holzdruck. ",
      img: "/assets/posts/3164414_n.jpg",
    },
    {
      title: "Spendenaktion für die Erdbebengebiete Türkei und Syrien",
      text: "Gestern waren wir auf der Mariahilferstraße, es hat eine Spendenaktion für die Erdbebengebiete Türkei und Syrien stattgefunden. Unsere Jugendlichen haben Backwaren vorbereitet und sie zur Verfügung gestellt, damit Menschen beliebig viel spenden können. An dieser Stelle möchten wir uns an die Stadt Wien und unseren Freiwilligen bedanken.",
      img: "/assets/posts/5396337_n.jpg",
    },
    {
      title: "Seminar zur Persönlichkeitsentwicklung für jungen",
      text: "Es war ein wunderbares und sehr anregendes Seminar zur Persönlichkeitsentwicklung für jungen. An unserem Seminar hatten wir viele junge Teilnehmer im Alter zwischen 13 und 18 Jahren. Gab es auch leckere Leckereien!",
      img: "/assets/posts/5774271_n.jpg",
    },
    {
      title: "Tag der Menschenrechte",
      text: "Auch wir haben heuer zum internationalen Tag der Menschenrechte mit dem Friede Institut zusammen an einer Spendenaktion der Caritas in Wien teilgenommen. Wir danken herzlichst unseren Freiwilligen, die uns dabei unterstützt und geholfen haben.",
      img: "/assets/posts/7091116_n.jpg",
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
