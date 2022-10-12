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
import Logo from "../../../assets/Slogo.png";
import { useHistory, Link } from "react-router-dom";
const pages = ["Home", "Find clients", "Find Candidates", "Articles"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const goToClientSignIn = () => {
    history.push("/signIn/client");
  };
  const goToCandidateSignIn = () => {
    history.push("/signIn/candidate");
  };

  const handleNavBtnClick = (page) => {
    if (page.toLowerCase() === "find clients") {
      goToClientSignIn();
    } else if (page.toLowerCase() === "find candidates") {
      goToCandidateSignIn();
    }
  };
  return (
    <AppBar position="static">
      <Container
        variant="div"
        sx={{
          background: "white",
          display: "flex",
          width: "100%",
          color: "#000",
          justifyContent: "space-between",
        }}
        maxWidth="xl"
      >
        <Toolbar
          sx={{
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
          }}
          disableGutters
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ width: "20%" }}>
            <img
              src={Logo}
              alt="logo"
              style={{ maxWidth: "100px", width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { sm: "0%", md: "80%" },
              display: { xs: "none", md: "flex" },
              justifyContent: " space-between",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavBtnClick(page)}
                sx={{ my: 2, color: "#000", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ width: { xs: "60%", md: "20%" } }}>
            <Button>
              <Link to="/signup">Login</Link>
            </Button>
            <Button style={{}}>Register Now</Button>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
