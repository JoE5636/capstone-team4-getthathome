import styled from "@emotion/styled";
import { Link } from "react-router-dom";
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
const PathLink = styled(Link)``;

function Header({ onLoginClick, onOtherClick, onSearchClick }) {
  return (
    <Wrapper>
      <Nav>
        <PathLink style={{ textDecoration: "none" }} to={"/home"}>
          <img src={homeLogo}></img>
        </PathLink>
        <div style={{ display: "flex", gap: "16px" }}>
          <Button
            onClick={onSearchClick}
            style={{ backgroundColor: `${colors.white}` }}
          >
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
            onClick={onOtherClick}
          >
            <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
            JOIN
          </Button>
          <Button type="primary" rounded onClick={onLoginClick}>
            <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
            LOGIN
          </Button>
        </div>
      </Nav>
    </Wrapper>
  );
}

export default Header;
