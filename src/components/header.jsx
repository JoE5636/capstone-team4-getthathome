import styled from "@emotion/styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homeLogo from "../assets/logo.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { colors } from "../styles";
import Button from "./button";
import LoginModal from "./loginModal";

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

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(23 23 23 / 75%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PathLink = styled(Link)``;

function Header({ onLoginClick, onOtherClick }) {
  const [isOpenLogModal, setIsOpenLogModal] = useState(false);
  const navigate = useNavigate();

  function handleSearchClick() {
    navigate("/properties");
  }
  function handleLoginClick() {
    setIsOpenLogModal(true);
  }

  function handleCloseModal() {
    setIsOpenLogModal(false);
  }

  return (
    <Wrapper>
      <Nav>
        <PathLink style={{ textDecoration: "none" }} to={"/home"}>
          <img src={homeLogo}></img>
        </PathLink>
        <div style={{ display: "flex", gap: "16px" }}>
          <Button
            onClick={handleSearchClick}
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
          <Button type="primary" rounded onClick={handleLoginClick}>
            <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
            LOGIN
          </Button>
        </div>
      </Nav>
      {isOpenLogModal ? (
        <Modal>
          <LoginModal onSubmitClick={handleCloseModal} />
        </Modal>
      ) : null}
    </Wrapper>
  );
}

export default Header;
