import AboutUs from "@/components/home-one/AboutUs";
import AboutUsTwo from "@/components/home-one/AboutUsTwo";
import Blogs from "@/components/home-one/Blogs";
import Features from "@/components/home-one/Features";
import Header from "@/components/home-one/Header";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import Hero from "@/components/home-one/Hero";
import Newsletter from "@/components/home-one/Newsletter";
import Portfolio from "@/components/home-one/Portfolio";
import Question from "@/components/home-one/Question";
import Service from "@/components/home-one/Service";
// import Sponsor from "@/components/home-one/Sponsor";
import Stats from "@/components/home-one/Stats";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <Service />
        <AboutUs />
        <AboutUsTwo />
        <Features />
        <Portfolio />
        {/* <Sponsor /> */}
        <Question />
        <Newsletter />
        <Stats />
        <Blogs />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Home;
