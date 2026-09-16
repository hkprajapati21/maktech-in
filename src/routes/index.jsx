import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogDetails from "@/pages/BlogDetails";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ServiceDetails from "@/pages/ServiceDetails";
import Sitemap from "@/pages/Sitemap";
import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <ServiceDetails />,
      },
      {
        path: "/services/:slug",
        element: <ServiceDetails />,
      },
      {
        path: "/service-details",
        element: <Navigate to="/services" replace />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogs/:slug",
        element: <BlogDetails />,
      },
      {
        path: "/blog-details",
        element: <Navigate to="/blogs" replace />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/sitemap",
        element: <Sitemap />,
      },
      {
        path: "/faq",
        element: <Navigate to="/#faqs" replace />,
      },
    ],
  },
]);
