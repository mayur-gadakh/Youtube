import React from 'react'
import styled from 'styled-components';


const Nav=styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ff0000; /* Replace with your desired background color */
  height: 60px;
  padding: 0 20px;
  color: #fff; /* Replace with your desired font color */

`

const Navbar = () => {
  return (
    <div>
      < Nav className='navbar'>
       <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>
      </Nav>
    </div>
  )
}

export default Navbar
