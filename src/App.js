import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FooterBar } from "./components/footer/footer.component";
import { NavigationBar } from "./components/navbar/navbar.component";
import Contact from "./pages/contact/contact";
import FeedbackForm from "./pages/feedback/feedback-form";
import Home from "./pages/home/home";
import TxnDetail from "./pages/txn-detail/txn-detail";
import Verify from "./pages/verify/verify";

function App() {
  return (
    <div className="App">
      <div className="navigationbar">
        <NavigationBar />
      </div>

      <Routes>
        {/* <Route path="/transaction-detail" element={<TxnDetail />} /> */}
        <Route path="/verify/:id" element={<TxnDetail />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <div className="footer">
        <FooterBar />
      </div>
    </div>
  );
}

export default App;
