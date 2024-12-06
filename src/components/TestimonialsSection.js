import React from "react";
import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Great service!",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Loved the offers!",
    avatar: "/path/to/avatar2.jpg",
  },
];

const TestimonialsSection = () => (
  <Box sx={{ py: 6, backgroundColor: "#ffffff" }}>
    <Typography variant="h4" align="center" gutterBottom>
      What Our Customers Say
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Paper
            sx={{ p: 3, display: "flex", alignItems: "center" }}
            elevation={3}
          >
            <Avatar src={testimonial.avatar} sx={{ mr: 2 }} />
            <div>
              <Typography variant="h6">{testimonial.name}</Typography>
              <Typography variant="body2">{testimonial.feedback}</Typography>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default TestimonialsSection;
