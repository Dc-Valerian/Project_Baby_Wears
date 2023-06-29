import React from 'react'
import styled from 'styled-components'
import img from "../../assets/bg.jpeg"
import img1 from "../../assets/downimg.jpeg"
import {AiFillClockCircle} from "react-icons/ai"

const BlogCard = () => {
  return (
    <div>
        <Container>
            <Image>
                <Line>
                </Line>
            </Image>
            <Text>
                <Title>
                   <h2>
                   Why April Babies Are Extra Special
                   </h2>
                   <Down>
                    <Img src={img1}/> 
                    <Name>
                      Valerian Adimike
                    </Name>
                    <Icon>
                      <AiFillClockCircle/>
                    </Icon>
                    <Name>
                      June 6,2018
                    </Name>
                   </Down>
                </Title>
            </Text>
        </Container>
    </div>
  )
}

export default BlogCard
// const Date = styled.div``

const Name = styled.div`
color: rgb(153,153,153);
font-size: 13px;
line-height: 18px;
font-weight: 400;
text-decoration: none solid rgb(153,153,153);
text-align:left;
margin-left: 10px;
`

const Icon = styled.div`
margin-top: 5px;
margin-left: 10px;

`

const Img = styled.img`
border-radius: 50%;
width: 28px;
height: 28px;
margin-left: 5px;
`

const Down = styled.div`
display: flex;
align-items: center;
/* justify-content: center; */
/* background-color: red; */
width: 80%;
margin-top: 2px;
`

const Title = styled.div`
h2{
  display: flex;
  align-items: flex-start;
  width: 90%;
/* background-color: blue; */
color: rgb(84,84,84);
font-size: 34px;
line-height: 38px;
font-weight: 700;
text-decoration: none solid rgb(84,84,84);
text-align: left;
}
`

const Text = styled.div`
margin-top: 15px;
`

// const Pic = styled.img`
// width: 100%;
// height: 100%;
// object-fit: cover;
// `

const Line = styled.div`
/* background-color:green; */
width: 95%;
height: 95%;
border: 2px dotted white;
`

const Image = styled.div`
/* background-color: brown; */
height: 380px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
`

const Container = styled.div`
/* background-color: yellow; */
height: 450px;
width: 400px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: start;
margin: 10px;
`