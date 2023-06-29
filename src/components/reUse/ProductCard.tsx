
import styled from 'styled-components'

interface iProductCard{
    dn:string;
    title:string;
    div:string;
    image:string;
}

const ProductCard:React.FC<iProductCard> = ({
    dn,title,div,image
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
        </Container>
    </div>
  )
}

export default ProductCard
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
`