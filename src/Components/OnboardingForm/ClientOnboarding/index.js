import React, { useState, useEffect } from "react";
import { TextField, Grid, Box, Button } from "@mui/material";


function ClientOnboarding() {
  const [clientInfo, setClientInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    website: "",
  });

  const submitInfo = async (e) => {
    
    e.preventDefault();
    alert('submit')
    console.log(clientInfo);
    
  };


  return (
    <div
    style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      backgroundColor: "#F2F2F2",
      minHeight: "100vh",
    }}
    >
      <h1 style={{
        display:"flex",
        justifyContent: "center",

      }}>clientInfo</h1>
      <form onSubmit={(e) => submitInfo(e)}>
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            background: "#fff",
            padding: "70px",
          }}
        >
          <Grid container spacing={1}>
            <Grid xs={12} md={12}>
              <label>Name*</label>
              <TextField
                required
                value={clientInfo.name}
                onChange={(e) => {
                  setClientInfo((p) => {
                    return { ...p, name: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} md={12}>
              <label>email*</label>
              <TextField
                required
                type="email"
                value={clientInfo.email}
                onChange={(e) => {
                  setClientInfo((p) => {
                    return { ...p, email: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid xs={12} md={12}>
              <label>Phone no.*</label>
              <TextField
                required
                type="number"
                inputProps={{ maxLength: 10 }}
                value={clientInfo.phone}
                onChange={(e) => {
                  setClientInfo((p) => {
                    return { ...p, phone: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid xs={12} md={12}>
              <label>Location*</label>
              <TextField
              required
                value={clientInfo.location}
                onChange={(e) => {
                  setClientInfo((p) => {
                    return { ...p, location: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            {/* website */}

            <Grid xs={12} md={12}>
              <label>Website</label>
              <TextField
                value={clientInfo.website}
                onChange={(e) => {
                  setClientInfo((p) => {
                    return {
                      ...p,
                      website: e.target.value,
                      
                    };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            {/* //company */}
            <Grid xs={12} md={12}>
              <label>Company</label>
              <TextField
                value={clientInfo.company}
                onChange={(e) => {
                  setClientInfo((p) => {
                    return { ...p, company: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            

           
            
           
           
          </Grid>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default ClientOnboarding

//neame*
//email*
//phone*
//location*
//company
//website



