/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import appData from "../data/ContainHausLogo.json";
import NavbarTesla from "../components/NavbarTesla";

const LightLayout = ({ children, footerClass }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.FumeLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.FumeLogo);
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style-light.css" />
      </Head>
      <NavbarTesla navbarRef={navbarRef} logoRef={logoRef} />
      {children}
      <Footer classText={footerClass} />
    </>
  );
};

export default LightLayout;
