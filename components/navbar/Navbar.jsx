import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import CustomDrawer from "./navbar_elements/Drawer";
import Footer from "../Footer";
import { Button } from "@mui/material";
import Link from "next/link";

const navItems = [
  { name: "Aktivitäten & Projekte", url: "/projects" },
  { name: "Kurse", url: "/courses" },
  { name: "Über uns", url: "/about" },
  // { name: "Kontakt", url: "/contact" },
];

const Navbar = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box sx={header}>
        <CssBaseline />
        <AppBar position="fixed" sx={navbar}>
          <Toolbar sx={toolbar}>
            <a href="/" style={{ height: "100%" }}>
              <img
                src="/assets/logo.jpg"
                style={{ maxHeight: "100%" }}
                alt="Logo"
              />
            </a>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                columnGap: "5px",
                height: "90%",
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  style={{ textDecoration: "none", height: "100%" }}
                  href={item.url}
                >
                  <Button
                    variant="text"
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      color: "#0008",
                      cursor: "pointer",
                      transition: "all 1s ease out",
                      fontSize: "0.8rem",
                      paddingInline: "15px",
                      "&:hover": {
                        backgroundColor: "#38598250",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
                // <DropdownMenu key={item} btnName={item} />
              ))}
            </Box>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav>
          <CustomDrawer
            handleDrawerToggle={handleDrawerToggle}
            navItems={navItems}
            mobileOpen={mobileOpen}
          />
        </nav>
      </Box>
      <Box sx={main}>{children}</Box>
      <Footer />
    </>
  );
};

export default Navbar;

export const header = {
  height: "5rem",
  display: "flex",
  // opacity: "0.5",
  transition: "all 0.5s ",
  // "&:hover": { opacity: "1", "& > nav": { transform: "translateY(0%)" } },
  // cursor: "pointer",
};
export const navbar = {
  height: "5rem",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  // transform: "translateY(-100%)",
  // transition: "all 0.4s ",
};
export const toolbar = {
  height: "100%",
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
};
export const main = {
  padding: 0,
  width: "100%",
};
