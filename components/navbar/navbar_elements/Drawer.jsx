import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import Link from "next/link";

const drawerWidth = 240;
const CustomDrawer = ({ handleDrawerToggle, navItems, mobileOpen }) => {
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
        <Image src="/assets/logo.jpg" alt="Logo" width={200} height={100} />
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
