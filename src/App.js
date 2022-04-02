import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import '../polyfill';
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { FooterBar } from "./components/common/footer/footer.component";
import { NavigationBar } from "./components/common/navbar/navbar.component";
import Contact from "./components/contact/contact";
import Web3Context from "./components/context/web3Context";
import FeedbackForm from "./components/feedback/feedback-form";
import Home from "./components/home/home";
import TxnDetail from "./components/txn-detail/txn-detail";
import Verify from "./components/verify/verify";

import "./App.css";

const wie2eth = (wie) => {
  return parseFloat(wie / 10 ** 18).toLocaleString("en-US", {
    minimumFractionDigits: 4,
  });
};

const App = () => {
  const [wallet, setWallet] = useState({
    address: null,
    balance: null,
  });

  const [web3Api, setWeb3Api] = useState({ provider: null, web3: null });

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        setWeb3Api({
          web3: new Web3(provider),
          provider: provider,
        });
        // return provider;
      } else {
        console.error("Please install MetaMask!");
        // return provider;
      }
    };

    getProvider();
  }, []);

  const getAccount = async () => {
    try {
    // get address
    const accounts = await web3Api.web3.eth.getAccounts();

    // get balance
    const balance = await web3Api.web3.eth.getBalance(accounts[0]);

    const walletInit = { ...wallet };
    walletInit.address = accounts[0];
    walletInit.balance = wie2eth(balance);

    setWallet({ ...walletInit });
    } catch (error) {
      // console.log('Connect wallet');
    }
  };

  useEffect(() => {
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  window.ethereum.on('accountsChanged', function (accounts) {
    window.location.reload()
  })

  return (
    <Web3Context.Provider
      value={{ account: { wallet, setWallet }, api: { web3Api, setWeb3Api } }}
    >
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
    </Web3Context.Provider>
  );
};

export default App;
