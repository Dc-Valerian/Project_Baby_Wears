
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa6';
import styled from 'styled-components'

import img2 from "../../assets/pic3.jpeg"

interface iProductCard{
    dn:string;
    title:string;
    div:string;
    image:string;
    hoverImage:string;
}

const ProductCard:React.FC<iProductCard> = ({
    dn,title,div,image,hoverImage
}) => {
  return (
    <div>
        <Container>
                <Round dn={dn}>
                    -25%
                </Round>
            <Wrapper>
                <Image>
                    <Pic src={image}/>
                </Image>
                <Text>
                    <h2>
                        {title}
                    </h2>
                    <h4>
                        <div>
                            {div}
                        </div>
                        $29.99
                    </h4>
                </Text>
            </Wrapper>
            <HoverCard>
                <Image1 hoverImage={hoverImage}>
                   {/* <Pic1 src={img2}/> */}
                <Down>
                    <Icon>
                        <BsFillBagCheckFill/>
                    </Icon>
                    <Icon>
                        <FaRegNewspaper/>
                    </Icon>
                    <Icon>
                        <BsFillBagCheckFill/>
                    </Icon>
                </Down>
                </Image1>
            </HoverCard> 


        </Container>
    </div>
  )
}

export default ProductCard
const Icon = styled.div`
margin:10px;
border-radius: 50%;
width: 40px;
height: 40px;
background-color: blanchedalmond;
display: flex;
align-items: center;
font-size: 22px;
justify-content: center;
cursor: pointer;
`

const Down = styled.div`
/* background-color: blue; */
width: 100%;
/* height: 50px; */
display: flex;
align-items: center;
justify-content: center;
position: absolute;
`

// const Pic1 = styled.img`
// height: 100%;
// width: 100%;
// object-fit: cover;
// `

const Image1 = styled.div<{hoverImage:string}>`
width: 100%;
height:320px;
/* position: relative; */
background-image: url(${(props)=>props.hoverImage});
background-position: center;
background-size: cover;
display: flex;
align-items: end;
/* justify-content: end; */

`

const HoverCard = styled.div`
/* background-color: red; */
/* background: rgb(249,249,249);
background: linear-gradient(0deg, #050505 0%,  rgba(0,0,0,0) 100%); */
height: 320px;
/* height: 100%; */
width: 90%;
/* margin-left: 30px; */
display: none;
position: absolute;
margin-bottom: 60px;
cursor: pointer;
`

const Text = styled.div`
h2{
    color: rgb(51,51,51);
    font-size: 16px;
    font-weight: 500;
    text-decoration: none solid rgb(51,51,51);
    text-align: center;
}

h4{
    color: rgb(129,209,229);
    font-size: 17px;
    line-height: normal;
    vertical-align: baseline;
    font-weight: 500;
    text-decoration: none solid rgb(129,209,229);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        color:rgb(153,153,153);
        font-size: 17px;
        vertical-align: baseline;
        font-weight: 400;
        text-decoration: underline  solid rgb(153,153,153);
        text-align: center;
    margin-right: 4px;
        
    }
}
`
const Pic = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const Image = styled.div`
width: 100%;
height: 320px;
/* background-color: yellow; */
/* position: relative; */
`

const Round = styled.div<{dn:string}>`
width: 45px;
height:45px;
color: #fff;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
background-color:#F69697;
margin-top: 10px;
position: absolute;
top: 0;
left:6%;
display: ${(props)=>props.dn};
z-index: 99999;
`

const Wrapper = styled.div`
/* background-color: brown; */
width: 90%;
height: 100%;
`

const Container = styled.div`
/* background-color: red; */
width:300px;
height: 380px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
margin-top: 30px;
margin: 4px;


:hover ${HoverCard}{
    display: flex;
}

/* :hover ${Image}{
    display: none;
}  */
`