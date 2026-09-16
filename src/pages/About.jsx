import Features from "@/components/home-one/Features";
import Video from "@/components/home-one/Video";
import AboutUs from "@/components/home-two/AboutUs";
import SectionTop from "@/components/shared/SectionTop";

const About = () => {
  return (
    <>
      <SectionTop title={"About Us"} />
      <div className="pt-120">
        <AboutUs />
      </div>
      <Features />
      <Video />
    </>
  );
};

export default About;
