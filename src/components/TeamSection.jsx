import styled from "@emotion/styled";
import { colors } from "../styles";
import { typography } from "../styles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Container = styled.div`
  background-color: ${colors.white};
  padding: 64px;
  width: 100vw;
  height: 486px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

const Title = styled.h2`
  color: ${colors.pink[400]};
  ${typography.head.xl};
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const MemberCard = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const MemberImage = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;
`;
const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${colors.gray[600]};
  h5 {
    font-family: Montserrat;
    font-size: 24px;
    margin: 4px;
    color: inherit;
  }
  div {
    display: flex;
    gap: 32px;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function TeamSection() {
  const members = [
    {
      url: "https://avatars.githubusercontent.com/u/95457072?s=400&v=4",
      name: "Diego Lopez",
      url_github: "https://github.com/diegolopex",
      url_linkedin: "https://www.linkedin.com/in/diegolopezv93/",
    },
    {
      url: "https://avatars.githubusercontent.com/u/118869448?s=400&u=79dd5690d347a741a7cc980c54f94238cf968528&v=4",
      name: "Eduardo ...",
      url_github: "https://github.com/opaucarq",
      url_linkedin: "https://github.com/opaucarq",
    },
    {
      url: "https://avatars.githubusercontent.com/u/101686176?v=4",
      name: "Joel de la Rosa",
      url_github: "https://github.com/JoE5636",
      url_linkedin: "https://www.linkedin.com/in/joeldelarosa23/",
    },
    {
      url: "https://avatars.githubusercontent.com/u/118869448?s=400&u=79dd5690d347a741a7cc980c54f94238cf968528&v=4",
      name: "Oliver Paucar",
      url_github: "https://github.com/opaucarq",
      url_linkedin: "https://github.com/opaucarq",
    },
  ];
  return (
    <Container>
      <Title>Meet the team</Title>
      <TeamContainer>
        {members.map((member, index) => (
          <MemberCard key={index}>
            <MemberImage src={member.url} />
            <MemberInfo>
              <h5>{member.name}</h5>
              <div>
                <a href={member.url_github} target="_blank">
                  <AiFillGithub size={25} />
                </a>
                <a href={member.url_linkedin} target="_blank">
                  <AiFillLinkedin size={25} />
                </a>
              </div>
            </MemberInfo>
          </MemberCard>
        ))}
      </TeamContainer>
    </Container>
  );
}
export default TeamSection;
