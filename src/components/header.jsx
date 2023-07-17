import styled from "@emotion/styled";
import homeLogo from "../assets/Logo.png";
import Button from "./button";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 32px;
`;

function Header() {
  return (
    <Wrapper>
      <div>
        <img src={homeLogo}></img>
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <button>Find a home</button>
        <button>Join</button>
        <Button type="primary">Log in</Button>
      </div>
    </Wrapper>
  );
}

export default Header;
