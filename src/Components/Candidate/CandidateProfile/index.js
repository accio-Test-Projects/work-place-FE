import React, { useEffect, useState } from "react";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../../config/firebaseInitisize";
import { TextField, Grid, Box, Button } from "@mui/material";
function CandidateProfile() {
  const [candidateData, setCandidateData] = useState(null);
  const [editState, setEditState] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  let userId = user.uid;
  async function getProfile() {
    try {
      const docRef = doc(db, "usersData", userId);
      const docData = await getDoc(docRef);
      if (docData.exists()) {
        console.log("Document data:", docData.data());
        setCandidateData({ ...docData.data() });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  const saveProfile = async (e) => {
    if (editState) {
      e.preventDefault();
      try {
        await setDoc(doc(db, "usersData", userId), {
          ...candidateData,
        });
        alert('Profile Updated')
      } catch (e) {
        alert("Error occored");
        console.error("Error adding document: ", e);
      }
    }
    setEditState(!editState);
  };
  return (
    <div>
      {candidateData ? (
        <div>
          <Grid style = {{width:'92%'}} container spacing={8} justifyContent="right">
            <Grid style = {{marginRight:"20px"}} item xs={1} md={1}>
              <Button style={{height: "35px", background: '#26D7AB', color: "white" }} onClick={saveProfile}>
                {editState ? "save" : "Edit"}
              </Button>
            </Grid>
            <Grid item xs={2} md={2}>
              <Button style={{ height: "35px", border: "1px solid #26D7AB", color: "#26D7AB" }}>
                <svg style={{width:"20px", marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
              </svg>
                Logout</Button>
            </Grid>
          </Grid>
          <Grid style = {{ width:"70%", margin:'auto'}} container columnSpacing={2} rowSpacing={4}>
            <Grid item xs={12} md={12}>
              <label>
                Name<span style={{ color: "red" }}>*</span>
              </label>
              <TextField
                disabled={!editState}
                required
                value={candidateData.name}
                onChange={(e) => {
                  setCandidateData((p) => {
                    return { ...p, name: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label>
                Email<span style={{ color: "red" }}>*</span>
              </label>
              <TextField
                disabled={!editState}
                required
                type="email"
                value={candidateData.email}
                onChange={(e) => {
                  setCandidateData((p) => {
                    return { ...p, email: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <label>
                Phone no.<span style={{ color: "red" }}>*</span>
              </label>
              <TextField
                disabled={!editState}
                required
                type="number"
                inputProps={{ maxLength: 10 }}
                value={candidateData.phone}
                onChange={(e) => {
                  setCandidateData((p) => {
                    return { ...p, phone: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <label>Education</label>
              <TextField
                disabled={!editState}
                value={candidateData.education}
                onChange={(e) => {
                  setCandidateData((p) => {
                    return { ...p, education: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <label>Experience</label>
              <TextField
                disabled={!editState}
                value={candidateData.experience}
                onChange={(e) => {
                  setCandidateData((p) => {
                    return { ...p, experience: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <label>LinkedIn</label>
              <TextField
                disabled={!editState}
                value={candidateData.socialMedia.linkedIn}
                onChange={(e) => {
                  setCandidateData((p) => {
                    return {
                      ...p,
                      socialMedia: {
                        ...p.socialMedia,
                        linkedIn: e.target.value,
                      },
                    };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label>Twitter</label>
              <TextField
                disabled={!editState}
                value={candidateData.socialMedia.twitter}
                onChange={(e) => {
                  setCandidateData((p) => {
                    return {
                      ...p,
                      socialMedia: {
                        ...p.socialMedia,
                        twitter: e.target.value,
                      },
                    };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <label>Github</label>
              <TextField
                disabled={!editState}
                value={candidateData.socialMedia.github}
                onChange={(e) => {
                  setCandidateData((p) => {
                    return {
                      ...p,
                      socialMedia: { ...p.socialMedia, github: e.target.value },
                    };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label>Instagram</label>
              <TextField
                disabled={!editState}
                value={candidateData.socialMedia.instagram}
                onChange={(e) => {
                  setCandidateData((p) => {
                    return {
                      ...p,
                      socialMedia: {
                        ...p.socialMedia,
                        instagram: e.target.value,
                      },
                    };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            {/* <Grid item xs={12} md={6}>
              <la>
                Tags<span style={{ color: "red" }}>*</span>
              </la>
              <FormControl required sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Select
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={candidateData.skills}
                  onChange={handleSkillsChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {skillsList.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox
                        checked={candidateData.skills.indexOf(name) > -1}
                      />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <la>
                interested Domains<span style={{ color: "red" }}>*</span>
              </la>
              <FormControl fullWidth required sx={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-required-label">
                  Select
                </InputLabel>
                <Select
                  sx={{ width: "85%" }}
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={candidateData.domain}
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
            </Grid> */}
          </Grid>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default CandidateProfile;
