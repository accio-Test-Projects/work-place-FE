import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { BorderAllRounded } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Search from "../../../assets/svgFile/search.svg";
import Location from "../../../assets/svgFile/location.svg";
import { display } from "@mui/system";

export default function Containers() {
  return (
        <Box variant="div"
          sx={{
            
            bgcolor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin:"0px"
            // alignContent:"center"
          }}
          maxWidth="xl"
        >
          <Box sx={{marginTop:{ xs: "1vh", md: "10vh" } ,display:"flex", flexDirection:"column"}}>
            <Box sx={{display:"flex",alignItems:"center"}}>

            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "5.5vw",
                lineHeight: "6vh",
                textAlign: "center",
                color: "#000000",
              }}
            >
              Get The
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "5.5vw",
                lineHeight: "6vh",
                textAlign: "center",
                color: "#4540DB",
              }}
            >
              &nbsp;Right Job
            </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "5.5vw",
                lineHeight: "6vh",
                textAlign: "center",
                color: "#000000",
                marginTop:{ xs: "-3vh", md: "10vh" }
              }}
            >
              You Deserve
            </Typography>
          </Box>
            <Typography
              sx={{
                marginTop: { xs: "2vh", md: "15vh" },
                fontWeight: "400",
                fontSize: "3vw",
                lineHeight: "3vh",
                textAlign: "center",
                color: "#000000",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              786 jobs & 110 candidates are registeresd
            </Typography>
          
          <Box
            sx={{
              // position: "relative",
              bgcolor: "#FFFFFF",
              ShadowRoot: "0px 1px 22px 1px rgba(69, 64, 219, 0.04)",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom:{ xs: "10%", md: "20vh" },
              width:"70%", maxHeight:"35px",marginTop:{ xs: "6%", md: "12vh" }
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center",  }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // width: "323px",
                  borderRight: ".2vw solid #878787",
                }}
              >
                <img src={Search} style={{maxWidth:"35px",width:{ xs: "10%", md: "100%"},maxHeight:"35px",height:{ xs: "10%", md: "100%" }}}/>
                <Input
                  sx={{
                    
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "2vw",
                    lineHeight: "2vh",
                    textAlign: "center",
                    borderColor: "white",
                    outlineWidth:"0"
                  }}
                  placeholder="Search Title or Keyword"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  marginLeft: ".3vw",
                  alignItems: "center",
                }}
              >
                <img src={Location} style={{maxWidth:"35px",width:{ xs: "10%", md: "90%" }}}/>
               <Input
                  sx={{
                    

                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "2vw",
                    lineHeight: "2vh",
                    textAlign: "center",
                    color: "#878787",
                  }}
                  placeholder="Search Location"
                />
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                borderRadius: "1.5vw",
                bgcolor: "#4540DB",
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      
    
  );
}
