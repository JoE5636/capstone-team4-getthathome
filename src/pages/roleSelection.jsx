import styled from "@emotion/styled";
import { colors } from "../styles";
import { typography } from "../styles";
import LandlordBack from "../assets/rafiki.svg";
import SeekerBack from "../assets/pana.svg";

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
  return (
    <Container>
      <SubTitle>Selecciona el perfil con el que te identificas</SubTitle>
      <Title>¿Que estas buscando?</Title>
      <Wrapper>
        <ButtonWrapper>
          <LandlordButon />
          <ButtonText>Landlord</ButtonText>
          <ButtonText>You want to rent or sell a home</ButtonText>
        </ButtonWrapper>
        <ButtonWrapper>
          <SeekerButon />
          <ButtonText>Home Seeker</ButtonText>
          <ButtonText>You want to rent or sell a home</ButtonText>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}

export default RoleSelect;
