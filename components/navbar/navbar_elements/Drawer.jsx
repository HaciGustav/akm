import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
const drawerWidth = 240;
const CustomDrawer = ({
  handleDrawerToggle,
  navItems,
  mobileOpen,
  isAdmin,
  logout,
}) => {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <img
          src="./assets/logo.jpg"
          alt="Logo"
          style={{ width: 200, height: 200 }}
        />
        <Divider />
        <List sx={{ rowGap: "10px" }}>
          {navItems.map((item) => (
            <Link
              onClick={handleDrawerToggle}
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
          {isAdmin && (
            <>
              <Link
                onClick={handleDrawerToggle}
                style={{ textDecoration: "none", height: "100%" }}
                href={"/admin"}
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
                  Admin
                </Button>
              </Link>
              <IconButton
                onClick={() => {
                  logout();
                  handleDrawerToggle();
                }}
                aria-label="logout"
              >
                <LogoutIcon />
              </IconButton>
            </>
          )}
          {/* {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <DropdownMenu key={item} btnName={item.name} />

            </ListItem>
          ))} */}
        </List>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;

{
  /* <ListItemButton sx={{ textAlign: "center" }}>
  <ListItemText primary={item} />
</ListItemButton> */
}
