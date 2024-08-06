import { Box, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import React, { useEffect, useState } from "react";
import useApiCalls from "@/hooks/useApiCalls";
import { useRouter } from "next/router";

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

const AnnouncementEditModal = ({ modalOpen, setModalOpen }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputVal, setInputVal] = useState({
    image: "",
    title: "",
    text: "",
  });

  const router = useRouter();

  const handleImageInputChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;

      const base64String = fileContent.split(",")[1];
      setSelectedImage(fileContent);
      setInputVal({ ...inputVal, image: fileContent });
    };
    if (selectedFile) reader?.readAsDataURL(selectedFile);
  };

  const handleChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  const { postAnnouncement } = useApiCalls();

  const handleSubmit = (e) => {
    e.preventDefault();

    postAnnouncement(inputVal);
  };

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form
        style={{
          width: "100vw",
          // height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          width: "50%",
          minWidth: 300,
          boxShadow: 24,
          padding: "1rem",
          borderRadius: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            rowGap: "10px",
          }}
        >
          <Box
            sx={{
              width: 400,
              height: 300,
              maxWidth: "100%",
              maxHeight: "100%",
              position: "relative",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#dddc",
              borderRadius: "15px",
              padding: 0,
              overflow: "hidden",
              border: "1px solid #ccc",
            }}
          >
            <PhotoCameraIcon
              sx={{
                cursor: "pointer",
                position: "absolute",
                mixBlendMode: "multiply",
                fontSize: "10rem",
                color: "#0000005f",
              }}
              fontSize="inherit"
              color="inherit"
            />

            {selectedImage && (
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                src={selectedImage ?? ""}
                alt="project-image"
              />
            )}
            <input
              // ref={inputRef}
              style={{
                color: "red",
                height: "100%",
                width: "100%",
                border: "2px solid blue",
                position: "absolute",
                zIndex: "25",
                top: 0,
                left: 0,
                opacity: "0",
                cursor: "pointer",
              }}
              id="imgInput"
              type="file"
              accept="image/*"
              onChange={handleImageInputChange}
            />
          </Box>
          <TextField
            fullWidth
            label="Überschrift"
            variant="outlined"
            name="title"
            required
            value={inputVal?.title || ""}
            onChange={handleChange}
          />
          {/* <TextField
            fullWidth
            label="Text"
            variant="outlined"
            multiline
            rows={4}
            name="text"
            required
            value={inputVal?.text || ""}
            onChange={handleChange}
          /> */}

          <Box sx={{ width: "100%", textAlign: "end" }}>
            <Button variant="contained" type="submit">
              Speichern
            </Button>
          </Box>
        </Box>
      </form>
    </Modal>
  );
};

export default AnnouncementEditModal;
