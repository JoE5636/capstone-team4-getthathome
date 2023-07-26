import styled from "@emotion/styled";
import LogoFooter from "../assets/logofooter.png";
import Github from "../assets/github-fill.png";
import Ruby from "../assets/ruby-fill.png";
import React from "../assets/reactjs-line.png";
import { colors } from "../styles";

const Wrapper = styled.footer`
  display: flex;
  padding: 8px 50px;
  background-color: #f5f5f6;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
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
          <p>© 2023 - Get That Job</p>
          <p>Codeable - Cohort 10 Final Project</p>
        </LogoWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "364px",
            gap: "8px",
            padding: "12px 0",
          }}
        >
          <p>Built with ❤ by:</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 180px",
              width: "180px",
              gap: "4px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
              <img style={{ width: "20px", height: "20px" }} src={Github}></img>
              <a
                style={{ textDecoration: "none", color: `${colors.black}` }}
                href="https://github.com/JoE5636"
                target="_blank"
              >
                Joel
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
              <img style={{ width: "20px", height: "20px" }} src={Github}></img>
              <a
                style={{ textDecoration: "none", color: `${colors.black}` }}
                href="https://github.com/opaucarq"
                target="_blank"
              >
                Oliver
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
              <img style={{ width: "20px", height: "20px" }} src={Github}></img>
              <a
                style={{ textDecoration: "none", color: `${colors.black}` }}
                href="https://github.com/diegolopex"
                target="_blank"
              >
                Diego
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
              <img style={{ width: "20px", height: "20px" }} src={Github}></img>
              <a
                style={{ textDecoration: "none", color: `${colors.black}` }}
                href="https://github.com/JoE5636"
                target="_blank"
              >
                Eduardo
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            padding: "12px 0",
          }}
        >
          <p>Source code:</p>
          <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
            <img style={{ width: "20px", height: "20px" }} src={Ruby}></img>
            <p>Ruby on Rails REST API</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
            <img style={{ width: "20px", height: "20px" }} src={React}></img>
            <p>React Responsive SPA</p>
          </div>
        </div>
      </Nav>
    </Wrapper>
  );
}

export default Footer;
