import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import BookIcon from "@mui/icons-material/Book";
import { Bookmark } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";

const pages = [
  {
    page: "DASHBOARD",
    link: "/",
  },
  {
    page: "NEW BLOG",
    link: "newblog",
  },
  {
    page: "ABOUT",
    link: "about",
  },
];
const settings = [
  {
    page: "login",
    link: "login",
  },
  {
    page: "My Blogs",
    link: "myBlogs",
  },
  {
    page: "Profile",
    link: "profile",
  },
  {
    page: "logout",
    link: "logout",
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const handleNavMenu = (e) => {
    navigate(e);
    //  console.log(e.target.innerText)
    //  navigate((e.target.innerText).toLowerCase())
  };
  const { user } = useSelector((state) => state.auth);
  const { logOut } = useAuthCalls();
  // console.log(user);
  const image = user.image;
  // console.log(image);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "greenyellow" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BookIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "black" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            WARSHIP BLOG
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "black",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.page}
                  onClick={() =>{
                    handleNavMenu(page.link)
                    handleCloseNavMenu()
                  }}
                >
                  <Typography sx={{ color: "black" }} textAlign="center">
                    {page.page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <BookIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "black" }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            WARSHIP BLOG
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={() => handleNavMenu(page.link)}
                sx={{ my: 2, color: "black", display: "block", px: "4rem" }}
              >
                {page.page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <Avatar alt="user" src={image} />
                ) : (
                  <Avatar alt="user" />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("my-blogs");
                  }}
                >
                  My Blogs
                </MenuItem>
              )}
              {user && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("profile");
                  }}
                >
                  Profile
                </MenuItem>
              )}
              {user && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    logOut();
                  }}
                >
                  Logout
                </MenuItem>
              )}
              {!user && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("login");
                  }}
                >
                  Login
                </MenuItem>
              )}

              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
