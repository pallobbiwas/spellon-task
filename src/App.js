import "./App.css";
import Acordion from "./components/Acordion";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import SubBase from "./components/SubBase";
import SubHome from "./components/SubHome";
import UnderAcordion from "./components/UnderAcordion";

function App() {
  return (
    <div>
      <Header>
        <Banner />
        <SubBase />
        <Home />
        <SubHome />
        <Acordion />
        <UnderAcordion />
        <Footer />
      </Header>
    </div>
  );
}

export default App;
