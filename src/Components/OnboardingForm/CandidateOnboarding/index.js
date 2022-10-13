import React from "react";
import { TextField, Grid, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import { Label } from "@mui/icons-material";
import FormHelperText from "@mui/material/FormHelperText";
const skills = ["react", "Node", "Full stack", "Aws"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function CandidateONboarding() {
  const theme = useTheme();
  const [skills, setSkills] = React.useState([]);
  const [domain, setDomain] = React.useState("");
  function getStyles(skill, skills, theme) {
    return {
      fontWeight:
        skills.indexOf(skill) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkills(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "#fff",
          padding: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid sm={12} md={6}>
            <label>Name</label>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid sm={12} md={6}>
            <label>email</label>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid sm={12} md={6}>
            <label>Phone no.</label>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={12} md={12}>
            <label>Education</label>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid sm={12} md={12}>
            <label>Experience</label>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid sm={12} md={6}>
            <label>linkedIn</label>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid sm={12} md={6}>
            <label>Twitter</label>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid sm={12} md={6}>
            <label>Github</label>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid sm={12} md={6}>
            <label>Instagram</label>
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={skills}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {skills.map((skill) => (
                <MenuItem
                  key={skill}
                  value={skill}
                  style={getStyles(skill, skills, theme)}
                >
                  {skill}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <la>intrested Domais</la>
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={domain}
              label="Age *"
              onChange={handleDomainChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>FrontEnd</MenuItem>
              <MenuItem value={20}>BackEnd</MenuItem>
              <MenuItem value={30}>Full stack</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </Grid>
      </div>
    </div>
  );
}

export default CandidateONboarding;

//name *
//email*
//phone*
// education
// experience
// social media url eg linkedIN , github , twitter
//intrested domain eg- forented, backend, fullstack, devops, mobile, data science, ml, ai, Marketing, sales, HR, finance, operations, product, design, content, legal, customer support, other
// skills * min 2
