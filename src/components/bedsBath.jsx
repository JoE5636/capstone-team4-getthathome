import React, { useState, useRef } from "react";
import Button from "./button";
import styled from "@emotion/styled";
import { colors } from "../styles";
import { typography } from "../styles";

const ModalOverlay = styled.div`
  z-index: 100;
  position: absolute;
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
  flex-direction: row;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const BedsBaths = ({ modalIsOpen, setModalIsOpen, initialState, setModalData }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const modalRef = useRef(null);
  const handleModalOpen = () => {
    setModalIsOpen({ ...initialState, beds: true });
  };
  const handleModalClose = () => {
    setModalIsOpen(initialState);
  };
  const handleApplyFilter = () => {
    handleModalClose();
    setModalData((data) => ({...data, beds: { beds, baths } }))
    // console.log({ beds, baths });
  };

  return (
    <div style={{ paddingLeft: "20px", position: "relative" }}>
      <Button type="primary" size="lg" rounded onClick={handleModalOpen}>
        BEDS & BATH
      </Button>

      <ModalOverlay isOpen={modalIsOpen.beds}>
        <CustomModalContainer ref={modalRef}>
          <OptionsContainer>
            <LabelText>BEDS</LabelText>
            <SelectWrapper>
              <SelectButton
                onClick={() => {
                  setBeds(0);
                }}
                style={{
                  borderRadius: "8px 0px 0px 8px",
                  backgroundColor:
                    beds === 0 ? `${colors.pink[600]}` : colors.white,
                }}
              >
                Any
              </SelectButton>
              <SelectButton
                onClick={() => {
                  setBeds(1);
                }}
                style={{
                  backgroundColor:
                    beds === 1 ? `${colors.pink[600]}` : colors.white,
                }}
              >
                1+
              </SelectButton>
              <SelectButton
                onClick={() => {
                  setBeds(2);
                }}
                style={{
                  backgroundColor:
                    beds === 2 ? `${colors.pink[600]}` : colors.white,
                }}
              >
                2+
              </SelectButton>
              <SelectButton
                onClick={() => {
                  setBeds(3);
                }}
                style={{
                  backgroundColor:
                    beds === 3 ? `${colors.pink[600]}` : colors.white,
                }}
              >
                3+
              </SelectButton>
              <SelectButton
                onClick={() => {
                  setBeds(4);
                }}
                style={{
                  borderRadius: "0px 8px 8px 0px",
                  backgroundColor:
                    beds === 4 ? `${colors.pink[600]}` : colors.white,
                }}
              >
                4+
              </SelectButton>
            </SelectWrapper>
          </OptionsContainer>

          <OptionsContainer>
            <LabelText>BATHS</LabelText>
            <SelectWrapper>
              <SelectButton
                onClick={() => {
                  setBaths(0);
                }}
                style={{
                  borderRadius: "8px 0px 0px 8px",
                  backgroundColor:
                    baths === 0 ? `${colors.pink[600]}` : colors.white,
                }}
              >
                Any
              </SelectButton>
              <SelectButton
                onClick={() => {
                  setBaths(1);
                }}
                style={{
                  backgroundColor:
                    baths === 1 ? `${colors.pink[600]}` : colors.white,
                }}
              >
                1+
              </SelectButton>
              <SelectButton
                onClick={() => {
                  setBaths(2);
                }}
                style={{
                  backgroundColor:
                    baths === 2 ? `${colors.pink[600]}` : colors.white,
                }}
              >
                2+
              </SelectButton>
              <SelectButton
                onClick={() => {
                  setBaths(3);
                }}
                style={{
                  backgroundColor:
                    baths === 3 ? `${colors.pink[600]}` : colors.white,
                }}
              >
                3+
              </SelectButton>
              <SelectButton
                onClick={() => {
                  setBaths(4);
                }}
                style={{
                  borderRadius: "0px 8px 8px 0px",
                  backgroundColor:
                    baths === 4 ? `${colors.pink[600]}` : colors.white,
                }}
              >
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
