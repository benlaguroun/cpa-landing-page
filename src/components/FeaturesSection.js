import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const FeaturesSection = () => (
  <Box sx={{ py: 6, backgroundColor: "#f4f6f8" }}>
    <Typography variant="h4" align="center" gutterBottom>
      Why Choose Us
    </Typography>
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {["Feature 1", "Feature 2", "Feature 3"].map((feature, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper sx={{ p: 3, textAlign: "center" }} elevation={3}>
            <Typography variant="h6">{feature}</Typography>
            <Typography variant="body2">Description of {feature}.</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default FeaturesSection;
