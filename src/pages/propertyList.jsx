import Select from "react-select";
import { useState, useEffect } from "react";
import { fetchProperties } from "../services/properties/properties.service";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { colors } from "../styles";
import Header from "../components/header";
import Footer from "../components/footer";
import BedsBaths from "../components/bedsBath";
import MoreOptions from "../components/moreOptions";
import PriceButton from "../components/priceButton";
import PropertyType from "../components/propertyType";
import SearchOption from "../components/searchOption";
import PropertyCard from "../components/propertyCard";

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding-top: 10px;
`;

const MainWrapper = styled.div`
  width: 1190px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${colors.white};
`;

const PropertiesWrapper = styled.div`
  width: 1190px;
  height: 1300px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
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
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProperties();
      setProperties(data);
    })();
  }, []);

  console.log(properties);

  const navigate = useNavigate();
  function handleSignupClick() {
    navigate("/role");
  }

  const operationOptions = [
    { value: "rent", label: "Rent" },
    { value: "buy", label: "Buy" },
    { value: "both", label: "Buy & Rent" },
  ];

  return (
    <>
      <Header onOtherClick={handleSignupClick} />
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
          <PropertiesWrapper>
            {properties.map((property) => {
              const {
                operation,
                photos,
                price,
                address,
                bedrooms,
                bathrooms,
                area,
                pets,
              } = property;

              const propertyProps = {
                operation,
                photos,
                price,
                address,
                bedrooms,
                bathrooms,
                area,
                pets,
              };

              return <PropertyCard key={property.id} {...propertyProps} />;
            })}
          </PropertiesWrapper>
        </MainWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default PropertiesList;
