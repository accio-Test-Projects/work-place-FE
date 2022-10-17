import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const routes = [
  {
    name: "Jobs",
    path: "/candidate/jobs",
  },
  {
    name: "Profile",
    path: "/candidate/profile",
  },
  {
    name: "Conversation",
    path: "/candidate/conversation",
  },
  {
    name: "Applications",
    path: "/candidate/applications",
  },
];
function CandidateHOC({ children }) {
  const navigate = useNavigate();
  const reRoute = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Grid container spacing={2}>
        {routes.map((route, index) => {
          return (
            <Grid item xs={2} key={index}>
              <Button onClick={() => reRoute(route.path)}>{route.name}</Button>
            </Grid>
          );
        })}
      </Grid>
      {children}
    </div>
  );
}

export default CandidateHOC;
