import styled from "@emotion/styled";
import { useState } from "react";
import CheckFill from "../assets/check-fill.svg";
import { colors } from "../styles";
import { typography } from "../styles";

const StyledCheckbox = styled.input`
  appearance: none;
  display: flex;
  padding: 2px;
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.pink[400]};

  &:checked {
    background-color: ${colors.pink[300]};
    background-image: url(${CheckFill});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
  }

  &:disabled {
    background-color: ${colors.white};
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
`;

const CheckboxText = styled.span`
  margin-left: 8px;
  ${typography.text.sm}
`;

function Checkbox({ text, value, checked, disabled, onChange }) {
  return (
    <CheckboxContainer>
      <StyledCheckbox
        type="checkbox"
        name="propertyType"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <CheckboxText>{text}</CheckboxText>
    </CheckboxContainer>
  );
}

export default Checkbox;
