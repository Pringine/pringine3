import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Web3Context from "../../context/web3Context";

import "./navbar.css";

const connectWallet = async (provider) => {
  await provider.request({
    method: "eth_requestAccounts",
  });
};

export const NavigationBar = () => {
  const web3 = useContext(Web3Context);
  return (
    <>
      <Navbar expand="lg" bg="" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <b>Pringine</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/verify" className="ms-md-5">
                Verify
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="ms-md-5">
                Contact Us
              </Nav.Link>
              {web3.account.wallet.address ? (
                <Button
                  variant="light"
                  size="md"
                  className="ms-md-5"
                  disabled={true}
                >
                  Connected
                </Button>
              ) : (
                <Button
                  variant="light"
                  size="md"
                  className="ms-md-5"
                  onClick={() => connectWallet(web3.api.web3Api.provider)}
                >
                  Connect Wallet
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
