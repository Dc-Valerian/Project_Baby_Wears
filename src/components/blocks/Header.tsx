// import React from 'react'
import styled from "styled-components"
import {MdKeyboardArrowDown} from "react-icons/md"
import {BsFillPersonBadgeFill} from "react-icons/bs"
import {FaSearchengin,FaRegHeart} from "react-icons/fa"
import {HiShoppingBag} from "react-icons/hi"
import img from "../../assets/logo1.png"
import { useEffect, useState } from "react"
import GlobalButton from "../reUse/GlobalButton"
import { AiOutlineMenu } from "react-icons/ai"

const Header = () => {



  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
      const handlescroll = () => {
          const scroll = window.pageYOffset;

      if (scroll >= 400) {
          setIsSticky(true)
      } else {
          setIsSticky(false)
      }
      }

      window.addEventListener("scroll", handlescroll)

      return () => {
          window.removeEventListener("scroll", handlescroll)
      }
  })



  return (
    <div id="hero">
    {
      isSticky ? (
        <Container bcc="white" p="fixed" style={{ boxShadow: "0 0 2px #511378"}}>
        <Main> 
          <Logo>
            <Pic src={img}/>
          </Logo>

          <NavHolder>
            <Nav>Home 
              <Icon>
                <MdKeyboardArrowDown/>
              </Icon>
            </Nav>
            <Nav>
              Shop
              <Icon>
                <MdKeyboardArrowDown/>
              </Icon>
            </Nav>
            <Nav>
              Blog
              <Icon>
                <MdKeyboardArrowDown/>
              </Icon>
            </Nav>
            <Nav>
              Features
              <Icon>
                <MdKeyboardArrowDown/>
              </Icon>
            </Nav>
            <Nav>
              Pages
              <Icon>
                <MdKeyboardArrowDown/>
              </Icon>
            </Nav>
          </NavHolder> 
          
            <ButtonHold>
      <Wrap>
        <div>
          <BsFillPersonBadgeFill/>
        </div>
        <div>
          <FaRegHeart/>
        </div>
        <div>
          <HiShoppingBag/>
        </div>
        <div>
          <FaSearchengin/>
        </div>
      </Wrap>
    </ButtonHold>
        </Main>
        <Mobile >
              <AiOutlineMenu />
            </Mobile>
    </Container>
      ) :
      <Container bcc="#DDE4EA" p="">
      <Main>
        <Logo>
          <Pic src={img}/>
        </Logo>

        <NavHolder>
          <Nav>Home 
            <Icon>
              <MdKeyboardArrowDown/>
            </Icon>
          </Nav>
          <Nav>
            Shop
            <Icon>
              <MdKeyboardArrowDown/>
            </Icon>
          </Nav>
          <Nav>
            Blog
            <Icon>
              <MdKeyboardArrowDown/>
            </Icon>
          </Nav>
          <Nav>
            Features
            <Icon>
              <MdKeyboardArrowDown/>
            </Icon>
          </Nav>
          <Nav>
            Pages
            <Icon>
              <MdKeyboardArrowDown/>
            </Icon>
          </Nav>
        </NavHolder>
    <ButtonHold>
      <Wrap>
        <div>
          <BsFillPersonBadgeFill/>
        </div>
        <div>
          <FaRegHeart/>
        </div>
        <div>
          <HiShoppingBag/>
        </div>
        <div>
          <FaSearchengin/>
        </div>
      </Wrap>
    </ButtonHold>
    <Mobile >
              <AiOutlineMenu />
            </Mobile>

      </Main>
  </Container>
    }
    </div>
  )
}

export default Header
const Mobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 30px;
    cursor: pointer;
    color: #511378;
    background-color: white;
    padding: 5px 5px;
    border-radius: 5px;
  }
`;


const Wrap = styled.div`
border: 4px dotted grey;
color: white;
width:160px;
height: 33px;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: space-between;
/* background-color:red; */
font-size: 25px;
/* font-weight: 700; */
text-decoration: none solid rgb(255,255,255);


:hover{
  border:4px dotted white;

}

div{
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
  margin-left: 5px;
  margin-right:5px;
  cursor: pointer;

}
`

const ButtonHold = styled.div`
background-color: #81D1E5;
width: 200px;
height: 45px;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
 /* transition: all 350ms; */


:hover{
    cursor: pointer;
    box-shadow: 4px 4px 0 #81D1E5;
    transform: translate(-4px, -4px);
    background-color: #FF8087;
} 

@media screen and (max-width:786px) {
  /* background-color: green; */
  /* width: 100px; */
  display: none;
}
`

const Icon = styled.div`
margin-top: 5px;
`

const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
background-color: rgba(0,0,0,0);
color: #354664;
font-size: 16px;
line-height: 80px;
font-weight: 700;
text-align: left;
transition: all 350ms;

:hover{
  color: rgb(255,128,135);
  cursor: pointer;
  transform: translate(0,-5px);
}
@media screen and(max-width:768px) {
  display: none;
}
`

const NavHolder = styled.div`
display: flex;
margin-right: 460px;

@media screen and (max-width:320px) {
  /* background-color: blue; */
  display: none;
}

`

const Pic = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`

const Logo = styled.div`
width: 200px;
height: 100%;

@media screen and (max-width:500px) {
  /* background-color: yellow; */
  width: 150px;
}
`

const Main = styled.div`
/* background-color: purple;   */
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width:500px) {
  background-color: blue;
}

`

const Container = styled.div<{bcc:string; p:string}>`
background-color: ${(props)=>props.bcc};
width: 100%;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
position: ${(props)=>props.p};
z-index:99999999999;
transition: all 350ms ease-in-out;
overflow: hidden;

@media screen and (max-width:768px) {
  background-color: green;
  width: 100%;
  /* overflow: hidden; */
}
`