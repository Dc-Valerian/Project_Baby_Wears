
import styled from 'styled-components'
import GlobalCard from '../components/reUse/GlobalCard'

const MidCards = () => {
  return (
    <div>
        <Container>
         <Wrapper>
         <GlobalCard/>
            <GlobalCard/>
            <GlobalCard/>
         </Wrapper>
        </Container>
    </div>
  )
}


export default MidCards

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
background-color: yellow;
width: 90%;
`

const Container = styled.div`
background-color: red;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`