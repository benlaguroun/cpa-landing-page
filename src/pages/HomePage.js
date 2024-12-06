import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";

import Footer from "../components/Footer";

const HomePage = () => (
  <>
    <HeroSection />
    <CallToActionSection />
    <FeaturesSection />
    <StepsSection />
    <TestimonialsSection />
    <Footer />
  </>
);

export default HomePage;
