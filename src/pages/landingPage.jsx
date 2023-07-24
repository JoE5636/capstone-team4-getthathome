import styled from "@emotion/styled";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import HeroBack from "../assets/illustration2.svg";
import Button from "../components/button";
import { colors } from "../styles";
import { typography } from "../styles";
import PropertyCard from "../components/propertyCard";
import TeamSection from "../components/TeamSection";
import Header from "../components/header";
import Footer from "../components/footer";
import Depa from "../assets/depa1.png";

const sampleData = [
  {
    id: 1,
    operation: "Venta",
    address: "Calle 123, Ciudad A",
    category: "Department",
    price: 250000,
    maintenance: 200,
    pets: true,
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    description: "Hermosa casa en venta con amplio jardín.",
    created_at: "2023-07-21T14:15:54.448Z",
    updated_at: "2023-07-21T14:15:54.562Z",
    photos: { Depa },
  },
  {
    id: 2,
    operation: "Renta",
    address: "Avenida XYZ, Ciudad B",
    category: "Home",
    price: 1200,
    maintenance: 100,
    pets: false,
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    description: "Apartamento en renta cerca del centro comercial.",
    created_at: "2023-07-21T14:15:54.453Z",
    updated_at: "2023-07-21T14:15:54.631Z",
    photos: { Depa },
  },
  {
    id: 3,
    operation: "Venta",
    address: "Calle Principal, Ciudad C",
    category: "Home",
    price: 180000,
    maintenance: 150,
    pets: true,
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    description: "Casa en venta con piscina y vista al mar.",
    created_at: "2023-07-21T14:15:54.458Z",
    updated_at: "2023-07-21T14:15:54.687Z",
    photos: { Depa },
  },
];

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Hero = styled.div`
  width: 100vw;
  height: 560px;
  background-image: url(${HeroBack});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const OptionsWrapper = styled.div`
  width: 800px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  margin-top: 64px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 8px 16px;
`;

const Title = styled.h1`
  ${typography.head.xxl};
  color: ${colors.black};
`;

const TitleProp = styled.h1`
  ${typography.head.xl};
  color: ${colors.pink[400]};
`;

const TitleAction = styled.h1`
  ${typography.head.lg};
  color: ${colors.gray[500]};
  text-align: center;
`;

const SubTitle = styled.h1`
  ${typography.head.sm};
  color: ${colors.gray[500]};
  font-weight: 400;
`;

const PropertyWrapper = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 60px;
`;

const Wrapper = styled.div`
  width: 1150px;
  height: 520px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const PropertySample = styled.div`
  width: 1000px;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px;
`;

const ActionDiv = styled.div`
  width: 100vw;
  height: 332px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  background-color: ${colors.pink[100]};
  gap: 48px;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border: none;
  width: 260px;
`;

function LandingPage() {
  const typeOptions = [
    { value: "apartment", label: "Apartments" },
    { value: "house", label: "House" },
  ];

  const operationOptions = [
    { value: "rent", label: "Rent" },
    { value: "buy", label: "Buy" },
  ];

  const navigate = useNavigate();

  function handleSignupClick() {
    navigate("/role");
  }

  return (
    <>
      <Header onOtherClick={handleSignupClick} />
      <Container>
        <Hero>
          <TextWrapper>
            <Title>Meet your new Home</Title>
            <SubTitle>The easiest way to find where you belong</SubTitle>
            <OptionsWrapper>
              <div style={{ borderRight: `1px solid ${colors.gray[300]}` }}>
                <label
                  style={{ textTransform: "uppercase", fontSize: ".75rem" }}
                >
                  i'm looking for
                </label>
                <Select
                  options={typeOptions}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused
                        ? `${colors.white}`
                        : `${colors.white}`,
                      zIndex: 0,
                    }),
                    indicatorSeparator: () => ({
                      appearance: "none",
                    }),
                    container: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isSelected
                        ? `${colors.white}`
                        : `${colors.white}`,
                      width: "160px",
                      zIndex: 0,
                    }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isFocused
                        ? `${colors.pink[100]}`
                        : `${colors.white}`,
                    }),
                  }}
                />
              </div>
              <div style={{ borderRight: `1px solid ${colors.gray[300]}` }}>
                <label
                  style={{ textTransform: "uppercase", fontSize: ".75rem" }}
                >
                  i want to
                </label>
                <Select
                  options={operationOptions}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused
                        ? `${colors.white}`
                        : `${colors.white}`,
                      zIndex: 0,
                    }),
                    indicatorSeparator: () => ({
                      appearance: "none",
                    }),
                    container: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isSelected
                        ? `${colors.white}`
                        : `${colors.white}`,
                      width: "160px",
                      zIndex: 0,
                    }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isFocused
                        ? `${colors.pink[100]}`
                        : `${colors.white}`,
                    }),
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRight: `1px solid ${colors.gray[300]}`,
                }}
              >
                <label
                  style={{ textTransform: "uppercase", fontSize: ".75rem" }}
                >
                  where
                </label>
                <SearchInput type="text" placeholder="Favorite district" />
              </div>
              <div
                style={{
                  height: "72px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button style={{ padding: "10px" }} type="primary">
                  SEARCH
                </Button>
              </div>
            </OptionsWrapper>
          </TextWrapper>
        </Hero>
        <PropertyWrapper>
          <Wrapper>
            <p>Find an Apartment you Love</p>
            <TitleProp>Homes for rent at the best prices</TitleProp>
            <PropertySample>
              <PropertyCard
                operation={sampleData[0].operation}
                photos={sampleData[0].photos[0]}
                price={sampleData[0].price}
                address={sampleData[0].address}
                bedrooms={sampleData[0].bedrooms}
                bathrooms={sampleData[0].bathrooms}
                area={sampleData[0].area}
                pets={sampleData[0].pets}
              />
              <PropertyCard
                operation={sampleData[1].operation}
                photos={sampleData[1].photos[1]}
                price={sampleData[1].price}
                address={sampleData[1].address}
                bedrooms={sampleData[1].bedrooms}
                bathrooms={sampleData[1].bathrooms}
                area={sampleData[1].area}
                pets={sampleData[1].pets}
              />
              <PropertyCard
                operation={sampleData[2].operation}
                photos={sampleData[2].photos[2]}
                price={sampleData[2].price}
                address={sampleData[2].address}
                bedrooms={sampleData[2].bedrooms}
                bathrooms={sampleData[2].bathrooms}
                area={sampleData[2].area}
                pets={sampleData[2].pets}
              />
            </PropertySample>
          </Wrapper>
        </PropertyWrapper>
        <ActionDiv>
          <TitleAction>
            Getting someone to rent your apartment
            <br></br>
            has never been this easy
          </TitleAction>
          <Button
            style={{ padding: "20px", borderRadius: "10px" }}
            type="primary"
            onClick={handleSignupClick}
          >
            CREATE AN ACCOUNT NOW
          </Button>
        </ActionDiv>
        <TeamSection></TeamSection>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
