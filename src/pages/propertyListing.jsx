import styled from "@emotion/styled";
import Select from "react-select";
import { useState, useRef } from "react";
import { colors } from "../styles";
import { typography } from "../styles";
import { BiSearch } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import ListingInput from "../components/listingInput";
import TypeSelect from "../components/typeSelect";
import Checkbox from "../components/checkbox";
import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header";
import { tokenKey } from "../config";

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

  const [isRenting, setisRenting] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [checked, setChecked] = useState([]);
  const imagesRef = useRef([])
  const [formData, setFormData] = useState({
    operation: "",
    address: "",
    category: "",
    price: 0,
    maintenance: 0,
    pets: false,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    description: "",
    photos:[]
  });

  const handlePhotoChange = (event) => {
    // setPhotos(event.target.files);
    console.log(event.target.files)

    setFormData({ ...formData, photos: event.target.files })
    // console.log({ ...formData, ...photos });
  };

  const handleSubmit = async () => {

    const formDat = new FormData();
    formDat.append('property[operation]', isRenting ? 'rent' : 'sale');
    formDat.append('property[address]', formData.address);
    formDat.append('property[category]', formData.category);
    formDat.append('property[price]', formData.price);
    formDat.append('property[maintenance]', formData.maintenance);
    formDat.append('property[pets]', formData.pets);
    formDat.append('property[bedrooms]', formData.bedrooms);
    formDat.append('property[bathrooms]', formData.bathrooms);
    formDat.append('property[area]', formData.area);
    formDat.append('property[description]', formData.description);
    // formDat.append('photos', formData.photos);

    for (let i = 0; i < formData.photos.length; i++) {
      formDat.append('property[photos][]', formData.photos[i]);
    }

    const token = sessionStorage.getItem(tokenKey);
    try {
      const response = await fetch("http://127.0.0.1:3000/props", {
        method: "POST",
        body: formDat,
        headers: {
          'Authorization': `${token}`,
        },
      }).then(console.log);

    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
      console.log(setFormData);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === "number" ? parseFloat(value) : value,
      }));
    }
  };

  const isChecked = (value) => value === checked;

  const onSelect = ({ target: { value } }) => {
    setChecked(value);
    setFormData({ ...formData, category: value });
    console.log(formData)
  };

  const handleSelectChange = (selectedOption, field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: selectedOption.value,
    }));
  };

  const handlePetsCheckboxChange = (event) => {
    const { checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      pets: checked,
    }));
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
    <>
      <Header />
      <Container>
        <Title>Create a property listing</Title>

        <TypeSelect
          isRenting={isRenting}
          handleClick={(renting) => setisRenting(renting)}
        />
        <ListingInput
          icon={<BiSearch style={{ width: "20px", height: "20px" }} />}
          id="address"
          name="address"
          label={"Address"}
          type="text"
          placeholder="start typing to autocomplete"
          isFullWidth={true}
          value={formData.address}
          onChange={handleChange}
        />

        {!isRenting && (
          <ListingInput
            icon={<BiDollarCircle style={{ width: "20px", height: "20px" }} />}
            id="price"
            name="price"
            label={"Price"}
            type="text"
            placeholder="$"
            isFullWidth={false}
            value={formData.price}
            onChange={handleChange}
          />
        )}
        <>
          {isRenting && (
            <>
              <ListingInput
                icon={
                  <BiDollarCircle style={{ width: "20px", height: "20px" }} />
                }
                id="price"
                name="price"
                label={"Monthly Rent"}
                type="text"
                placeholder="$"
                isFullWidth={false}
                value={formData.price}
                onChange={handleChange}
              />
              <ListingInput
                icon={
                  <BiDollarCircle style={{ width: "20px", height: "20px" }} />
                }
                id="maintenance"
                name="maintenance"
                label={"Maintenance"}
                type="text"
                placeholder="$"
                isFullWidth={false}
                value={formData.maintenance}
                onChange={handleChange}
              />
            </>
          )}

        </>

        <TypeWrapper>
          <label style={{ textTransform: "uppercase", fontSize: ".75rem" }}>
            Property Type
          </label>
          <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
            <Checkbox
              name="propertyType"
              type="radio"
              text="Department"
              value="Department"
              // checked={true}
              checked={isChecked("Department")}
              onChange={onSelect}
            />
            <Checkbox
              name="propertyType"
              type="radio"
              text="Home"
              value="Home"
              checked={isChecked("Home")}
              onChange={onSelect}
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
              value={bedroomOptions.find(
                (option) => option.value === formData.bedrooms
              )}
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "bedrooms")
              }
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
              value={bathOptions.find(
                (option) => option.value === formData.bathrooms
              )}
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "bathrooms")
              }
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
            <AreaInput
              style={{ width: "120px" }}
              name="area" // Asigna el nombre del campo
              value={formData.area} // Utiliza el valor del estado para el campo
              onChange={handleChange}
            />
          </div>
        </OptionsWrapper>
        <>

          {isRenting && (
            <Wrapper>
              <Checkbox
                name="pets"
                text="Pets Allowed"
                value="pets"
                checked={formData.pets}
                onChange={handlePetsCheckboxChange}
              />
              <p style={{ fontSize: ".7rem" }}>
                Allowing pets increases the likehood of renters liking the
                property by 9001%. It also makes you a better person.
              </p>
            </Wrapper>
          )}

        </>
        <Wrapper>
          <label style={{ textTransform: "uppercase", fontSize: ".75rem" }}>
            about this property
          </label>
          <TextArea
            name="description"
            onChange={handleChange}
            value={formData.description}
            valueRows={10}
            placeholder="My apartment is great because..."
          />
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
              <input
                type="file"
                id="fileInput"
                accept=".jpg, .jpeg, .png"
                onChange={handlePhotoChange}
                multiple
              />
              {/* <Button type="primary">
                <RiUploadLine style={{ width: "20px", height: "20px" }} />
                Choose a file
              </Button>
              <span style={{ fontSize: ".8rem", color: `${colors.gray[500]}` }}>
                No file chosen
              </span> */}
            </div>
            <span style={{ fontSize: ".9rem", color: `${colors.gray[500]}` }}>
              Only images, max 5MB
            </span>
          </div>
        </Wrapper>
        <PhotosContainer>
          <NoPhotos>No Photos Yet</NoPhotos>
        </PhotosContainer>
        <Button
          style={{ padding: "20px", borderRadius: "10px" }}
          type="primary"
          onClick={handleSubmit}
        >
          PUBLISH PROPPERTY LISTING
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default PropertyListing;
