import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";

export default function SignIn() {
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });

  const { axiosInstance } = useAxios();

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axiosInstance.post("/auth/login", loginValues);
      console.log(data);
      data.lastLogin = Date.now();
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        border: "1px solid red",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Anmelden
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Addresse"
              name="email"
              autoComplete="email"
              autoFocus
              value={loginValues.email || ""}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Passwort"
              type="password"
              id="password"
              autoComplete="current-password"
              value={loginValues.password || ""}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Anmelden
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
