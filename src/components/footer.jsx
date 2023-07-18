import styled from "@emotion/styled";
import LogoFooter from "../assets/logofooter.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { colors } from "../styles";
import Button from "./button";

const Wrapper = styled.footer`
  display: flex;
  padding: 5px 50px;
  background-color: #f5f5f6;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 32px;
  background-color: #f5f5f6;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f6;
`;

function Footer() {
  return (
    <Wrapper>
      <Nav>
        <LogoWrapper>
          <img style={{ backgroundColor: "none" }} src={LogoFooter}></img>
          <p>© 202X - Get That Job</p>
          <p>Codeable - Cohort X Final Project</p>
        </LogoWrapper>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Built with ❤ by:</p>
          <p> Joel Oliver</p>
          <p> Diego Eduardo</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Source code:</p>
          <p> Ruby on Rails REST API</p>
          <p> React Responsive SPA</p>
        </div>
      </Nav>
    </Wrapper>
  );
}

export default Footer;
