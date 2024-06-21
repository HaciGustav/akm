import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const DropdownMenu = ({ btnName, link }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemStyle = {
    textTransform: "uppercase",
    fontSize: "0.8rem",
    width: "100%",
    paddingInline: "16px",
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Button
        id={btnName + "-button"}
        aria-controls={open ? btnName : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          // columnGap: "5px",
          color: "#0008",
          cursor: "pointer",
          transition: "all 1s ease out",
          backgroundColor: open && "#38598250",
          fontSize: "0.8rem",
          // paddingInline: "10px",
          "&:hover": {
            backgroundColor: "#38598250",
          },
        }}
        // endIcon={open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      >
        {btnName}{" "}
      </Button>
      <Menu
        id={btnName}
        sx={{ width: "100%" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": btnName + "-button" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "5px",
            width: "11rem",
          }}
        >
          <MenuItem sx={menuItemStyle} onClick={handleClose}>
            Profile
          </MenuItem>
          <MenuItem sx={menuItemStyle} onClick={handleClose}>
            My account
          </MenuItem>
          <MenuItem sx={menuItemStyle} onClick={handleClose}>
            Logout
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
};
export default DropdownMenu;
