import HeaderSection from "./HeaderSection";
import MainContent from "./MainContent";
import FooterSection from "./FooterSection";
import NavBar from "../NavBar/Navbar";
import Graph3DSection from "./Graph3DSection";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="px-[24px] py-[18px]">
        <HeaderSection />
        <FooterSection />
        <Graph3DSection />
        <MainContent />
      </div>
    </>
  );
};

export default LandingPage;
