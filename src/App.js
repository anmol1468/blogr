import "./App.css";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { featuresData } from "./data";
import chartIllustration from "./assets/images/illustration-editor-desktop.svg";
import chartIllustrationMobile from "./assets/images/illustration-editor-mobile.svg";
import laptopIllustration from "./assets/images/illustration-laptop-desktop.svg";
import laptopIllustrationMobile from "./assets/images/illustration-laptop-mobile.svg";

function App() {
  const mobile = window.screen.width <= 768;

  console.log(mobile);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features
        title="Designed for the Future"
        features={featuresData.slice(0, 2)}
        img={mobile ? chartIllustrationMobile : chartIllustration}
      />
      <Banner />
      <Features
        features={featuresData.slice(2, 4)}
        img={mobile ? laptopIllustrationMobile : laptopIllustration}
        reverse={!mobile}
      />
      <Footer />
    </div>
  );
}

export default App;
