import styled from "@emotion/styled";
// import { Route, Routes, Navigate } from "react-router-dom";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const user = false;

  return (
    <Wrapper>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Wrapper>
  );
}

export default App;
