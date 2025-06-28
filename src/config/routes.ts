import { createBrowserRouter } from "react-router";
import Navbar from "@/components/user/layout/navbar";
import Home from "@/features/home";
import AboutUs from "@/features/about-us";
import ContactUs from "@/features/contact-us";
const routes = [
  {
    path: "/",
    Component: Navbar,
    children: [
      {
        path: "",
        children: [{ index: true, Component: Home }],
      },
      {
        path: "about",
        children: [{ index: true, Component: AboutUs }],
      },
      {
        path: "contact",
        children: [{ index: true, Component: ContactUs }],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
