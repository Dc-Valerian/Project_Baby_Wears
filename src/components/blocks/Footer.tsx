import React from "react";
import styled from "styled-components";
// import images from "../../Assets/new.png"
import foot from "../../assets/footer.jpeg"
import {AiFillClockCircle} from "react-icons/ai"
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {FiInstagram,FiYoutube} from "react-icons/fi"
import {FaLocationPin,FaPhone,FaFacebookF,FaTwitter} from "react-icons/fa6"
import {TbDeviceLandlinePhone} from "react-icons/tb"
import { Link } from "react-scroll";
import headlogo from "../../assets/footer-logo.png"


const Footer = () => {

  const [show ,setShow] = React.useState(false)

  const showBackToTop = () =>{
    if (window.scrollY >= 80){
      setShow(true);
    }else{
      setShow(false)
    }
  }

  window.addEventListener("scroll",showBackToTop)
  return (
    <Container id="footer">
      {/* <Wrapper> */}
      
       {/* <Left>
          <Images src={images} />
          <Down>© 2023 EasyHR,Inc.</Down>
        </Left>
        */}
        <Top>
          <Image>
            <Logo src={headlogo}/>
          </Image>
        </Top>
     <Right>

          <Start>
            <Bold>Information</Bold>
            <Navs>About Us</Navs>
            <Navs>Contacts</Navs>
            <Navs>FAQ</Navs>
            <Navs>BabySreet Shop</Navs>
            <Navs>Blog</Navs>
          </Start>

          <Start>
            <Bold>Extra</Bold>
            <Navs>My Account</Navs>
            <Navs>Wishlist</Navs>
            <Navs>Order Tracking</Navs>
            <Navs>Terms & Conditions</Navs>
            <Navs>Privacy Policy</Navs>
          </Start>

          <Start>
            <Bold>Have a Question ?</Bold>
          
              <Navs>
                <Icon >
                  <AiFillClockCircle/>
                </Icon>
                Mon. - Fri:09:00 - 18:30
              </Navs>

         
          <Navs>
              <Icon>
                <FaLocationPin/>
              </Icon>
              45,Prince Fadina Street,Olodi Apapa, Lagos.
            </Navs>
        
         <Navs>
              <Icon>
              <FaPhone/>
              </Icon>
              +234 905 949 3764
            </Navs>
       
         <Navs>
              <Icon>
                <TbDeviceLandlinePhone/>
              </Icon>
              +234 906 118 0473
            </Navs>
       
         <Navs>
              <Icon>
                <MdEmail/>
              </Icon>
              valerianpedro03@gmail.com
            </Navs>
       
     

          </Start>


      
        </Right>
          <IconHold>
            <Icn>
              <FaFacebookF/>
            </Icn>
            <Icn>
              <FaTwitter/>
            </Icn>
            <Icn>
              <FiYoutube/>
            </Icn>
            <Icn>
              <FiInstagram/>
            </Icn>
          </IconHold>
      {/* </Wrapper> */}

      {show ? (
        <Link offset={-7000} smooth={true} duration={5000} to="hero">
          <ScroolToTop>
            <BsFillArrowUpCircleFill />
          </ScroolToTop>
        </Link>
      ) : null}
  
    </Container>
    
  );
};

export default Footer;
const Icn = styled.div`
  width: 35px;
  height: 35px;
  font-size: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  display: flex;
  margin: 2px;
  border-radius: 50px;
  color: white;
  border: 2.9px dotted white;

  :hover{
  color:#545454;
  cursor: pointer;
  }
  /* background-color: blanchedalmond; */
`

const IconHold = styled.div`
display: flex;
margin-left: 60px;
`

const Logo = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
`

const Image = styled.div`
/* background-color: blanchedalmond; */
width: 70%;
height: 200px;
`

const Top = styled.div`
/* background-color: red; */
height: 300px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const ScroolToTop = styled.div`

border-radius: 20%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  /* background-color: #001328; */
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  right: 1%;
  font-size: 30px;
  /* box-shadow: #8a2be2 0px 8px 24px; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: fixed;
  bottom: 2%;
  @media screen and (max-width: 768px) {
    right: 3%;
  }
`

const Icon = styled.div`
  color: rgb(24,58,92);
  margin-right: 7px;
  margin-top: 2px;
  font-size: 20px;

  :hover{
    color: white;
  }
`;

const Navs = styled.div`
  font-size: 14px;
  display: flex;
  line-height: 24px;
  align-items: center;
  font-weight: 400;
  color: rgb(24,58,92);
  margin: 8px;
  cursor: pointer;
  transition: all 350ms;
  width: 100%;
  /* background-color: yellow; */
  :hover {
    transform: scale(0.98);
    margin-left: 10px;
  }
`;
const Bold = styled.h2`
  font-size: 18px;
  line-height: 23.4px;
  letter-spacing: -0.12px;
  color: rgb(24,58,92);
  margin: 8px;
  font-weight: 700;
  text-align: left;
  text-decoration: none solid rgb(24,58,92);
  /* padding-bottom: 10px; */
`;
const Start = styled.div`
  height: 100%;
  width: 24%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    margin-bottom: 15px;
    flex: auto;
  }
`;
const Right = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: green; */
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 774px) {
    width: 100%;
  }
`;



const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  background-image: url(${foot});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 320px) {
  margin-top:500px;
    /* background-color: red; */
  }
  @media screen and (max-width: 500px) {
    margin-top: -900px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }

`;


