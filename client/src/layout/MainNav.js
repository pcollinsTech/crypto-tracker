import React from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';



export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);     
    this.dropDownToggle = this.dropDownToggle.bind(this);     

  }
  
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  dropDownToggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }
  render() {
    return (
      <React.Fragment>
        <Navbar className="fixed-top mb-3 main__nav" expand="md">
        <div className="container">
        
          <NavbarBrand href="/">Crypto Coach</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <Link to="/get-started" className="nav-link">Getting Started</Link>
              </NavItem>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropDownToggle}>
              <DropdownToggle >
                Academy
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><Link to="what-is-bitcoin">What is Bitcoin?</Link></DropdownItem>
                <DropdownItem><Link to="what-is-ethereum">What is Ethereum?</Link></DropdownItem>
                <DropdownItem><Link to="what-is-cryptocurrency">What is CryptoCurrency?</Link></DropdownItem>
                <DropdownItem><Link to="what-is-a-wallet">What is a Wallet?</Link></DropdownItem>
                <DropdownItem><Link to="what-is-a-blockchain">What is a Blockchain?</Link></DropdownItem>
                <DropdownItem><Link to="what-is-money">What is Money?</Link></DropdownItem>
                <DropdownItem><Link to="what-is-an-altcoin">What is an Altcoin</Link></DropdownItem>
              </DropdownMenu>
            </Dropdown>
              <NavItem>
                <Link to="/exchange-finder" className="nav-link">Exchange Finder</Link>
              </NavItem>
              <NavItem>
                <Link to="/blog" className="nav-link">Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">About Us</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
        </Navbar>
      </React.Fragment>
    );
  }
}