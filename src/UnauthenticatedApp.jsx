import { Route, Routes, Navigate } from "react-router-dom";
import styled from "@emotion/styled";
import LandingPage from "./pages/landingPage";
import RoleSelect from "./pages/roleSelection";
import SignUpForm from "./pages/signupForm";
import PropertiesList from "./pages/propertyList";
import PropertyDetail from "./pages/propertyDetail";
import Header from "./components/header";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default function UnauthenticatedApp() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/home" replace={true} />} />
          <Route path="home" element={<LandingPage />} />
          <Route path="role" element={<RoleSelect />} />
          <Route path="signup/:role" element={<SignUpForm />} />
          <Route path="properties" element={<PropertiesList />} />
          <Route exact path="/properties/:id" element={<PropertyDetail/>} />
          {/* <Route exact path="/properties/:id" element={<h1>Hola</h1>} /> */}
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}
