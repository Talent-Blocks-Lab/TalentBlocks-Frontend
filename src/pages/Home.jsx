import React from "react";
import {
  About,
  CTAcontent,
  CTAsection,
  Explore,
  FAQs,
  Footer,
  Hero,
  Testimonials,
  WhyUs,
} from "../components/index";

function Home() {
  return (
    <main className="max-w-full">
      <Hero />
      {/* <About />
      <Explore />
      <CTAcontent />
      <WhyUs />
      <Testimonials />
      <FAQs />
      <CTAsection />
      <Footer/> */}
    </main>
  );
}

export default Home;
