import styled from "@emotion/styled";
import { AiOutlineUserAdd } from "react-icons/ai";
import { colors } from "../styles";
import { typography } from "../styles";
import Button from "../components/button";
import ListingInput from "../components/listingInput";

const SubTitle = styled.h1`
  ${typography.head.sm};
  color: ${colors.gray[500]};
  font-weight: 300;
`;

const FormWrapper = styled.div`
  position: relative;
  width: 388px;
  height: 256;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  gap: 16px;
  padding: 16px;
  background-color: ${colors.white};
  z-index: 100;
`;

function LoginModal({ onSubmitClick }) {
  return (
    <div>
      <FormWrapper>
        <SubTitle>Login</SubTitle>

        <ListingInput
          id="email"
          name="email"
          label={"Email"}
          type="email"
          placeholder="example@mail.com"
          isFullWidth={false}
        />
        <ListingInput
          id="password"
          name="password"
          label={"Password"}
          type="password"
          placeholder="******"
          isFullWidth={false}
        />

        <Button type="primary" rounded onClick={onSubmitClick}>
          <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
          LOGIN
        </Button>
      </FormWrapper>
    </div>
  );
}

export default LoginModal;
