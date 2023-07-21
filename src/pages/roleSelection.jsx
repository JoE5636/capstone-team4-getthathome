import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../styles";
import { typography } from "../styles";
import LandlordBack from "../assets/rafiki.svg";
import SeekerBack from "../assets/pana.svg";
import Header from "../components/header";
import Footer from "../components/footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  gap: 16px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(
    to bottom,
    ${colors.pink[100]} 50%,
    ${colors.white} 50%
  );
`;
const Title = styled.h1`
  ${typography.head.xxl};
  color: ${colors.gray[500]};
  font-weight: 300;
`;

const SubTitle = styled.h1`
  ${typography.head.xs};
  color: ${colors.gray[500]};
  font-weight: 300;
`;

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const ButtonWrapper = styled.div`
  width: 280px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  gap: 8px;
  padding: 16px 20px;
  background-color: ${colors.white};
`;

const LandlordButon = styled.button`
  appearance: none;
  background-image: url(${LandlordBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  border: none;
  width: 240px;
  height: 180px;
`;

const SeekerButon = styled.button`
  appearance: none;
  background-image: url(${SeekerBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  border: none;
  width: 240px;
  height: 180px;
`;

const ButtonText = styled.p`
  ${typography.text.md};
  color: ${colors.gray[500]};
`;

function RoleSelect() {
  const navigate = useNavigate();
  const [role, setRole] = useState(NaN);

  function handleLanlordClick() {
    setRole(1);
  }

  function handleSeekerClick() {
    setRole(2);
  }

  useEffect(() => {
    if (!isNaN(role)) {
      navigate(`/signup/${role}`);
    }
  }, [role, navigate]);

  console.log(role);

  function handleSignupClick() {
    navigate("/role");
  }

  return (
    <>
      <Header onOtherClick={handleSignupClick} />
      <Container>
        <SubTitle>Select the profile you identify with</SubTitle>
        <Title>¿What are you looking for?</Title>
        <Wrapper>
          <ButtonWrapper>
            <LandlordButon onClick={handleLanlordClick} />
            <ButtonText>Landlord</ButtonText>
            <ButtonText>You want to rent or sell a home</ButtonText>
          </ButtonWrapper>
          <ButtonWrapper>
            <SeekerButon onClick={handleSeekerClick} />
            <ButtonText>Home Seeker</ButtonText>
            <ButtonText>You want to rent or sell a home</ButtonText>
          </ButtonWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}

export default RoleSelect;
