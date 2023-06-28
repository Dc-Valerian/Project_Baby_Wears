import styled from 'styled-components'

interface iButton {
    title:string;
    bcc:string;
    hvbcc:string;
    width:string;
}

const GlobalButton:React.FC<iButton> = ({
    title,bcc,hvbcc,width
}) => {
  return (
    <div>
        <Container width={width} bcc={bcc} hvbcc={hvbcc}>
            <Wrapper>
               {title}
            </Wrapper>
        </Container>
    </div>
  )
}

export default GlobalButton

const Wrapper = styled.div`
border: 3px dotted;
color: white;
width:110px;
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

:hover{
    cursor: pointer;
    background-color: ${(props)=>props.hvbcc};
}
`
