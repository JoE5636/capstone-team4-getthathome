import Select from "react-select";
import styled from "@emotion/styled";
import { colors } from "../styles";
import Header from "../components/header";
import Footer from "../components/footer";
import BedsBaths from "../components/bedsBath";
import MoreOptions from "../components/moreOptions";
import PriceButton from "../components/priceButton";
import PropertyType from "../components/propertyType";
import SearchOption from "../components/searchOption";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 10px;
`;

const MainWrapper = styled.div`
  width: 1190px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${colors.white};
`;

const FiltersWrapper = styled.div`
  width: 1136px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

function PropertiesList() {
  const operationOptions = [
    { value: "rent", label: "Rent" },
    { value: "buy", label: "Buy" },
    { value: "both", label: "Buy & Rent" },
  ];

  return (
    <>
      <Header />
      <Container>
        <MainWrapper>
          <FiltersWrapper>
            <SearchOption />
            <ButtonsWrapper>
              <PriceButton />
              <PropertyType />
              <BedsBaths />
              <MoreOptions />
            </ButtonsWrapper>
            <Select
              options={operationOptions}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused
                    ? `${colors.gray[300]}`
                    : `${colors.pink[400]}`,
                }),
                indicatorSeparator: () => ({
                  appearance: "none",
                }),
                container: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isSelected
                    ? `${colors.gray[300]}`
                    : `${colors.pink[400]}`,
                  width: "140px",
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: state.isFocused
                    ? `${colors.pink[100]}`
                    : `${colors.white}`,
                }),
              }}
            />
          </FiltersWrapper>
        </MainWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default PropertiesList;
