import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { getUser } from "./services/user/userService";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedLandlord from "./AuthenticatedLandlord";
import AuthenticatedSeeker from "./AuthenticatedSeeker";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  // const user = { role: 0, value: false };
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(user);

  return (
    <Wrapper>
      {user !== null ? (
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
