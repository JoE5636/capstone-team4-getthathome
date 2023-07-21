import styled from "@emotion/styled";
import { useState } from "react";
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

const FormWrapper = styled.form`
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

function LoginModal({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });

  console.log(formData);

  const { email, password } = formData;
  // const [confirmation, setConfirmation] = useState(null);

  function handleFormChange(event) {
    const { name, value } = event.target;
    console.log(value);
    // toast("adsasd")
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <div>
      <FormWrapper onSubmit={handleSubmit}>
        <SubTitle>Login</SubTitle>

        <ListingInput
          id="email"
          name="email"
          label={"Email"}
          type="email"
          value={email}
          placeholder="example@mail.com"
          isFullWidth={false}
          onChange={handleFormChange}
        />
        <ListingInput
          id="password"
          name="password"
          label={"Password"}
          type="password"
          value={password}
          placeholder="******"
          isFullWidth={false}
          onChange={handleFormChange}
        />

        <Button type="primary" rounded>
          <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
          LOGIN
        </Button>
      </FormWrapper>
    </div>
  );
}

export default LoginModal;
