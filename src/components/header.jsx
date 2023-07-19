import styled from "@emotion/styled";
import homeLogo from "../assets/logo.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { colors } from "../styles";
import Button from "./button";

const Wrapper = styled.header`
  display: flex;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 5px 50px;
  margin-bottom: 5px;
  position: sticky;
  top: 0;
  background: ${colors.white};
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 32px;
`;

function Header() {
  return (
    <Wrapper>
      <Nav>
        <div>
          <img src={homeLogo}></img>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <Button style={{ backgroundColor: `${colors.white}` }}>
            <BiSearch
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            FIND A HOME
          </Button>
          <Button
            rounded
            style={{
              border: `1px solid ${colors.pink[500]}`,
              backgroundColor: `${colors.white}`,
            }}
          >
            <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
            JOIN
          </Button>
          <Button type="primary" rounded>
            <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
            LOGIN
          </Button>
        </div>
      </Nav>
    </Wrapper>
  );
}

export default Header;
