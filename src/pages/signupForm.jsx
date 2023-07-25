import styled from "@emotion/styled";
import { useAuth } from "../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import { colors } from "../styles";
import { typography } from "../styles";
import Button from "../components/button";
import ListingInput from "../components/listingInput";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";

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

const FormWrapper = styled.form`
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
  const { role } = useParams();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    role: `${role}`,
    name: "",
    email: "",
    phone: "",
    password_digest: "",
  });

  console.log(formData);

  const { name, email, phone, password_digest } = formData;
  // const [confirmation, setConfirmation] = useState(null);

  function handleFormChange(event) {
    const { name, value } = event.target;
    console.log(value);
    // toast("adsasd")
    setFormData({ ...formData, [name]: value });
  }

  // function handleConfirmationChange(event) {
  //   console.log(event.target.value);
  //   setConfirmation(event.taget.value);
  // }

  const navigate = useNavigate();
  function handleSignupClick() {
    navigate("/role");
  }

  function handleSubmit() {
    signup(formData);
    navigate("/home");
  }

  return (
    <>
      <Header onOtherClick={handleSignupClick} />
      <Container>
        <FormWrapper onSubmit={handleSubmit}>
          <SubTitle>Create your Account</SubTitle>
          <InputWrapper>
            <ListingInput
              id="name"
              name="name"
              label={"Name"}
              type="text"
              value={name}
              placeholder="Jhon Doe"
              isFullWidth={false}
              onChange={handleFormChange}
            />
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
              id="phone"
              name="phone"
              label={"Phone"}
              type="text"
              value={phone}
              placeholder="555-555-555"
              isFullWidth={false}
              onChange={handleFormChange}
            />
            <ListingInput
              id="password_digest"
              name="password_digest"
              label={"Password"}
              type="password"
              value={password_digest}
              placeholder="******"
              isFullWidth={false}
              onChange={handleFormChange}
            />
            <ListingInput
              id="confirmation"
              name="confirmation"
              label={"Password Confirmation"}
              type="password"
              // value={confirmation}
              placeholder="******"
              isFullWidth={false}
              // onChange={handleConfirmationChange}
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
