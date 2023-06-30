import styled from 'styled-components'

interface iButton {
    title:string;
    bcc:string;
    hvbcc:string;
    width:string;
    subwidth:string
}

const GlobalButton:React.FC<iButton> = ({
    title,bcc,hvbcc,width,subwidth
}) => {
  return (
    <div>
        <Container width={width} bcc={bcc} hvbcc={hvbcc}>
            <Wrapper subwidth={subwidth}>
               {title}
            </Wrapper>
        </Container>
    </div>
  )
}

export default GlobalButton

const Wrapper = styled.div<{subwidth:string}>`
border: 3px dotted;
color: white;
width:${(props)=>props.subwidth};
height: 35px;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
/* background-color: rgb(87,193,219); */
font-size: 14px;
font-weight: 700;
text-decoration: none solid rgb(255,255,255);
`

const Container = styled.div<{width:string; bcc:string; hvbcc:string}>`
/* padding: 1px; */
background-color: ${(props)=>props.bcc};
width: ${(props)=>props.width};
height: 45px;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
transition: all 350ms;

:hover{
    cursor: pointer;
    background-color: ${(props)=>props.hvbcc};
    transform: translate(0,-5px);
}
`


 
