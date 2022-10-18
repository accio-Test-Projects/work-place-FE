import React, { useState, useEffect } from "react";
import { TextField, Grid, Box, Button } from "@mui/material";
import { addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../../config/firebaseInitisize";
import { useNavigate } from "react-router-dom";

function ClientOnboarding() {
  const navigate = useNavigate();
  const loggedInUser=JSON.parse(localStorage.getItem('user'))
  const [clientInfo, setClientInfo] = React.useState({
    name: "",
    email: loggedInUser.email,
    phone: "",
    company: "",
    location: "",
    website: "",
  });

  const submitInfo = async (e) => {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    let userId = userInfo.uid;
    e.preventDefault();
    console.log(clientInfo);
    try {
      
      const docRef = await setDoc(doc(db, "usersData",userId), {
          ...clientInfo,
          userId: userId,
          step:2,
          user_type:"client"
        })
     
        navigate('/client/profile')
      } catch (e) {
        alert('Error occored')
        console.error("Error adding document: ", e);
      }
    
    setClientInfo({
      name: "",
      email: "",
      phone: "",
      company: "",
      location: "",
      website: "",
    });
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
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
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
            <Grid xs={12} md={6}>
              <label>email*</label>
              <TextField
                disabled
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

            <Grid xs={12} md={6}>
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

            <Grid xs={12} md={6}>
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

            <Grid xs={12} md={6}>
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
            <Grid xs={12} md={6}>
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



