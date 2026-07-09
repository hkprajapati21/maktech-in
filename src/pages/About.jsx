import Features from "@/components/home-one/Features";
import Video from "@/components/home-one/Video";
import Pricing from "@/components/home-three/Pricing";
import Sponsor from "@/components/home-three/Sponsor";
import Testimonial from "@/components/home-three/Testimonial";
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
      <Testimonial />
      <Sponsor />
      <Pricing classes="pt-120" />
    </>
  );
};

export default About;
