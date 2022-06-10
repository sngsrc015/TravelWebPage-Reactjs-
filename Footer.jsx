import React from 'react'
import styled from 'styled-components';
import {BsLinkedin,BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';

export default function Footer() {
  return<FooterContainer>
      <span>Copyright &copy; 2022 Modulub. All rights rserved</span>
      <ul className='links'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#recommend'>Places</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
      </ul>  
      <ul className='social_links'>
          <li><BsFacebook/></li>
          <li><BsLinkedin/></li>
          <li><AiFillInstagram/></li>
      </ul>
  </FooterContainer>
} 

const FooterContainer=styled.footer`
display:flex;
background-color:#d0d8ff;
padding:2.5rem;
border-radius:0.5rem;
justify-content:space-evenly;
ul{
    display:flex;
    list-style-type:none;
    gap:2rem;
    li{
        a{
          text-decoration:none; 
          transition:0.3s ease-in-out;
          color:black;
          font-family:poppins;
          &:hover{
              color:#302ce9;
          } 
        }
        svg{
            font-size:1.3rem;
            transition:0.3s ease-in-out;
            &:hover{
                color:#302ce9;
        }
    }
}





`;