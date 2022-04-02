import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { FooterBar } from "./components/common/footer/footer.component";
import { NavigationBar } from "./components/common/navbar/navbar.component";
import Contact from "./components/contact/contact";
import WalletContext from "./components/context/walletContext";
import FeedbackForm from "./components/feedback/feedback-form";
import Home from "./components/home/home";
import TxnDetail from "./components/txn-detail/txn-detail";
import Verify from "./components/verify/verify";

function App() {
  const [wallet, setWallet] = useState({
    address: "0xac0935971d17336d8b4ba5a823f5adb0c5c5f4e7",
    balance: "98.5",
  });
  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
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
    </WalletContext.Provider>
  );
}

export default App;
