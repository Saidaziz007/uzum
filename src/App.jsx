import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Statistic from "./pages/statistic/Statistic";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
