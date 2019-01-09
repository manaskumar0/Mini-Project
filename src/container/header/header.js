import React, { Component } from 'react';
import {
    Navbar, Nav, NavItem, NavbarBrand, NavLink, Button, Collapse,
    NavbarToggler,
    Input,
    InputGroupAddon,
    FormGroup,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">WelCome to My Cart</NavbarBrand>

                    <Nav className="ml-left">
                        <NavItem>
                            <Input type="text" placeholder="Search..." />
                        </NavItem>
                        <NavItem>
                            <Button color="primary">Search</Button>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/landing">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/p1">Offer</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/p3">P3</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/p3">Cart</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                My Account
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    My Order
                                </DropdownItem>
                                <DropdownItem>
                                    Update Account
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Button color="danger">Logout</Button>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;