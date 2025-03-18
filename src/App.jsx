import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Footer from "./components/Footer";
import SignIn from "./components/signin";
import Signup from "./components/signup";
import { AuthProvider } from "./context/AuthContext";
import Logout from "./components/logout";
import PurchaseInfo from "./pages/Purchase";

const App = () => {
  
  return (
   
    <div>
      
      <Navbar />
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/purchase-info/:id" element={<PurchaseInfo />} />
      </Routes>
      </AuthProvider>
      <Footer />
    </div>
   
  );
};

export default App;

