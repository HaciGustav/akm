import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import EventModal from "./EventModal";
import { useState } from "react";

const EventCard = ({ source, title, text, index, cardArr }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <EventModal
        setOpenModal={setOpenModal}
        openModal={openModal}
        cardArr={cardArr}
        index={index}
      />
      <Grid
        onClick={() => setOpenModal(true)}
        item
        sm={6}
        md={6}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardStyle />
        <Card className="card" sx={{ width: "100%" }}>
          <div className="action-area">
            <CardMedia
              component="img"
              image={source}
              sx={{ height: "100%", objectFit: "cover" }}
              alt="Memory"
            />
            <div className="info">
              <h6 style={{ color: "#fff", textAlign: "center" }}>{title}</h6>
            </div>
          </div>
        </Card>
      </Grid>
    </>
  );
};

const CardStyle = () => {
  const css = `
.card {
  width = 100%;
  cursor:pointer;
}
.action-area{
  position: relative;
  height: 250px 
}
.action-area:hover .info{
  transform: translateX(0%)
}
.info{
  position: absolute;
  left: 0;
  bottom: 0;
  zIndex: 10;
  width: 100%;
  height: 100%;
  padding: 10px;
  transform: translateX(100%);
  transition: all 0.23s ease-in-out;
  background-color: #00000055;

}
`;

  return <style>{css}</style>;
};

export default EventCard;
