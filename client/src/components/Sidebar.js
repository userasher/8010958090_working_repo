import * as React from "react";
// import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
// import "../";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import VJTI_logo from "../vjti logo.png";
// import Profile from "../../../Profile.png";
import { useNavigate } from "react-router-dom";
import FeedIcon from "@mui/icons-material/Feed";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
// const drawerWidth = 240;

function ResponsiveDrawer(props) {
  // const user = useSelector((state) => state.user);
  const userState = useSelector((state) => state.user.user);
  const isAdmin = userState && userState.isAdmin;
  // const userState = useSelector((state) => state.user);
  // const user = userState ? userState.user : null;
  // user = { user };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navigate = useNavigate();
  // const user.isAdmin=true;
  const LogOutChange = async () => {
    localStorage.removeItem("AuthToken");
    navigate("/login");
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    // if (!isClosing) {
    //   setMobileOpen(!mobileOpen);
    // }
    setMobileOpen(!mobileOpen);
  };

  function refreshPage() {
    window.location.reload();
  }
  // const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {isAdmin ? (
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Admin Home"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/doctors">
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary={"Applicants"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/generate-pdf">
              <ListItemIcon>
                <LocalPrintshopIcon />
              </ListItemIcon>
              <ListItemText primary={"Generate Print"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/"
              onClick={() => {
                localStorage.removeItem("token");
                //   window.location.reload();
                refreshPage();
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Log Out"} />
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/apply-form">
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary={"Form"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/"
              onClick={() => {
                localStorage.removeItem("token");
                //   window.location.reload();
                refreshPage();
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Log Out"} />
            </ListItemButton>
          </ListItem>
        </List>
      )}

      {/* {isAdmin ? console.log("hi") : console.log("lag gye lavde")} */}
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="Navbar">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          // sx={{
          //   width: { sm: calc(100% - ${drawerWidth}px) },
          //   ml: { sm: ${drawerWidth}px },
          // }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              // sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              VJTI Railway Concession Portal
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          // sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            // onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            // sx={{
            //   display: { xs: "block", sm: "none" },
            //   "& .MuiDrawer-paper": {
            //     boxSizing: "border-box",
            //     width: drawerWidth,
            //   },
            // }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            // width: { sm: calc(100% - ${drawerWidth}px) },
          }}
        >
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

export default ResponsiveDrawer;
