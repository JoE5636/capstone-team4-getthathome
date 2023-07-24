import React, { useState } from "react";
import Button from "./button";
import styled from "@emotion/styled";
import { RiArrowDownSLine } from "react-icons/ri";
import { colors } from "../styles";

const ModalOverlay = styled.div`
  z-index: 100;
  position: absolute;
  left: 0;
  right: 0;
  width: 247px;
  height: 180px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

const CustomModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
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
  gap: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledInputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 4px;
  width: 100%;
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

const StyledInputText = styled.input`
  width: 50%;
  border-radius: 8px;
  border: 1px solid ${colors.pink[400]};
  padding-left: 30px;
  &&:focus {
    border: 1px solid ${colors.pink[400]};
  }
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  appearance: none;
`;

const MoreOptions = ({ modalIsOpen, setModalIsOpen, initialState, setModalData }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [petsChecked, setPetsChecked] = useState(false);
  const [areaRange, setAreaRange] = useState({ min: null, max: null });
  const { min, max } = areaRange;

  const handleModalOpen = () => {
    setModalIsOpen({ ...initialState, more: true });
  };

  const handleModalClose = () => {
    setModalIsOpen(initialState);
  };

  const handlePetsChange = (event) => {
    setPetsChecked(event.target.checked);
  };

  const handleAreaRangeChange = (event) => {
    const { name, value } = event.target;
    setAreaRange({ ...areaRange, [name]: value });
  };

  const handleDoneAction = () => {
    // console.log({ petsChecked, areaRange });
    setModalData((data) => ({...data, more: { petsChecked, areaRange } }))
    handleModalClose();
  };
  let isOpen;
  return (
    <div style={{ paddingLeft: "20px", position: "relative" }}>
      <Button type="primary" size="lg" rounded onClick={handleModalOpen}>
        MORE <RiArrowDownSLine />
      </Button>

      <ModalOverlay isOpen={modalIsOpen.more} onRequestClose={handleModalClose}>
        <CustomModalContainer>
          <StyledInputContainer>
            <StyledInput
              type="checkbox"
              checked={petsChecked}
              onChange={handlePetsChange}
            />
            <p>Pets Allowed</p>
          </StyledInputContainer>

          <LabelText>AREA IN M2</LabelText>
          <InputContainer>
            <StyledInputText
              type="number"
              name="min"
              placeholder="min"
              value={min}
              onChange={handleAreaRangeChange}
            />
            <span> - </span>
            <StyledInputText
              type="number"
              name="max"
              placeholder="max"
              value={max}
              onChange={handleAreaRangeChange}
            />
          </InputContainer>

          <ButtonContainer>
            <Button
              style={{}}
              type="primary"
              size="sm"
              onClick={handleDoneAction}
            >
              DONE
            </Button>
          </ButtonContainer>
        </CustomModalContainer>
      </ModalOverlay>
    </div>
  );
};

export default MoreOptions;
