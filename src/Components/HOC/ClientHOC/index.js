import { Button, Grid, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../../assets/Slogo.png'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WorkIcon from '@mui/icons-material/Work';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';


const routes = [
  {
    name: "Jobs",
    path: "/client/jobs",
  },
  {
    name: "Profile",
    path: "/client/profile",
  },
  {
    name: "Conversation",
    path: "/client/conversation",
  },
  {
    name: "Applicants",
    path: "/client/applicants",
  },
];
function ClientHOC({ children }) {

  const [value, setValue] = React.useState(0);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 360px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const navigate = useNavigate();
  const reRoute = (path) => {
    navigate(path);
  };
  return (
    <>


      <div>
        {
          matches && (<div style={{ background: "whiteSmoke" }}>

            <div style={{ display: "flex", background: "white", boxShadow: "0px 0px 5px #A7A1A1", }}>
              <img style={{ maxWidth: "80px", height: "35px", width: "100%", margin: "10px 20% 0px 10px" }} src={Logo} />
              <Grid container spacing={0} mr={6}>
                {routes.map((route, index) => {
                  return (
                    <Grid item xs={2} key={index}>
                      <Button style={{ color: "black" }} onClick={() => reRoute(route.path)}>{route.name}</Button>
                    </Grid>
                  );
                })}
              </Grid>
            </div>

          </div>)
        }

      </div>
      {children}
      <div style={{display:"static"}}>
        {
          !matches && (<Box sx={{ minWidth: "360px" }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Jobs" icon={<WorkIcon />} />
              <BottomNavigationAction label="Messages" icon={<QuestionAnswerIcon/>} />
              <BottomNavigationAction label="Applicatns" icon={<ContactMailIcon />} />
              <BottomNavigationAction label="Profile" icon={<PersonIcon/>} />
            </BottomNavigation>
          </Box>)
        }
      </div>

     

    </>


  );
}

export default ClientHOC;
