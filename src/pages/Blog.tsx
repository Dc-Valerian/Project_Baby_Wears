
import styled from 'styled-components'
import BlogCard from '../components/reUse/BlogCard'
// import img9 from "../assets/pic8.jpeg" 

import img from "../assets/bg.jpeg"
import img2 from "../assets/bg1.jpeg"
import img3 from "../assets/bg3.jpeg"
import img1 from "../assets/downimg.jpeg"
import img5 from "../assets/me.jpg"
import img6 from "../assets/hmm.jpg"

const Blog= () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Word>
                <Title>
                 From The Blog
                </Title>
                <Sub>
                We celebrate childhood by supporting babies, children, and families
with thoughtful designs and quality materials.
                </Sub>
                </Word>
             <CardHolder>
                <BlogCard bcimage={img} h2=' Why April Babies Are Extra Special' img={img1} name='Valerian Pedro' />
                <BlogCard bcimage={img2} h2='The Surpising Way Motherhood changed me' img={img5} name='Divine Peace' />
                <BlogCard bcimage={img3} h2='How Aromatherapy can impact NICU Babie' img={img6} name='Morning Star' />
             </CardHolder>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Blog
const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
`

const Sub = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: rgb(119,119,119);
font-size: 18px;
line-height: 29.25px;
font-weight: 400;
text-decoration: none solid rgb(119,119,119);
margin: 5px;
/* background-color: red; */
width: 700px;
`

const Title = styled.div`
color: rgb(51,51,51);
background-color: rgba(0,0,0,0);
font-size: 64px;
font-family: Hensa-Regular;
line-height: 64px;
letter-spacing: normal;
font-weight: 400;
text-decoration: none solid rgb(51,51,51);
text-align: center;
`

const Word = styled.div`
/* background-color: red; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const Wrapper = styled.div`
/* background-color: paleturquoise; */
display: flex;
align-items: center;
justify-content: center;
width: 98%;
flex-direction: column;
padding-bottom: 10px;
`

const Container = styled.div`
display: flex;
/* background-color: yellowgreen; */
align-items: center;
justify-content: center;
width: 100%;
margin-top: 60px;
flex-direction: column;
`
