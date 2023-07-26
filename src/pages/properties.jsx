import { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { colors } from "../styles";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/button";
import { useAuth } from "../context/authContext";
import { useFavorites } from "../context/favoriteContext";
import PropertyCard from "../components/propertyCard";

const NavStyledContainer = styled.div`
  padding-top: 10px;
`;
const NavStyledWrapper = styled.div`
  width: 1190px;
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

export const PropertiesWrapper = styled.div`
  margin-left: auto;
  margin-ight: auto;
  width: 1190px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  flex-direction: row;
  gap: 16px 0px;
  flex-wrap: wrap;
`;

const NavStyled = () => {
  const [selectedOption, setSelectedOption] = useState("opcion1");
  const { user } = useAuth();

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
  const { favorites } = useFavorites();
  const { user } = useAuth();
  console.log(favorites);
  return (
    <>
      <Header />
      <NavStyled />
      <PropertiesWrapper>
        {user.role === 2
          ? favorites.map((property) => {
              return <PropertyCard key={property.id} {...property} />;
            })
          : null}
      </PropertiesWrapper>
      <Footer />
    </>
  );
};

export default Properties;
