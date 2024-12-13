const About = () => {
  return (
    <section
      id="about-us"
      className="bg-neutral-blue py-[76px] px-[120px] flex gap-[89px]">
      <img src="/src/assets/about.svg" alt="about" height={549} width={456} />
      <div className="flex-col justify-center mt-[97px]">
        <h6 className="text-sm text-orange mb-[12px]">
          Welcome to TalentsBlocks
        </h6>
        <h2 className="text-black text-4xl font-[600] leading-[54px] mb-[24px]">
          Where Innovation Meets Expertise
        </h2>
        <p className="text-sm text-[#555] font-[400] leading-[30px]">
          At TalentsBlocks, we recognize the power of hands-on, face-to-face
          learning. In the ever-evolving landscape of technology, nothing beats
          the immersive experience of a physical classroom. We're not just an
          educational institution; we're a community of learners and mentors
          committed to sculpting the digital leaders of tomorrow.
        </p>
      </div>
    </section>
  );
};

export default About;
