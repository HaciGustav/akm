import Box from "@mui/material/Box";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useEffect, useMemo, useState } from "react";
import { Paper } from "@mui/material";
import LoadingIcon from "../LoadingIcon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EventModal({
  openModal,
  setOpenModal,
  index,
  cardArr,
}) {
  const [imageIndex, setImageIndex] = useState(index);
  const [path, setPath] = useState("");
  const handleClose = () => setOpenModal(false);

  const style = useMemo(() => ({
    card: {
      minWidth: "30%",
      width: { xs: "90%", sm: "75%", md: "60%", lg: "55%", xl: "50%" },

      height: "75vh",
      //   height: "65vh",
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 1,
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      position: "relative",
    },

    buttonWrapLeft: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      display: "grid",
      placeItems: "center",
      opacity: 0.2,
      backgroundColor: "#fff4",
      borderRight: "1px solid #ccc",
      borderRadius: "8px 0 0 8px",
      transition: "0.2s",
      zIndex: 15,
      "&:hover": {
        opacity: 1,
      },
    },
    buttonWrapRight: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      display: "grid",
      placeItems: "center",
      transition: "0.2s",
      opacity: 0.2,
      backgroundColor: "#fff4",
      zIndex: 15,
      borderLeft: "1px solid #ccc",
      borderRadius: "0 8px 8px 0 ",
      "&:hover": {
        opacity: 1,
      },
    },
  }));

  const handleNextImage = () => {
    let total = cardArr.length - 1;
    if (imageIndex < total) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };
  const handlePrevImage = () => {
    let total = cardArr.length - 1;
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(total);
    }
  };
  useEffect(() => {
    setPath(cardArr[imageIndex]?.image);
  }, [imageIndex]);

  useEffect(() => {
    if (!openModal) setImageIndex(index);
  }, [openModal]);

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "grid", placeItems: "center" }}
      >
        <Box component={Paper} sx={style.card}>
          <Box sx={style.buttonWrapLeft} onClick={handlePrevImage}>
            <IconButton>
              <NavigateBeforeIcon />
            </IconButton>
          </Box>

          <div
            style={{
              maxWidth: "100%",
              height: "100%",
              width: "100%",
              backgroundImage: `url(${path})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              userSelect: "none",
            }}
          ></div>

          <Box
            sx={{
              width: "90%",
              display: { xs: "none", md: "block" },
              height: "100%",
            }}
          >
            <div
              style={{
                fontSize: "1.3rem",
                textTransform: "capitalize",
                padding: "1rem",
                borderBottom: "1px solid #ccc",
              }}
            >
              {cardArr[imageIndex]?.title}
            </div>
            <div
              style={{
                textAlign: "left",
                padding: "1rem",
              }}
            >
              {cardArr[imageIndex]?.text}
            </div>
          </Box>

          <Box sx={style.buttonWrapRight} onClick={handleNextImage}>
            <IconButton>
              <NavigateNextIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
