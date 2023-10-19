import React from "react";
import Team3 from "../../components/Team3";
import MainLayout from "../../layouts/Mainlayoutasker";
import Video2 from "../../components/Video2";
import Blogs3 from "../../components/Blogs3";
import AboutUs8 from "../../components/About-Us8";
import Services7 from "../../components/Services7";
import Testimonials1 from "../../components/Testimonials1";
import WorkWithoutFilter from "../../components/Work-Without-Filter";
import Intro3 from "../../components/Intro3asker";

const Home7asker = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  });
  return (
    <MainLayout>
      <Intro3 />
      <AboutUs8 />
      
    </MainLayout>
  );
};

export default Home7asker;
