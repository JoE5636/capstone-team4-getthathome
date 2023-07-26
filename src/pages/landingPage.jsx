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
    id: 13,
    operation: "Venta",
    address: "Calle Los Rosales 456, San Borja, Lima",
    category: "Department",
    price: 4049,
    maintenance: 206,
    pets: false,
    bedrooms: 2,
    bathrooms: 3,
    area: 121,
    description: "Propiedad 13 con descripción aleatoria.",
    created_at: "2023-07-26T19:48:06.414Z",
    updated_at: "2023-07-26T19:48:06.465Z",
    photos: [
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2tCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--04473d87183447e3888c1c8cfcd689418af28b54/img01.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ29CIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--841f2b91a75b3aa85c5bab25ed6a549b712c29ef/img04.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ3NCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--91810d9fdda8fec00ecd7ea8dd58a8d88e1b9a91/img08.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ3dCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e264fddcf8b7450010b7cb14cf7e4ad6de894bee/img06.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzBCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e0a02abaacc436398d97323e155d16f3c0ebdb1e/img10.jpg",
    ],
  },
  {
    id: 1,
    operation: "Venta",
    address: "Av. Arequipa 123, San Isidro, Lima",
    category: "Home",
    price: 2015,
    maintenance: 103,
    pets: true,
    bedrooms: 3,
    bathrooms: 4,
    area: 202,
    description: "Propiedad 1 con descripción aleatoria.",
    created_at: "2023-07-26T19:48:05.647Z",
    updated_at: "2023-07-26T19:48:05.718Z",
    photos: [
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYzA9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--98f2852e6800789fa312f820b1c41d30c459d73d/img06.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYzQ9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--845e4e63e9d5fcfbf4cfee6a654274f768e43646/img14.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYzg9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c90d6252e24c6199057d18f7c605d1a0c70da259/img17.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZEE9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--24bede55ee57eb724a33b3473146f8caa616eaa2/img09.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZEU9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--636d42962f29e7810bed2320a456f38fb812695a/img11.jpg",
    ],
  },
  {
    id: 38,
    operation: "Venta",
    address: "Calle Los Tulipanes 852, San Juan de Lurigancho, Lima",
    category: "Department",
    price: 4455,
    maintenance: 86,
    pets: false,
    bedrooms: 1,
    bathrooms: 2,
    area: 314,
    description: "Propiedad 38 con descripción aleatoria.",
    created_at: "2023-07-26T19:48:07.802Z",
    updated_at: "2023-07-26T19:48:07.854Z",
    photos: [
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1lCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--296f40493f7c32ff9a49aa8830f166bbdc7f5281/img04.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2NCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d1ec42e55e8ecd429d7997d6e327e501ee6e8efd/img08.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2dCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ca3c78580b02e71c6af8737f1cdcce11d68bc363/img18.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2tCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3a62f86d4e702b1065ecee47e33555875beac794/img17.jpg",
      "http://127.0.0.1:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb29CIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e47fbd2489b8cc3554e076f598604cc333c4c563/img19.jpg",
    ],
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
                id={sampleData[0].id}
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
                id={sampleData[1].id}
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
                id={sampleData[2].id}
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
