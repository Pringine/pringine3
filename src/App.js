import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { FooterBar } from "./components/common/footer/footer.component";
import { NavigationBar } from "./components/common/navbar/navbar.component";
import Contact from "./components/contact/contact";
import FeedbackForm from "./components/feedback/feedback-form";
import Home from "./components/home/home";
import TxnDetail from "./components/txn-detail/txn-detail";
import Verify from "./components/verify/verify";

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
        <Route path="/feedback/:id" element={<FeedbackForm />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      <div className="pt-3 footer">
        <FooterBar />
      </div>
    </div>
  );
}

export default App;
