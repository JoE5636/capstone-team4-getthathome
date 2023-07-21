import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { colors } from "../styles";
import PropertyCard from "../components/propertyCard";
import { useFetchProperties } from "../services/properties/properties.hook";
// import options from "../services/api-fetch";

const NavStyledContainer = styled.div``;
const NavStyledWrapper = styled.div``;
const NavStyledOptions = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <NavStyledContainer>
      <NavStyledWrapper>
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
        <NavStyledContent>
          {selectedOption === "opcion1" ? (
            <h1>Favorites</h1>
          ) : (
            <h1>Contacted</h1>
          )}
        </NavStyledContent>
      </NavStyledWrapper>
    </NavStyledContainer>
  );
};

const Properties = () => {
  const { data } = useFetchProperties();
  console.log(data);
  return (
    <>
      <NavStyled />
      <div>
        {data.map((property) => {
          const {
            operation,
            photos,
            price,
            address,
            bedrooms,
            bathrooms,
            area,
            pets,
          } = property;

          const propertyProps = {
            operation,
            photos,
            price,
            address,
            bedrooms,
            bathrooms,
            area,
            pets,
          };

          return <PropertyCard key={property.id} {...propertyProps} />;
        })}
      </div>
    </>
  );
};

export default Properties;
