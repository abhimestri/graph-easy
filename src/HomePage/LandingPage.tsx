import HeaderSection from "./HeaderSection";
import MainContent from "./MainContent";
import FooterSection from "./FooterSection";
import NavBar from "../NavBar/Navbar";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="px-[24px] py-[18px]">
        <HeaderSection />
        <FooterSection />
        <MainContent />
      </div>
    </>
  );
};

export default LandingPage;
