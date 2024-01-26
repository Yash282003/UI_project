import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import HobbyCueLogo from "../images/HobbyCueLogo.png";
import bookmark from "../images/bookmark.png";
import Explore from "../images/Explore.png";
import Hobbies from "../images/Hobbies.png";
import notification from "../images/notification.png";
import shopping from "../images/shopping.png";
import { IoSearch } from "react-icons/io5";
import search  from "../images/search.png";
import "../styles/Navbar.css";
function NavbarBootStrap() {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container className="container">
        <Navbar.Brand href="#" className="navbar-logo">
          <img src={HobbyCueLogo} alt="img" />
        </Navbar.Brand>
        <div className="serch-icon">
        <img src={search} />
        </div>
        <div className="notify-icon">
          <img src={notification} />
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <div className="input-wrapper">
            <input placeholder="Search here..." className="navbar-input" />

            <div className="search-icon-wrapper">
              <IoSearch id="search-icon" />
            </div>
          </div>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="links-wrapper">
              <img src={Explore} />
              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Explore</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="links-wrapper">
              <img src={Hobbies} />
              <NavDropdown title="Hobbies" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Explore</NavDropdown.Item>

                <NavDropdown.Divider />
              </NavDropdown>
            </div>
            <div className="links-wrapper">
              <img src={bookmark} />
            </div>
            <div className="links-wrapper">
              <img src={notification} />
            </div>
            <div className="links-wrapper">
              <img src={shopping} />
            </div>
            <Button variant="outline-success">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBootStrap;
