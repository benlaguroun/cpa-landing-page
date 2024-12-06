import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import "./About.css";

const About = () => {
  return (
    <Box className="about-page" sx={{ px: 3, py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h6" align="center" gutterBottom sx={{ mb: 4 }}>
        Welcome to our CPA Landing website! We are passionate about connecting
        you with the best offers that match your needs. Explore our platform and
        find your perfect solution!
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <Avatar
              src="https://via.placeholder.com/150"
              alt="Mission"
              sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                To empower individuals by providing access to exclusive,
                personalized offers that meet their goals and challenges.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <Avatar
              src="https://via.placeholder.com/150"
              alt="Vision"
              sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1">
                To become the go-to platform for discovering and accessing the
                best CPA offers worldwide.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <Avatar
              src="https://via.placeholder.com/150"
              alt="Values"
              sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Values
              </Typography>
              <Typography variant="body1">
                Transparency, integrity, and commitment to delivering
                exceptional value to our customers.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
