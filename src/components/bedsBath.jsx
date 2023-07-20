import React, { useState } from "react";
import Button from "./button";
import styled from "@emotion/styled";
import { colors } from "../styles";
import { typography } from "../styles";

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 254px;
  height: 168px;
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
`;

const LabelText = styled.p`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const OptionsContainer = styled.div`
  padding: 8px 8px 0;
  margin-right: 80px;
`;

const SelectButton = styled.button`
  appearance: none;
  margin: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${typography.text.sm}
  width: 50px;
  height: 36px;
  border: 1px solid ${colors.gray[300]};
  background-color: ${colors.white};
  color: ${colors.gray[400]};
  cursor: pointer;
  &:active {
    background-color: ${colors.pink[400]};
    color: ${colors.white};
  }
  padding: 0 8px;
`;

const SelectWrapper = styled.div`
  width: 101px;
  gap: 0px;
  display: flex;
  flex-directon: row;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const BedsBaths = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleApplyFilter = () => {
    // Aquí puedes realizar cualquier acción con los valores de los checkboxes
    // Por ejemplo, puedes enviarlos a una API o utilizarlos en tu lógica de filtrado
    setModalIsOpen(false);
  };
  return (
    <div style={{ paddingLeft: "20px" }}>
      <Button type="primary" size="lg" rounded onClick={handleModalOpen}>
        BEDS & BATH
      </Button>

      <ModalOverlay isOpen={modalIsOpen} onRequestClose={handleModalClose}>
        <CustomModalContainer>
          <OptionsContainer>
            <LabelText>BEDS</LabelText>
            <SelectWrapper>
              <SelectButton style={{ borderRadius: "8px 0px 0px 8px" }}>
                Any
              </SelectButton>
              <SelectButton>1+</SelectButton>
              <SelectButton>2+</SelectButton>
              <SelectButton>3+</SelectButton>
              <SelectButton style={{ borderRadius: "0px 8px 8px 0px" }}>
                4+
              </SelectButton>
            </SelectWrapper>
          </OptionsContainer>
          <OptionsContainer>
            <LabelText>BATHS</LabelText>
            <SelectWrapper>
              <SelectButton style={{ borderRadius: "8px 0px 0px 8px" }}>
                Any
              </SelectButton>
              <SelectButton>1+</SelectButton>
              <SelectButton>2+</SelectButton>
              <SelectButton>3+</SelectButton>
              <SelectButton style={{ borderRadius: "0px 8px 8px 0px" }}>
                4+
              </SelectButton>
            </SelectWrapper>
          </OptionsContainer>
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

export default BedsBaths;
