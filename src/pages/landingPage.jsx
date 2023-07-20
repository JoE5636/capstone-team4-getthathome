import styled from "@emotion/styled";
import Select from "react-select";
import HeroBack from "../assets/illustration2.svg";
import Button from "../components/button";
import { colors } from "../styles";
import { typography } from "../styles";
import PropertyCard from "../components/propertyCard";
import TeamSection from "../components/TeamSection";

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

function LandingPage() {
  return (
    <Container>
      <Hero>
        <TextWrapper>
          <Title>Meet your new Home</Title>
          <SubTitle>The easiest way to find where you belong</SubTitle>
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
        >
          CREATE AN ACCOUNT NOW
        </Button>
      </ActionDiv>
      <TeamSection></TeamSection>
    </Container>
  );
}

export default LandingPage;
