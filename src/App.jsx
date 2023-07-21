import styled from "@emotion/styled";
// import { Route, Routes, Navigate } from "react-router-dom";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedLandlord from "./AuthenticatedLandlord";
import AuthenticatedSeeker from "./AuthenticatedSeeker";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const user = { role: 1, value: true };

  return (
    <Wrapper>
      {user.value === true ? (
        user.role === 0 ? (
          <AuthenticatedLandlord />
        ) : (
          <AuthenticatedSeeker />
        )
      ) : (
        <UnauthenticatedApp />
      )}
    </Wrapper>
  );
}

export default App;
