import styled from "styled-components"
import img from "../assets/hero.jpeg"
import slider from "../assets/slider4.webp"
import slider1 from "../assets/slider3.webp"
// import pic from "../assets/wave.svg"
import GlobalButton from "../components/reUse/GlobalButton"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed:500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
  };
  return (
    <div style={{overflow:"hidden"}}>
      <Slider {...settings}>
     <div>
     <Container>
      <Image bcc={img}>
      <Wrapper>
        <Title>
           {/* Shine Bright */}
           Val's Kiddies Wears
          </Title>
          <Sub>
            Like a SuperStar
          </Sub>
          <ButtonHold>
           <GlobalButton width="120px" title="Shop Girls" bcc="#F69697" hvbcc="#82CAE1" subwidth="110px" hvcl="#F59495"/>
           <GlobalButton width="120px" title="Shop Boys" bcc="#82CAE1" hvbcc="#F59495" subwidth="110px" hvcl="#82CAE1"/>
          </ButtonHold>
     
        </Wrapper>
      </Image>
        {/* <Wave>
          <Img src={pic}/>
        </Wave> */}
      </Container>
     </div>
     
     <div>
     <Container>
     <Image bcc={slider}>
      <Wrapper>
        <Title>
           Shine Bright
           
          </Title>
          <Sub>
            Like a SuperStar
          </Sub>
          <ButtonHold>
           <GlobalButton width="120px" title="Shop Girls" bcc="#F69697" hvbcc="#82CAE1" subwidth="110px" hvcl="#F59495"/>
           <GlobalButton width="120px" title="Shop Boys" bcc="#82CAE1" hvbcc="#F59495" subwidth="110px" hvcl="#82CAE1"/>
          </ButtonHold>
     
        </Wrapper>
        </Image>
        {/* <Wave>
          <Img src={pic}/>
        </Wave> */}
      </Container>
     </div>
     <div>
     <Container>
     <Image bcc={slider1}>
      <Wrapper>
        <Title>
           Bright Future
           
          </Title>
          <Sub>
            Like a SuperStar
          </Sub>
          <ButtonHold>
           <GlobalButton width="120px" title="Shop Girls" bcc="#F69697" hvbcc="#82CAE1" subwidth="110px" hvcl="#F59495"/>
           <GlobalButton width="120px" title="Shop Boys" bcc="#82CAE1" hvbcc="#F59495" subwidth="110px" hvcl="#82CAE1"/>
          </ButtonHold>
     
        </Wrapper>
        </Image>
        {/* <Wave>
          <Img src={pic}/>
        </Wave> */}
      </Container>
     </div>

        </Slider>
    </div>
  )
}

export default Hero

const ButtonHold = styled.div`
display: flex;  
margin-top: 30px;
`

const Sub = styled.div`
color: rgb(255,255,255);
background-color: rgba(0,0,0,0);
font-size: 36px;
line-height: 36px;
letter-spacing: normal;
font-weight: 700;
text-align: center;
text-decoration: none solid rgb(255,255,255);
`

const Title = styled.div`
color: rgb(255,255,255);
background-color: rgba(0,0,0,0);
font-family: Hensa-Regular;
font-size: 90px;
line-height: 100px;
font-weight: 400;
text-align: center;
text-decoration: none solid rgb(255,255,255);
`

const Wrapper = styled.div`
/* background-color: yellowgreen; */
height: 100%;
width: 60%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

// const Img = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `

// const Wave = styled.div`
// /* position: relative; */
// /* background-color: red; */
// height: 50px;
// width: 100%;
// `


const Image = styled.div<{bcc:string}>`
background-image:url(${(props)=>props.bcc});
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

const Container = styled.div`
/* background-color: brown; */
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
/* background-image: url(${img}); */
background-repeat: no-repeat;
background-size: cover; 
flex-direction: column;
/* position: relative; */
/* margin-top: 70px; */
overflow: hidden;


`

// const Container = styled.div`
//    width: 100%;
//   height: 100vh;
//   // padding-top: 80px;
//   // padding-bottom: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   overflow: hidden;

//   @media screen and (max-width: 768px) {
//     height: 100%;
//     background-image: url(${img});
//     background-position: contain;
//   }
// `