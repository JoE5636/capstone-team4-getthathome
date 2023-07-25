import styled from "@emotion/styled";
// import { useState, useEffect } from "react";
// import { getUser } from "./services/user/userService";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedLandlord from "./AuthenticatedLandlord";
import AuthenticatedSeeker from "./AuthenticatedSeeker";
import { useAuth } from "./context/authContext";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const { user } = useAuth();
  console.log({ user })
  return (
    <Wrapper>
      {user ? (
        user.role === 1 ? (
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
