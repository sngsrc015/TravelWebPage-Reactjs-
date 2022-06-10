import React from 'react'
import styled from 'styled-components';
import homeImage from '../assets/home8.jpg';

export default function Hero() {
  return <Section >
      <div className='background'>
          <img src={homeImage} alt=""/>
      </div>
      <div className='content'>
          <div className='title'>
              <h1>WELCOME TO GoWhere</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus.
              </p>

          </div>
          <div className='search'>
              <div className='container'>
                  <label htmlFor=''>Where you want to Go</label>
                  <input type='text' placeholder='Search you'/>
              </div>
              <div className='container'>
                  <label htmlFor=''>check-in</label>
                  <input type='date'/>

          </div>
          <div className='container'>
                  <label htmlFor=''>Check-out</label>
                  <input type='date'/>

          </div>
          <button>Search</button>
      </div> </div>
  </Section>
}

const Section= styled.section`
position: relative;
margin-top:2rem;
width:100%;
height:100%;
.background{
    height: 100%;
    img{
        width: 100%;
        border-radius:1.2rem;
  
      
      
     
        filter: brightness(60%);

    }
}
.content{
   
    height: 100%;
    width:100%;
    position:absolute;
    font-family:poppins;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title{
        color: white;
        h1{
            font-size: 3rem;
            letter-spacing: 0.2rem;
            

        }
        p{
            text-align: center;
            padding: 0 30vw;
            margin-top: 0.5rem;
            font-size: 1.2rem;

    
        }
    }
    
.search{
    display: flex;
    background-color: #ffffffce;
    padding: 0.5rem;
    border-radius: 0.5rem;
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label{
            font-size: 1.1rem;
            color: #030045;
        }
        input{
            background-color: transparent;
            border: none;
            text-align: center;
            color: black;
            &[type='date']{
                padding-left: 3rem;

            }
            &::placeholder{
                color: black;
            }
            &:focus{
                outline: none;
            }


        }
    }
    button{
        border-radius: 0.3rem;
        padding: 1rem;
        cursor: pointer;
        border: none;
        color: white;
        background-color:#4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover{
            background-color: #023e8a;
        }
    }
}

}








`;

