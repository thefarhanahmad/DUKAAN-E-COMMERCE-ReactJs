import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </div>
  );
};

export default App;
