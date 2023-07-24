import React, { useState } from "react";
import Button from "./button";
import styled from "@emotion/styled";
import { ImCoinDollar } from "react-icons/im";
import { colors } from "../styles";

const ModalOverlay = styled.div`
z-index: 100;
  position: absolute;
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
  position: relative;
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 5px;
  width: 102px;
  height: 36px;
`;

const IconContainer = styled.span`
  position: absolute;
  left: 8px; /* Ajusta la posición del icono dentro del contenedor */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${colors.pink[400]};
  padding-left: 30px; /* Espacio para el icono en el lado izquierdo */
`;

const PriceButton = ({ modalIsOpen, setModalIsOpen, initialState, setModalData }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const { min, max } = priceRange;
  const handleModalOpen = () => {
    setModalIsOpen({ ...initialState, price: true });
  };

  const handleModalClose = () => {
    setModalIsOpen(initialState);
  };

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({ ...priceRange, [name]: parseInt(value) });
  };

  const handlePriceSave = () => {
    handleModalClose();
    setModalData((data) => ({...data, price: priceRange }))
    // console.log(priceRange);
  };

  return (
    <div style={{ paddingLeft: "20px", position: "relative" }}>
      <Button type="primary" size="lg" rounded onClick={handleModalOpen}>
        PRICE
      </Button>

      <ModalOverlay
        isOpen={modalIsOpen.price}
        onRequestClose={handleModalClose}
      >
        <CustomModalContainer>
          <LabelText>PRICE RANGE</LabelText>
          <InputContainer>
            <StyledInputContainer>
              <IconContainer>
                <ImCoinDollar />
              </IconContainer>
              <StyledInput
                type="number"
                name="min"
                placeholder="min"
                value={min}
                onChange={handlePriceRangeChange}
              />
            </StyledInputContainer>
            <span> - </span>
            <StyledInputContainer>
              {/* Icono en el lado izquierdo del input */}
              <IconContainer>
                <ImCoinDollar />
              </IconContainer>
              {/* Input con el placeholder personalizado */}
              <StyledInput
                type="number"
                name="max"
                placeholder="max"
                value={max}
                onChange={handlePriceRangeChange}
              />
            </StyledInputContainer>
          </InputContainer>
          <ButtonContainer>
            <Button
              style={{}}
              type="primary"
              size="sm"
              onClick={handlePriceSave}
            >
              DONE
            </Button>
          </ButtonContainer>
        </CustomModalContainer>
      </ModalOverlay>
    </div>
  );
};

export default PriceButton;
