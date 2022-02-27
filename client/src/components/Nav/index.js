import React from "react";
import Auth from "../../utils/auth";
import { stack as Menu } from "react-burger-menu";



class Nav extends React.Component {
    showSettings(event) {
      event.preventDefault();
    }
    render() {
      if (Auth.loggedIn()) {
        return (
          <Menu noOverlay>
            <a href="/" id="home" className="menu-item">
            Home✩
          </a>
          <br/>
          <a href="/about" id="about" className="menu-item">
            About✩
          </a>
          <br/>
          <a href="/" onClick={() => Auth.logout()}>
            Logout✩
          </a>
          <br/>
          <a href="/store" id="store" className="menu-item">
            Store✩
          </a>
          <br/>
          <a href="/contact" id="contact" className="menu-item">
            Contact✩
          </a>
          <br/>
          <a href="/events" id="events" className="menu-item">
            Events✩
          </a>
          </Menu>
        )
      } else {
      return (
        <Menu noOverlay>
          <a href="/" id="home" className="menu-item">
            Home✩
          </a>
          <br/>
          <a href="/about" id="about" className="menu-item">
            About✩
          </a>
          <br/>
          <a href="/login" id="login" className="menu-item">
            Login✩
          </a>
          <br/>
          <a href="/signup" id="signup" className="menu-item">
            Sign Up✩
          </a>
          <br/>
          <a href="/store" id="store" className="menu-item">
            Store✩
          </a>
          <br/>
          <a href="/contact" id="contact" className="menu-item">
            Contact✩
          </a>
          <br/>
          <a href="/events" id="events" className="menu-item">
            Events✩
          </a>
          <a
            onClick={this.showSettings}
            className="menu-item--small"
            href=""
          ></a>
        </Menu>
      );
    }
  };
  }


export default Nav;
