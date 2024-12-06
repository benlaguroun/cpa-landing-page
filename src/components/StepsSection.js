import React from "react";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";

const StepsSection = () => {
  const steps = [
    "Step 1: Sign Up",
    "Step 2: Complete Survey",
    "Step 3: Get Offers",
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        How It Works
      </Typography>
      <Stepper alternativeLabel sx={{ mt: 4 }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepsSection;
