import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import useApiCalls from "@/hooks/useApiCalls";

const EventsSection = () => {
  const [cardArr, setCardArr] = useState([]);

  const [events, setEvents] = useState([]);
  const { getEvents } = useApiCalls();

  const handleLoadMore = () => {
    const length = cardArr.length;
    setCardArr(events.slice(0, length + 3));
  };
  useEffect(() => {
    getEvents()
      .then((res) => {
        setEvents(res);
        return res;
      })
      .then((res) => setCardArr(res.slice(0, 3)));
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
              source={item.image}
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
          {events.length !== cardArr.length && (
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
