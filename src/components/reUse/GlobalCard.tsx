import styled from "styled-components"

interface iCard{
    title:string;
    sub:string;
    last:string;
    image:string;
}

const GlobalCard:React.FC<iCard> = ({title,sub,last,image}) => {
  return (
    <div>
        <Container image={image}>
            <Wrapper>
                <Text>
                        <h1>{title}</h1>
                        <h3>
                            {sub}
                        </h3>
                        <h5>
                            {last}
                        </h5>
                </Text>
            </Wrapper>
        </Container>
    </div>
  )
}

export default GlobalCard

const Text = styled.div`
margin-top: 70px;
padding-left: 10px;

h1{
    color: rgb(255,255,255);
    font-size: 60px;
    line-height: 55.5px;
    font-weight: 400;
    text-decoration: none solid rgb(255,255,255);
    text-align: left;
font-family: Hensa-Regular;
}

h3{
    color:rgb(255,255,255);
    font-size: 27px;
    line-height: 35.1px;
    font-weight: 700;
    text-decoration: none solid rgb(255,255,255);
    text-align: left;
}

h5{
    color: rgb(255,255,255);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none solid rgb(255,255,255);
    text-align: left;
}
`


const Wrapper = styled.div`
/* background-color: purple; */
display: flex;
align-items: center;
justify-content: left;
width: 100%;
height: 100%;
border: 2px dotted white;
border-radius: 10px;
`

const Container = styled.div<{image:string;}>`
padding: 10px;
/* background-color: brown; */
width: 350px;
height:250px;
margin: 5px;
display: flex;
align-items: center;
border-radius: 10px;
background-image: url(${(props)=>props.image});
background-repeat: no-repeat;
background-size: cover;
/* justify-content: center; */

:hover{
    transform: scale(1.01);
}
`  