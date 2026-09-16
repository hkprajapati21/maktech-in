import Header from "@/components/home-two/Header";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default RootLayout;
