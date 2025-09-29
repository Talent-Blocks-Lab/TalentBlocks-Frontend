const About = () => {
  return (
    <section
      id="about-us"
      className="flex md:flex-row flex-col md:gap-[49px] bg-neutral-blue pt-12 pb-4 md:pb-16 px-8 lg:mx-7 lg:pt-20 xl:pt-24 lg:pb-12 xl:pb-24 md:px-2 lg:px-16"
    >
      <img
        src="/assets/about.svg"
        alt="about"
        className="hidden md:block w-64 h-[356px] md:w-[456px]"
      />
      <div className="flex-col justify-center">
        <h6 className="text-sm text-orange mb-[12px]">
          Welcome to TalentBlocks Lab
        </h6>
        <h2 className="text-black text-3xl lg:text-4xl font-[600] leading-[54px] mb-[24px]">
          From Grassroots to Global Impact
        </h2>
        <img
          src="/assets/about.svg"
          alt="about"
          width={700}
          className="md:hidden mb-5"
        />
        <p className="text-sm text-[#555] font-[400] leading-6 lg:leading-8">
          TalentBlocks Lab is a grassroots-focused Web3 community platform
          committed to building talents from the ground up. We discover,
          nurture, and empower individuals from underrepresented and overlooked
          communities across Africa, providing them with the tools, knowledge,
          and opportunities to thrive in both Web2 and Web3 technologies. We
          don't just teach skills — we create pathways from curiosity to
          expertise to leadership.
        </p>
      </div>
    </section>
  );
};

export default About;
