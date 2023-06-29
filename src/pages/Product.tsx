
import styled from 'styled-components'

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
            </Wrapper>
        </Container>
    </div>
  )
}

export default Product

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
background-color: paleturquoise;
display: flex;
align-items: center;
justify-content: center;
width: 90%;
`

const Container = styled.div`
display: flex;
background-color: yellowgreen;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 60px;
`
