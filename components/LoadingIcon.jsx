import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const LoadingIcon = () => {
  return (
    <Box sx={{ display: "flex", color: "#f00", alignItems: "center" }}>
      <CircularProgress thickness={6} size={30} color="inherit" />
    </Box>
  );
};

export default LoadingIcon;
