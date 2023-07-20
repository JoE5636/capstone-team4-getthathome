import styled from "@emotion/styled";
import { colors } from "../styles";
import { typography } from "../styles";

const Container = styled.div`
  background-color: ${colors.white};
  padding: 20px;
  width: 100vw;
  height: 486px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h1`
  color: ${colors.pink[400]};
  ${typography.head.xl};
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  img {
    margin: 10px;
    width: 240px;
    height: 273px;
    object-fit: cover;
  }
`;

function TeamSection() {
  return (
    <Container>
      <Title>Meet the team</Title>
      <ImageContainer>
        <img src="src/assets/Frame74.png" alt="" />
        <img src="src/assets/Frame75.png" alt="" />
        <img src="src/assets/Frame76.png" alt="" />
        <img src="src/assets/Frame77.png" alt="" />
      </ImageContainer>
    </Container>
  );
}
export default TeamSection;
