import React, { useState } from "react";
import { Button, Grid, Box } from "@mui/material";
import JobForm from "./JobForm";
import SideBar from "./SideBar";

function PostJob() {
  const [mobileStep, setMobileStep] = useState(true);
  return (
    <div >
      <Grid container spacing={2}>
        <Grid
          sx={{
            display: { xs: mobileStep ? "block" : "none", sm: "block" },
          }}
          item
          xs={12}
          sm={4}
          md={3}
        >
          <SideBar />
        </Grid>
        <Grid
          sx={{
            display: { xs: !mobileStep ? "block" : "none", sm: "block" },
          }}
          item
          xs={12}
          sm={8}
          md={9}
        >
          <JobForm />
        </Grid>
        <Button onClick={() => setMobileStep((p) => !p)}>shift</Button>
      </Grid>
      <div>
        {/* {matches } */}
        {/* <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span> */}
      </div>
    </div>
  );
}

export default PostJob;
