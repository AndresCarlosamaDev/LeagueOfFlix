import "./App.css";
import "./assets/css/base/base.css"
import { Header } from "./Components/Home/Header";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Home/Footer";
import { NuevoVideo } from "./Pages/NuevoVideo";
import { NuevaCategoria } from "./Pages/NuevaCategoria";
import { Page404 } from "./Pages/Page404";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nuevo-video" element={<NuevoVideo />}></Route>
        <Route path="/nueva-categoria" element={<NuevaCategoria />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
