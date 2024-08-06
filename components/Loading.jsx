import { Fade } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const fetchLoading = useSelector((state) => state.settings.loading);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => {
      setTimeout(() => {
        setLoading(false);
      }, 750);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  return (
    <Fade in={loading || fetchLoading} timeout={300}>
      <Backdrop
        sx={{
          backgroundColor: "#000000cf",
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 3,
          margin: "-5rem",
        }}
        open={true}
      >
        <FadeLoader
          // cssOverride={{ backdropFilter: "blur(5px)" }}
          width={7.5}
          height={25}
          // loading={true}
          color="#fff"
          margin={10}
        />

        {/* <CircularProgress
          sx={{ backdropFilter: "blur(5px)" }}
          color="inherit"
          size={45}
        /> */}
      </Backdrop>
    </Fade>
  );
};

export default Loading;
