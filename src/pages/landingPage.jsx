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
  width: 996px;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
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
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
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
