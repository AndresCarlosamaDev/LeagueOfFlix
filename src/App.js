import "./App.css";
import { Header } from "./Components/Header";
import { Banner } from "./Components/Banner";
import { Videos } from "./Components/videos";
import { SobreBanner } from "./Components/SobreBanner";
import { Footer } from "./Components/Footer";
import { Button } from "./Components/Button";

function App() {
  return (
    <>
      <Header />
      <SobreBanner />
      <Banner />
      <Videos />
      <Footer />
    </>
  );
}

export default App;
