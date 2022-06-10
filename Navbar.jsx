import React from 'react'
import styled from 'styled-components';
import logo from '../assets/info2.png';

export default function Navbar() {
  return <>
  <Nav>
      <div className='brand'>
          <div className="container">
              <img src={logo} alt=""/>
             GoWhere
          </div>
          <div className="toggle"></div>
      </div>
      <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#recommend'>Places</a></li>
          <li><a href='#testimonials'>Ourmission</a></li>
      </ul>
      <button>Login</button>

  </Nav>
  </>
 
  
}

const Nav =styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
.brand{
    .container{
        color:#ffff;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:0.4rem;
        font-size:1.5rem;
        text-transform:uppercase;
        font-weight:900;
        font-family:poppins;
    }
    .toggle{
        display:none;
    }

}
ul{
    display:flex;
    list-style-type:none;
    gap:1rem;
    li{
        a{
            text-decoration:none;
            color:#ffff;
            font-size:1.2rem;
            font-family:poppins;
            transition:0ms.1s ease-in-out;
            &:hover{
                color:#023a8a;
            }

        }
       &:first-of-type{
           a{
               color:#023e8a;
               font-weight: 900;
           }
       } 
    }
}
button{
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    font-family:poppins;
    border: none;
    color:white;
    background-color: #8FA8F6;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out ;
    &:hover {
        background-color: #023a8a;
    }
}
`;