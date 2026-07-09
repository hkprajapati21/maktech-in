import About from "@/components/home-three/About";
import Blog from "@/components/home-three/Blog";
import Contact from "@/components/home-three/Contact";
import Faq from "@/components/home-three/Faq";
import Footer from "@/components/home-three/Footer";
import Header from "@/components/home-three/Header";
import Hero from "@/components/home-three/Hero";
import Newsletter from "@/components/home-three/Newsletter";
import Portfolio from "@/components/home-three/Portfolio";
import Pricing from "@/components/home-three/Pricing";
import ProvideService from "@/components/home-three/ProvideService";
import Service from "@/components/home-three/Service";
import Sponsor from "@/components/home-three/Sponsor";
import Support from "@/components/home-three/Support";
import Testimonial from "@/components/home-three/Testimonial";

const HomeThree = () => {
  return (
    <>
      <Header />
      {/* <!-- Hero  --> */}
      <Hero />

      {/* <!-- Service  --> */}
      <Service />

      {/* <!-- About US --> */}
      <About />

      {/* <!-- Sponsor Section  --> */}
      <Sponsor classes="mt" />

      {/* <!-- We Provide Section  --> */}
      <ProvideService />

      {/* <!-- Testimonial Section  --> */}
      <Testimonial />

      {/* <!-- FAQ --> */}
      <Faq />

      {/* <!-- NewsLetter Section  --> */}
      <Newsletter />

      {/* <!-- Pricing Section  --> */}
      <Pricing />

      {/* <!-- Portfolio Section  --> */}
      <Portfolio />

      {/* <!--  Support Section   --> */}
      <Support />

      {/* <!-- Contact Section  --> */}
      <Contact />

      {/* <!-- Blog Section --> */}
      <Blog />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default HomeThree;
