import styled from "@emotion/styled";
import Select from "react-select";
import { RiUploadLine } from "react-icons/ri";
import { useState } from "react";
import { colors } from "../styles";
import { typography } from "../styles";
import { BiSearch } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import ListingInput from "../components/listingInput";
import TypeSelect from "../components/typeSelect";
import Checkbox from "../components/checkbox";
import Button from "../components/button";

const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
`;

const Title = styled.h1`
  ${typography.head.xl};
  color: ${colors.gray[500]};
  font-weight: 400;
`;

const SubTitle = styled.h1`
  ${typography.head.md};
  color: ${colors.gray[500]};
  font-weight: 400;
`;

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const AreaInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${colors.pink[300]};
  border-radius: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  width: 600px;
  height: 80px;
  padding: 8px 12px;
  border: 1px solid ${colors.pink[300]};
  border-radius: 8px;
  font-size: 0.75rem;
`;

const PhotosContainer = styled.div`
  width: 600px;
  height: 138px;
  background-color: ${colors.stone[100]};
  padding: 8px;
  display: flex;
  align-items: flex-start;
`;

const NoPhotos = styled.div`
  width: 120;
  height: 120px;
  background-color: ${colors.gray[200]};
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PropertyListing() {
  const [propertyType, setPropertyType] = useState("");

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const bathOptions = [
    { value: "1", label: "1 Bath" },
    { value: "2", label: "2 Baths" },
    { value: "3", label: "3 Baths" },
    { value: "4", label: "4 Baths" },
  ];

  const bedroomOptions = [
    { value: "1", label: "1 Bedroom" },
    { value: "2", label: "2 Bedrooms" },
    { value: "3", label: "3 Bedrooms" },
    { value: "4", label: "4 Bedrooms" },
  ];

  return (
    <Container>
      <Title>Create a property listing</Title>
      <TypeSelect />
      <ListingInput
        icon={<BiSearch style={{ width: "20px", height: "20px" }} />}
        id="address"
        name="address"
        label={"Address"}
        type="text"
        placeholder="start typing to autocomplete"
        isFullWidth={true}
      />
      <ListingInput
        icon={<BiDollarCircle style={{ width: "20px", height: "20px" }} />}
        id="rent"
        name="rent"
        label={"Monthly Rent"}
        type="text"
        placeholder="$"
        isFullWidth={false}
      />
      <ListingInput
        icon={<BiDollarCircle style={{ width: "20px", height: "20px" }} />}
        id="manitanance"
        name="manitanance"
        label={"Manitanance"}
        type="text"
        placeholder="$"
        isFullWidth={false}
      />
      <TypeWrapper>
        <label style={{ textTransform: "uppercase", fontSize: ".75rem" }}>
          Property Type
        </label>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          <Checkbox
            text="Apartment"
            value="apartment"
            checked={propertyType === "apartment"}
            onChange={handlePropertyTypeChange}
          />
          <Checkbox
            text="House"
            value="house"
            checked={propertyType === "house"}
            onChange={handlePropertyTypeChange}
          />
        </div>
      </TypeWrapper>
      <OptionsWrapper>
        <div>
          <label style={{ textTransform: "uppercase", fontSize: ".75rem" }}>
            bedrooms
          </label>
          <Select
            options={bedroomOptions}
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
                width: "120px",
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused
                  ? `${colors.pink[100]}`
                  : `${colors.white}`,
              }),
            }}
          />
        </div>
        <div>
          <label style={{ textTransform: "uppercase", fontSize: ".75rem" }}>
            bathrooms
          </label>
          <Select
            options={bathOptions}
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
                width: "120px",
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused
                  ? `${colors.pink[100]}`
                  : `${colors.white}`,
              }),
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label style={{ textTransform: "uppercase", fontSize: ".75rem" }}>
            area in m2
          </label>
          <AreaInput style={{ width: "120px" }} />
        </div>
      </OptionsWrapper>
      <Wrapper>
        <Checkbox text="Pets Allowed" value="pets" />
        <p style={{ fontSize: ".7rem" }}>
          Allowing pets increases the likehood of renters liking the property by
          9001%. It also makes you a better person.
        </p>
      </Wrapper>
      <Wrapper>
        <label style={{ textTransform: "uppercase", fontSize: ".75rem" }}>
          about this property
        </label>
        <TextArea rows={10} placeholder="My apartment is great because..." />
      </Wrapper>
      <Wrapper>
        <SubTitle>Photos</SubTitle>
        <div>
          <label style={{ textTransform: "uppercase", fontSize: ".75rem" }}>
            upload as many photos as you wish
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Button type="primary">
              <RiUploadLine style={{ width: "20px", height: "20px" }} />
              Choose a file
            </Button>
            <span style={{ fontSize: ".8rem", color: `${colors.gray[500]}` }}>
              No file chosen
            </span>
          </div>
          <span style={{ fontSize: ".9rem", color: `${colors.gray[500]}` }}>
            Only images, max 5MB
          </span>
        </div>
      </Wrapper>
      <PhotosContainer>
        <NoPhotos>No Photos Yet</NoPhotos>
      </PhotosContainer>
      <Button style={{ padding: "20px", borderRadius: "10px" }} type="primary">
        PUBLISH PROPPERTY LISTING
      </Button>
    </Container>
  );
}

export default PropertyListing;
