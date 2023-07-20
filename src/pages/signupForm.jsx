import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { colors } from "../styles";
import { typography } from "../styles";
import Button from "../components/button";
import ListingInput from "../components/listingInput";
import Header from "../components/header";
import Footer from "../components/footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(
    to bottom,
    ${colors.pink[100]} 50%,
    ${colors.white} 50%
  );
`;

const SubTitle = styled.h1`
  ${typography.head.sm};
  color: ${colors.gray[500]};
  font-weight: 300;
`;

const FormWrapper = styled.div`
  width: 388px;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  gap: 16px;
  padding: 16px;
  background-color: ${colors.white};
`;

const InputWrapper = styled.div`
  width: 356px;
  height: 352px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: ${colors.white};
  margin-bottom: 10px;
`;

function SignUpForm() {
  const navigate = useNavigate();
  function handleSignupClick() {
    navigate("/role");
  }
  return (
    <>
      <Header onOtherClick={handleSignupClick} />
      <Container>
        <FormWrapper>
          <SubTitle>Create your Account</SubTitle>
          <InputWrapper>
            <ListingInput
              id="name"
              name="name"
              label={"Name"}
              type="text"
              placeholder="Jhon Doe"
              isFullWidth={false}
            />
            <ListingInput
              id="email"
              name="email"
              label={"Email"}
              type="email"
              placeholder="example@mail.com"
              isFullWidth={false}
            />
            <ListingInput
              id="phone"
              name="phone"
              label={"Phone"}
              type="text"
              placeholder="555-555-555"
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
            <ListingInput
              id="confirmation"
              name="confirmation"
              label={"Password Confirmation"}
              type="password"
              placeholder="******"
              isFullWidth={false}
            />
          </InputWrapper>
          <Button style={{ borderRadius: "10px" }} type="primary">
            CREATE ACCOUNT
          </Button>
        </FormWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default SignUpForm;

<ListingInput
  id="manitanance"
  name="manitanance"
  label={"Manitanance"}
  type="text"
  placeholder="$"
  isFullWidth={false}
/>;
