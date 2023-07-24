import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { colors } from "../styles";
import { getUser } from "../services/user/userService";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/button";

const NavStyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 10px;
`;
const NavStyledWrapper = styled.div`
  width: 1190px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  ${"" /* align-items: center; */}
  flex-direction: column;

  background-color: ${colors.white};
`;
const NavStyledOptions = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  z-index: 0;
`;
const NavStyleOption = styled.li`
  cursor: pointer;
  position: relative;
  color: ${(props) => (props.isSelected ? "red" : "black")};
`;

const Subrayado = styled.div`
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background-color: ${colors.pink[500]};
  display: ${(props) => (props.isSelected ? "block" : "none")};
`;

const NavStyledContent = styled.div``;

const NavStyled = () => {
  const [selectedOption, setSelectedOption] = useState("opcion1");
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const navigate = useNavigate();

  function handleNewPropertyClick() {
    navigate("/create");
  }
  return (
    <NavStyledContainer>
      <NavStyledWrapper>
        {user?.role === 2 && (
          <NavStyledOptions>
            <NavStyleOption
              isSelected={selectedOption === "opcion1"}
              onClick={() => handleOptionChange("opcion1")}
            >
              FAVORITES
              <Subrayado isSelected={selectedOption === "opcion1"} />
            </NavStyleOption>
            <NavStyleOption
              isSelected={selectedOption === "opcion2"}
              onClick={() => handleOptionChange("opcion2")}
            >
              CONTACTED
              <Subrayado isSelected={selectedOption === "opcion2"} />
            </NavStyleOption>
          </NavStyledOptions>
        )}
        {user?.role === 1 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Button type="primary" rounded onClick={handleNewPropertyClick}>
              <AiOutlinePlusCircle style={{ width: "24px", height: "24px" }} />
              NEW PROPERTY
            </Button>
            <NavStyledOptions>
              <NavStyleOption
                isSelected={selectedOption === "opcion1"}
                onClick={() => handleOptionChange("opcion1")}
              >
                ACTIVE
                <Subrayado isSelected={selectedOption === "opcion1"} />
              </NavStyleOption>
              <NavStyleOption
                isSelected={selectedOption === "opcion2"}
                onClick={() => handleOptionChange("opcion2")}
              >
                CLOSED
                <Subrayado isSelected={selectedOption === "opcion2"} />
              </NavStyleOption>
            </NavStyledOptions>
          </div>
        )}

        {user?.role === 2 && (
          <NavStyledContent>
            {selectedOption === "opcion1" ? (
              <h1>Favorites</h1>
            ) : (
              <h1>Contacted</h1>
            )}
          </NavStyledContent>
        )}
        {user?.role === 1 && (
          <NavStyledContent>
            {selectedOption === "opcion1" ? <h1>Active</h1> : <h1>Closed</h1>}
          </NavStyledContent>
        )}
      </NavStyledWrapper>
    </NavStyledContainer>
  );
};

const Properties = () => {
  return (
    <>
      <Header />
      <NavStyled />
      <Footer />
    </>
  );
};

export default Properties;
