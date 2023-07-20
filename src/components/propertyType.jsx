import React, { useState } from "react";
import Button from "./button";
import styled from "@emotion/styled";
import { colors } from "../styles";

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 247px;
  height: 116px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

const CustomModalContainer = styled.div`
  width: auto;
  height: auto;
  padding: 8px;
`;

const LabelText = styled.p`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 4px 0 16px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 5px;
  width: auto;
  height: 36px;
`;

const StyledInput = styled.input`
  border: 1px solid ${colors.pink[400]};
  width: 20px;
  height: 20px;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  appearance: none;
  &:checked {
    background-color: ${colors.pink[400]};
  }
  &:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-60%) rotate(45deg);
    width: 7px;
    height: 12px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    padding-right: 6px;
  }
`;

const PropertyType = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [housesChecked, setHousesChecked] = useState(false);
  const [apartmentsChecked, setApartmentsChecked] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleHousesChange = (event) => {
    setHousesChecked(event.target.checked);
  };

  const handleApartmentsChange = (event) => {
    setApartmentsChecked(event.target.checked);
  };

  const handleApplyFilter = () => {
    // Aquí puedes realizar cualquier acción con los valores de los checkboxes
    // Por ejemplo, puedes enviarlos a una API o utilizarlos en tu lógica de filtrado
    setModalIsOpen(false);
  };
  return (
    <div style={{ paddingLeft: "20px" }}>
      <Button type="primary" size="lg" rounded onClick={handleModalOpen}>
        PROPERTY TYPE
      </Button>

      <ModalOverlay isOpen={modalIsOpen} onRequestClose={handleModalClose}>
        <CustomModalContainer>
          <LabelText>Property type</LabelText>
          <InputContainer>
            <StyledInputContainer>
              <StyledInput
                type="checkbox"
                checked={housesChecked}
                onChange={handleHousesChange}
              />
              <p>Houses</p>
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledInput
                type="checkbox"
                checked={apartmentsChecked}
                onChange={handleApartmentsChange}
              />
              <p>Apartments</p>
            </StyledInputContainer>
          </InputContainer>
          <ButtonContainer>
            <Button
              style={{}}
              type="primary"
              size="sm"
              onClick={handleApplyFilter}
            >
              DONE
            </Button>
          </ButtonContainer>
        </CustomModalContainer>
      </ModalOverlay>
    </div>
  );
};

export default PropertyType;
