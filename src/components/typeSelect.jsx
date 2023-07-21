import styled from "@emotion/styled";
import { colors } from "../styles";
import { typography } from "../styles";

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
  background-color: ${props => (props.active ? colors.pink[400] : colors.white)};
  color: ${props => (props.active ? colors.white : colors.gray[400])};
  cursor: pointer;
  &:active {
    background-color: ${colors.pink[400]};
    color: ${colors.white};
  }
`;

const SelectWrapper = styled.div`
  width: 101px;
  gap: 0px;
  display: flex;
  flex-directon: row;
  border: none;
`;

function TypeSelect({ handleClick, isRenting }) {
  return (
    <SelectWrapper>
      <SelectButton active={isRenting} onClick={() => handleClick(true)} style={{ borderRadius: "8px 0px 0px 8px" }}>
        RENT
      </SelectButton>
      <SelectButton active={!isRenting} onClick={() => handleClick(false)} style={{ borderRadius: "0px 8px 8px 0px" }}>
        SALE
      </SelectButton>
    </SelectWrapper>
  );
}

export default TypeSelect;
