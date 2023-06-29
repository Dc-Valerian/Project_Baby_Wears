
import styled from 'styled-components'
import img from "../assets/boys.jpeg"
import img2 from "../assets/girls.jpeg"
import img3 from "../assets/toys.jpeg"
import GlobalCard from '../components/reUse/GlobalCard'

const MidCards = () => {
  return (
    <div>
        <Container>
         <Wrapper>
         <GlobalCard title='Girls' sub='Clothing' last="World's Best Brands" image={img2}/>
         <GlobalCard title='Boys' sub='Clothing' last='Incredible Quality' image={img}/>
         <GlobalCard title='Toys' sub='& Games' last='For all ages' image={img3}/>
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
/* background-color: yellow; */
width: 90%;
`

const Container = styled.div`
/* background-color: red; */
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;
`