import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

// import { Text } from "./Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ isFullWidth }) => (isFullWidth ? "600px" : "366px")};
`;

const StyledInput = styled.input`
  background-color: ${colors.white};
  border: none;
  width: ${({ isFullWidth }) => (isFullWidth ? "600px" : "366px")};
`;

const InputWrapper = styled.div`
  padding: 8px 12px;
  border: 1px solid ${colors.pink[300]};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const StyledLabel = styled.label`
  ${typography.text.xs};
  text-transform: uppercase;
`;

function ListingInput({ icon, label, isFullWidth, ...rest }) {
  return (
    <Container isFullWidth={isFullWidth}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <InputWrapper>
        {icon}
        <StyledInput {...rest} />
      </InputWrapper>
    </Container>
  );
}

export default ListingInput;
