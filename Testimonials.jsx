import React from 'react'
import styled from 'styled-components';
import avatarImage from '../assets/service1.png';

export default function Testimonials() {
  return (
   <Section>
       <div className='title'>
           <h2>Happy Customers</h2>

       </div>

       <div className='testimonials'>
           <div className='testimonial1'>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.
                   </p>
                   <div className='info'>
                       <img src={avatarImage} alt=""/>
<div className='details'>
    <h4>Dmity Borisov</h4>
    <span>CEO-LalitCO.ltd web Solutions</span>
</div>
                   </div>

           </div>

           <div className='testimonial1'>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.
                   </p>
                   <div className='info'>
                       <img src={avatarImage} alt=""/>
<div className='details'>
    <h4> Dmity Borisov</h4>
    <span>CEO-LalitCO.ltd web Solutions</span>
</div>
                   </div>

           </div>

           <div className='testimonial1'>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.
                   </p>
                   <div className='info'>
                       <img src={avatarImage} alt=""/>
<div className='details'>
    <h4> Dmity Borisov</h4>
    <span>CEO-LalitCO.ltd web Solutions</span>
</div>
                   </div>

           </div>
       </div>
   </Section>
  )
}


const Section=styled.section`
margin:5rem 0;
.title{
    text-align: center;
    margin-bottom: 2rem;
}
.testimonials{
    font-family:poppins;
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial1{
        background-color: azure;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
        transition:0.3s ease-in-out;
        &:hover{
            transform:translateX(0.4rem) translateY(-1rem);
            box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
        }
        .info{
            display:flex;
            gap:1rem;
            align-items:center;
            justify-content:center;
            margin-top:1rem;
            img{
                height: 3rem;
                border-radius:3rem;

            }
            .details{
                .span{
                    font-size:0.9rem;
                }
            }
        }
    }
}



`;
