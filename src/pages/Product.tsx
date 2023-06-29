
import styled from 'styled-components'
import ProductCard from '../components/reUse/ProductCard'
import img from "../assets/fish.jpeg"
import img2 from "../assets/pic.jpeg"
import img3 from "../assets/pic2.jpeg"
import img4 from "../assets/pic3.jpeg"
import GlobalButton from '../components/reUse/GlobalButton'

const Product = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Word>
                <Title>
                    You'll 🖤 This 
                </Title>
                <Sub>
                We've picked few pieces we're pretty sure you'll love. <br /> Check back often and enjoy
                </Sub>
                </Word>
                <CardHolder>
                   <ProductCard image={img4} div='$39.99' dn='none' title='Stuffed Blue Shark'/>
                    <ProductCard image={img2} div='$39.99' dn='none' title="Denim JumpSuit"/>
                    <ProductCard image={img3} div='$39.99' dn='' title='Stuffed Blue Shark'/>
                    <ProductCard image={img} div='$39.99' dn='' title='Stuffed Blue Shark'/>
                   <ProductCard image={img4} div='$39.99' dn='none' title='Stuffed Blue Shark'/>
                    <ProductCard image={img4} div='$39.99' dn='none' title='Stuffed Blue Shark'/>
                   <ProductCard image={img4} div='$39.99' dn='none' title='Stuffed Blue Shark'/>
                    <ProductCard image={img4} div='$39.99' dn='none' title='Super Star Knit Hat'/>
                </CardHolder>
                <GlobalButton width='150px' title='Shop All Products' bcc='#57C1DB' hvbcc='' subwidth='140px'/>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Product
const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
display: flex;
align-items: center;
justify-content: center;
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
