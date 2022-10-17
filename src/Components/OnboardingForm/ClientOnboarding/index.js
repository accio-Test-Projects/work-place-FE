import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "./index.css";

function ClientOnboarding() {

  // -----------------------------------------------------------------
      const [clientInfo, setClientInfo] = React.useState({
        name: "",
        email: "",
        phone: "",
        companyName:"",
        website:"",
        location:"",
        socialMedia: {
          linkedIn: "",
          twitter: "",
        },
      });
  // --------------------------------------------------------------------


  return (
    <div className="main-container">
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#FFFAFA",
          boxShadow: "0px 0px 15px #DCD7D7",
          padding:"90px 10px",
          borderRadius: "20px"
        }}
      >
        <h2 className="heading"> SetUp your client profile</h2>
        <form>
          <Grid
            container
            spacing={5}
            maxWidth="80%"
            p={4}
            sx={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 0px 15px #DCD7D7",
              margin: "auto",
              fontSize: "15px"
            }}
          >
            {/* ----------------------------------------------------- */}
            {/* /neame*
          //email*
          //phone*
          //location*
          //company
          //website */}

            <Grid item md={6} xs={12}>
              <label>Company Name*</label>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                size="small"
                required
                value={clientInfo.companyName}
                onChange={(e) => {
                  setClientInfo((p)=>{
                    return { ...p, companyName: e.target.value };
                  })
                }}
              />
            </Grid>
            {/* ----------------------------------------------------- */}

            <Grid item md={6} xs={12}>
              <label>Phone Number*</label>
              <TextField
                fullWidth
                id="outlined-basic"
                type="number"
                variant="outlined"
                size="small"
                required
                value={clientInfo.phone}
                onChange={(e) => {
                  setClientInfo((p)=>{
                    return { ...p, phone: e.target.value };
                  })
                }}
              />
            </Grid>
            {/* ----------------------------------------------------- */}
            <Grid item lg={6} md={6} xs={12}>
              <label>Your Name*</label>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Write your name"
                variant="outlined"
                size="small"
                required
                value={clientInfo.name}
                onChange={(e) => {
                  setClientInfo((p)=>{
                    return { ...p, name: e.target.value };
                  })
                }}
              />
            </Grid>
            {/* ----------------------------------------------------- */}
            <Grid item lg={6} md={6} xs={12}>
              <label>Email*</label>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Contact@gmail.com"
                variant="outlined"
                size="small"
                type="email"
                required
                value={clientInfo.email}
                onChange={(e) => {
                  setClientInfo((p)=>{
                    return { ...p, email: e.target.value };
                  })
                }}
              />
            </Grid>
            {/* ------------------------------------------------------- */}

            <Grid item lg={6} md={6} xs={12}>
              <label>Location*</label>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Type your company address"
                variant="outlined"
                size="small"
                required
                value={clientInfo.location}
                onChange={(e) => {
                  setClientInfo((p)=>{
                    return { ...p, location: e.target.value };
                  })
                }}
              />
            </Grid>
            {/* ----------------------------------------------------- */}
            <Grid item lg={6} md={6} xs={12}>
              <label>Website*</label>
              <TextField
                fullWidth
                id="outlined-basic"
                label="url"
                variant="outlined"
                size="small"
                required
                value={clientInfo.website}
                onChange={(e) => {
                  setClientInfo((p)=>{
                    return { ...p, website: e.target.value };
                  })
                }}
              />
            </Grid>
            {/* ------------------------------------------------------- */}
            <Grid item lg={6} md={6} xs={12}>
              <label>Linkedin</label>
              <TextField
                fullWidth
                id="outlined-basic"
                label="url"
                variant="outlined"
                size="small"
                value={clientInfo.socialMedia.linkedIn}
                onChange={(e) => {
                  setClientInfo((p) => {
                    return {
                      ...p,
                      socialMedia: {
                        ...p.socialMedia,
                        linkedIn: e.target.value,
                      },
                    };
                  });
                }}
              />
            </Grid>
            {/* ------------------------------------------------------- */}
            <Grid item lg={6} md={6} xs={12}>
              <label>Twitter</label>
              <TextField
                fullWidth
                id="outlined-basic"
                label="url"
                variant="outlined"
                size="small"
                value={clientInfo.socialMedia.twitter}
                onChange={(e) => {
                  setClientInfo((p) => {
                    return {
                      ...p,
                      socialMedia: {
                        ...p.socialMedia,
                        twitter: e.target.value,
                      },
                    };
                  });
                }}
              />
            </Grid>
            {/* ------------------------------------------------------- */}
            <Grid item lg={12}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                type="submit"
                sx={{ float: "right",width:"150px"}}
              >
                Complete Setup
              </Button>
            </Grid>
            {/* ------------------------------------------------------- */}
          </Grid>
        </form>
      </Container>
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



