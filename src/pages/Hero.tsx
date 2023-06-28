import styled from "styled-components"
import img from "../assets/hero.jpeg"
// import pic from "../assets/wave.svg"
import GlobalButton from "../components/reUse/GlobalButton"

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>
            Shine Bright
          </Title>
          <Sub>
            Like a SuperStar
          </Sub>
          <ButtonHold>
           <GlobalButton width="120px" title="Shop Girls" bcc="#F69697" hvbcc="#82CAE1"/>
           <GlobalButton width="120px" title="Shop Boys" bcc="#82CAE1" hvbcc=""/>
          </ButtonHold>
        </Wrapper>
        {/* <Wave>
          <Img src={pic}/>
        </Wave> */}
      </Container>
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
font-size: 100px;
line-height: 100px;
font-weight: 400;
text-align: center;
text-decoration: none solid rgb(255,255,255);
`

const Wrapper = styled.div`
/* background-color: yellowgreen; */
height: 100%;
width: 50%;
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

const Container = styled.div`
/* background-color: brown; */
width: 100%;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
flex-direction: column;
/* position: absolute; */
/* margin-top: 10px; */
`