import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import heroBg from "../images/hero-bg.jpg"; // Import the background image

const SurveyForm = () => (
  <form>
    <TextField
      label="What's your biggest challenge?"
      variant="outlined"
      fullWidth
      margin="normal"
    />
    <TextField
      label="Enter your email"
      variant="outlined"
      fullWidth
      margin="normal"
    />
    <Button variant="contained" color="primary" fullWidth>
      Submit
    </Button>
  </form>
);

const HeroSection = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh", // Adjusted to cover full viewport height
      backgroundImage: `url(${heroBg})`, // Use imported image
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed", // Makes the background fixed while scrolling
      color: "white",
      textAlign: "center",
      p: 4,
    }}
  >
    <Typography variant="h3" gutterBottom>
      Find Your Perfect Solution!
    </Typography>
    <Typography variant="h6" gutterBottom>
      Answer a few quick questions and discover our exclusive offers.
    </Typography>
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent background for the form
        borderRadius: 2,
        p: 3,
        mt: 3,
        width: "100%",
        maxWidth: 400,
      }}
    >
      <SurveyForm />
    </Box>
  </Box>
);

export default HeroSection;
