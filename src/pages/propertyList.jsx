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
import { BsCaretLeftSquareFill, BsCaretRightSquareFill } from "react-icons/bs";

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding-top: 10px;
  padding-bottom: 32px;
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

  .disable-button {
    pointer-events: none;
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PropertiesWrapper = styled.div`
  width: 1190px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  flex-direction: row;
  gap: 16px 0px;
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

const PropertyPage = () => {
  return <></>;
};

function PropertiesList() {
  const initialState = {
    price: false,
    propType: false,
    beds: false,
    more: false,
  };
  const initialValues = {
    price: { min: null, max: null },
    propType: { house: false, apartment: false },
    beds: { beds: 0, baths: 0 },
    more: { petsChecked: false, areaRange: { min: null, max: null } },
  };
  const operationOptions = [
    { value: "rent", label: "Rent" },
    { value: "buy", label: "Buy" },
    { value: "both", label: "Buy & Rent" },
  ];
  const [properties, setProperties] = useState([]);
  const [propertiesFiltered, setPropertiesFiltered] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(initialState);
  const [modalData, setModalData] = useState(initialValues);
  const [selectedOption, setSelectedOption] = useState(operationOptions[2]);

  const [page, setPage] = useState(1);
  const max = 6;
  const pages = 1 + parseInt(propertiesFiltered.length / 6);
  const numbers = Array.from({ length: pages }, (_, index) => index + 1);
  useEffect(() => {
    (async () => {
      const data = await fetchProperties();
      setProperties(data);
      setPropertiesFiltered(data);
    })();
  }, []);

  useEffect(() => {
    console.log(modalData);
    setPropertiesFiltered(
      properties.filter((property) => {
        const isPetChecked = modalData.more && modalData.more.petsChecked;
        const isHouseChecked = modalData.propType && modalData.propType.house;
        const isApartmentChecked =
          modalData.propType && modalData.propType.apartment;
        const amountBed = !modalData.beds
          ? 0
          : !modalData.beds.beds
          ? 0
          : modalData.beds.beds;
        const amountBath = !modalData.beds
          ? 0
          : !modalData.beds.baths
          ? 0
          : modalData.beds.baths;

        let { min, max } = modalData.price;
        if (!min) min = 0;
        if (!max) max = 1000000;
        if (isPetChecked && !property.pets) {
          return false;
        }

        let { min: areaMin, max: areaMax } = modalData.more.areaRange;
        if (!areaMin) areaMin = 0;
        if (!areaMax) areaMax = 1000000;

        if (isPetChecked && !property.pets) {
          return false;
        }
        // if (isHouseChecked && isApartmentChecked) {
        //   return true;
        // }

        if (isHouseChecked && property.category !== "Home") {
          return false;
        }

        if (isApartmentChecked && property.category !== "Department") {
          return false;
        }
        if (property.bedrooms < amountBed || property.bathrooms < amountBath) {
          return false;
        }
        if (property.price < parseInt(min) || property.price > parseInt(max)) {
          return false;
        }
        if (
          property.area < parseInt(areaMin) ||
          property.area > parseInt(areaMax)
        ) {
          return false;
        }
        if (selectedOption.value === "rent" && property.operation === "Venta") {
          return false;
        }
        if (selectedOption.value === "buy" && property.operation === "Renta") {
          return false;
        }

        return true;
      })
    );
  }, [modalData, properties, selectedOption]);

  // console.log(initialValues);

  const navigate = useNavigate();
  function handleSignupClick() {
    navigate("/role");
  }

  return (
    <>
      <Header onOtherClick={handleSignupClick} />
      <Container>
        <MainWrapper>
          <FiltersWrapper>
            <SearchOption />
            <ButtonsWrapper>
              <PriceButton
                initialState={initialState}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                setModalData={setModalData}
              />
              <PropertyType
                initialState={initialState}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                setModalData={setModalData}
              />
              <BedsBaths
                initialState={initialState}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                setModalData={setModalData}
              />
              <MoreOptions
                initialState={initialState}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                setModalData={setModalData}
              />
            </ButtonsWrapper>
            <Select
              options={operationOptions}
              value={selectedOption}
              onChange={(selectedOption) => {
                console.log("Opción seleccionada:", selectedOption.value);
                setSelectedOption(selectedOption);
              }}
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
            {propertiesFiltered
              .slice((page - 1) * max, page * max)
              .map((property) => {
                const {
                  id,
                  operation,
                  photos,
                  price,
                  address,
                  bedrooms,
                  bathrooms,
                  area,
                  category,
                  pets,
                } = property;

                const propertyProps = {
                  id,
                  operation,
                  category,
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <BsCaretLeftSquareFill
              onClick={() => {
                setPage((val) => Math.max(val - 1, 1));
              }}
              className={page === 1 ? "disable-button" : ""}
              style={{ width: "24px", height: "24px", cursor: "pointer" }}
            />
            <div>
              {numbers.map((number) => (
                <button
                  key={number}
                  style={{
                    backgroundColor: number === page ? "#aaa" : "",
                    width: "30px",
                    height: "30px",
                  }}
                  onClick={() => setPage(number)}
                >
                  {number}
                </button>
              ))}
            </div>
            <BsCaretRightSquareFill
              onClick={() => {
                setPage((val) => Math.min(val + 1, pages));
              }}
              className={page === pages ? "disable-button" : ""}
              style={{ width: "24px", height: "24px", cursor: "pointer" }}
            />
          </div>
        </MainWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default PropertiesList;
