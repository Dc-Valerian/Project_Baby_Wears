// import React from 'react'
import styled from "styled-components"
import {MdKeyboardArrowDown} from "react-icons/md"
import {BsFillPersonBadgeFill} from "react-icons/bs"
import img from "../../assets/logo1.png"

const Header = () => {
  return (
    <div>
        <Container>
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
                <Button>
                  <BsFillPersonBadgeFill/>
                </Button>
                <Button>
                  <BsFillPersonBadgeFill/>
                </Button>
                <Button>
                  <BsFillPersonBadgeFill/>
                </Button>
                <Button>
                  <BsFillPersonBadgeFill/>
                </Button>
              </ButtonHold>
            </Main>
        </Container>
    </div>
  )
}

export default Header


const Button = styled.div``

const ButtonHold = styled.div`
display: flex;
background-color: #7AC6D9;
align-items: center;
justify-content: center;
width: 100px;
height: 40px;
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

:hover{
  color: rgb(255,128,135);
  cursor: pointer;
}
`

const NavHolder = styled.div`
display: flex;
margin-right: 460px;
`

const Pic = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`

const Logo = styled.div`
width: 200px;
/* background-color: yellow; */
height: 100%;
`

const Main = styled.div`
/* background-color: purple;   */
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between
;
`

const Container = styled.div`
background-color: #FFFFFF;
width: 100%;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
/* position: fixed; */
`