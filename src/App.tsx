import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Camisas from "./Pages/PageCamisas/Camisas";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
     <>
     <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/camisas" element={<Camisas />} />
    </Routes>
    <Footer />
     </>
     
    

  );
}
export default App;
