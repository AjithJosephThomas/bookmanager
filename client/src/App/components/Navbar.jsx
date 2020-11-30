import React from 'react';
import {Navbar as StyledComponent } from "../../style";
const Navbar = () => (
  <StyledComponent>
        <div>
            <h1>Book Manager</h1>
        </div>
        <div>
            <ul className="nav-menu">
                <li><a href="/allbooks">Main</a></li>
                <li><a href="/create-book">Create Book</a></li>
                <li><a href="/create-author">Create Author</a></li>
            </ul>
        </div>
  </StyledComponent>
)
export default Navbar;