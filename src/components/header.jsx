import styled from "@emotion/styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homeLogo from "../assets/logo.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { RiHome8Line } from "react-icons/ri";
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
  z-index: 1;
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
  z-index: 1;
`;

const PathLink = styled(Link)``;

function Header({ onLoginClick, onOtherClick }) {
  const [user, setUser] = useState(null);
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

  function handleMyPropClick() {
    navigate("/myproperties");
  }

  function handleModalClick(event) {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
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
          {user === null && (
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
          )}
          {user === "landlord" && (
            <Button
              rounded
              style={{
                border: `1px solid ${colors.pink[400]}`,
                backgroundColor: `${colors.pink[400]}`,
                color: `${colors.white}`,
              }}
              onClick={handleMyPropClick}
            >
              <RiHome8Line style={{ width: "24px", height: "24px" }} />
              My Properties
            </Button>
          )}
          {user === "seeker" && (
            <Button
              rounded
              style={{
                border: `1px solid ${colors.pink[400]}`,
                backgroundColor: `${colors.pink[400]}`,
                color: `${colors.white}`,
              }}
              onClick={handleMyPropClick}
            >
              <AiFillHeart style={{ width: "24px", height: "24px" }} />
              Saved Properties
            </Button>
          )}
          {user === null && (
            <Button type="primary" rounded onClick={handleLoginClick}>
              <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
              LOGIN
            </Button>
          )}
          {user === "landlord" && (
            <Button type="primary" rounded>
              <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
              PROFILE
            </Button>
          )}
          {user === "seeker" && (
            <Button type="primary" rounded>
              <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
              PROFILE
            </Button>
          )}
        </div>
      </Nav>
      {isOpenLogModal ? (
        <Modal onClick={handleModalClick}>
          <LoginModal onSubmitClick={handleCloseModal} />
        </Modal>
      ) : null}
    </Wrapper>
  );
}

export default Header;
