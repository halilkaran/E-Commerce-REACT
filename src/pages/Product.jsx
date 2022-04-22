import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newseletter from "../components/Newsletter";
const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 50px;
display: flex;
`;

const ImageContainer = styled.div`
flex: 1;

`;

const Image = styled.img`
width: 100%;
height: 70vh;
object-fit: cover;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
font-weight: 200;
`;

const Desc = styled.p`
margin: 20px 0px;

`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;




const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px; 
display: flex;
justify-content:space-between;

`
const Filter = styled.div`
display: flex;
 align-items: center;

`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color:${props => props.color};
margin:0px 5px;
cursor:pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 10px;
`
const FilterSizeOption= styled.option``
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
   
`;
const AmmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Ammount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
background-color: #f8f4f4;
}
`
 
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <ImageContainer>
          <Image src="http://i.ibb.co/S6qMxwr/jean.jpg"/>
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
           
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            consectetur vel ipsa? Sequi pariatur, numquam ipsum quae quaerat
            reiciendis fugit. Fugit atque optio dolorum, assumenda, quisquam
            animi rerum fuga, aliquam iste obcaecati repudiandae ad possimus
            rem! In dolorum porro illum! Consequatur debitis veritatis tempora
            iusto, atque reiciendis ut perspiciatis accusamus!
                  </Desc>
                  <Price>$ 20</Price>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle> Color</FilterTitle>
                          <FilterColor color="black"/>
                          <FilterColor color="darkblue"/>
                          <FilterColor color="gray"/>
                      </Filter>
                      <Filter>
                          <FilterTitle> Size</FilterTitle>
                          <FilterSize>
                              <FilterSizeOption>XS</FilterSizeOption>
                              <FilterSizeOption>S</FilterSizeOption>
                              <FilterSizeOption>M</FilterSizeOption>
                              <FilterSizeOption>L</FilterSizeOption>
                              <FilterSizeOption>XL</FilterSizeOption>
                              <FilterSizeOption>XXL</FilterSizeOption>
                               
                               
                          </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmmountContainer>
                          <Remove />
                          <Ammount>1</Ammount>
                          <Add/>
                      </AmmountContainer>
                      <Button>ADD TO CART</Button>
                  </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newseletter />
      <Footer />
    </Container>
  );
};

export default Product;
