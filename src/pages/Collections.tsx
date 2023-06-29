import styled from "styled-components"
import img from "../assets/school-kids.jpeg"
import dark from "../assets/dark-blue.jpeg"
import GlobalButton from "../components/reUse/GlobalButton"

const Collections = () => {
  return (
    <div>
        <Container>
                <First>
                    <Title>
                        <h3>Back To School</h3>
                        <h1>
                            Girls Collection
                        </h1>
                        <p>
                        We celebrate childhood by supporting babies, children, and <br /> families <br />
with thoughtful designs, quality materials and construction, <br />
and convenient shopping options.
                        </p>
                    <GlobalButton title="Shop Collection" bcc="#FF8087" hvbcc="#80C9E0" width="130px" subwidth="120px"/>
                    </Title>
                </First>
                <Second>
                    <Pic src={img}/>
                </Second>
        </Container>
    </div>
  )
}

export default Collections
const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
/* background-color: blueviolet; */
height: 100%;
width: 80%;

h3{
    color: rgb(129,209,229);
    font-size: 19px;
    line-height: 30.875px;
    vertical-align: baseline;
    font-weight: 700;
    text-decoration: none solid rgb(129,209,229);
    text-align: center;
}
h1{
    color: rgb(255,255,255);
    font-size: 72px;
    line-height: 72px;
    font-weight: 400;
    text-decoration: none solid rgb(255,255,255);
    text-align: center;
}
p{
    text-align: center;
    color: rgb(255,255,255);
    font-size: 19px;
    line-height: 30.875px;
    font-weight: 500;
    text-decoration: none solid rgb(255,255,255);
    text-align: center;
    margin-top: 10px;
margin-bottom: 20px;

}
`

const Pic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Second = styled.div`
/* background-color: brown; */
height: 100%;
width: 50%;
`

const First = styled.div`
/* background-color: yellow; */
height: 100%;
width: 50%;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${dark});
background-repeat: no-repeat;
background-size: cover;
flex-direction: column;
`

const Container = styled.div`
/* background-color: red; */
height: 600px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
`
