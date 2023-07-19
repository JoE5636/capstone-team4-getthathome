import { useState } from "react";
import styled from "@emotion/styled";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { ImCoinDollar } from "react-icons/im";
import { RiBuildingLine, RiCoinsLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import { FaPaw } from "react-icons/fa";

import Button from "../components/button";
import { colors } from "../styles";

// import depaImg from "../assets/depa1.png";

const Container = styled.div`
  display: flex;
`;
const LeftContent = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LeftContentWrapper = styled.div`
  margin-left: 20%;
  width: 60%;
`;

const RightContent = styled.div`
  flex: 1;
`;
const OptionContainer = styled.div`
  padding: 32px 0;
`;

const OptionWrapper = styled.div`
  width: 100%;
`;

const OptionContent = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  padding: 32px;
  width: 226px;
  height: 184px;
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.2);
`;

const Option = () => {
  return (
    <>
      <OptionContainer>
        <OptionWrapper>
          <OptionContent>
            <p>Log in or Join to contact the advertiser</p>
            <Button type="primary" rounded>
              <AiOutlineUserAdd style={{ width: "24px", height: "24px" }} />
              LOGIN
            </Button>
          </OptionContent>
        </OptionWrapper>
      </OptionContainer>
    </>
  );
};

///////////////////////////////////////////
const ImageSliderContainer = styled.div`
  padding-top: 40px;
`;

const ImageSliderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.img`
  margin: 0 auto;
  width: 512px;
  height: 384px;
  object-fit: cover;
`;

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliders = [
    {
      url: "https://www.construyehogar.com/wp-content/uploads/2014/06/Plano-de-departamento-peque%C3%B1o-Marsh-Properties.jpeg",
    },
    {
      url: "https://i.pinimg.com/1200x/86/9a/3d/869a3d717518649e84830348737c537e.jpg",
    },
    {
      url: "https://urbania.pe/blog/wp-content/uploads/2015/11/Mayor-demanda-por-departamentos-peque%C3%B1os-Urbania.pe_1.jpg",
    },
    {
      url: "https://planosdecasasmodernas.com/wp-content/uploads/2018/05/modelos-de-departamentos-peque%C3%B1os-y-bonitos.jpg",
    },
  ];

  const prevSlider = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlider = currentIndex === sliders.length - 1;
    const newIndex = isLastSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <ImageSliderContainer>
        <ImageSliderWrapper>
          <div
            style={{ cursor: "pointer" }}
            className="left-button"
            onClick={() => prevSlider()}
          >
            <BsChevronCompactLeft size={32} />
          </div>
          <ImageContainer
            src={sliders[currentIndex].url}
            alt={`Slider ${currentIndex}`}
          />
          <div
            style={{ cursor: "pointer" }}
            className="right-button"
            onClick={() => nextSlider()}
          >
            <BsChevronCompactRight size={32} />
          </div>
        </ImageSliderWrapper>
      </ImageSliderContainer>
    </>
  );
};
///////////////////////////////////////////
const DescriptionContainer = styled.div``;
const MainDescription = styled.div`
  display: flex;
  padding: 16px;
`;
const MainDescriptionLeft = styled.div`
  flex: 3;
  display: flex;
  justify-content: left;
  flex-direction: column;
  h2 {
  }
  h3 {
  }
`;
const MainDescriptionRight = styled.div`
  flex: 1;
  display: flex;
  align-items: end;
  flex-direction: column;
  div {
    display: flex;
    justify-content: right;
  }
  h3 {
  }
  p {
  }
`;

const MainFeatures = styled.div`
  width: 100%;
  border-top: 2px ${colors.pink[500]} solid;
  border-bottom: 2px ${colors.pink[500]} solid;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    list-style: none;
    padding-left: 0px;
  }
  li {
    display: flex;
    gap: 12px;
  }
`;
const About = styled.div`
  h3 {
    padding: 8px 0;
    color: ${colors.pink[500]};
  }
  p {
    padding: 8px 0;
  }
`;
const Location = styled.div`
  padding: 16px 0;
  h3 {
    color: ${colors.pink[500]};
    padding: 8px 0;
  }
`;

const PropertyDetail = () => {
  return (
    <>
      <Container>
        <LeftContent>
          <LeftContentWrapper>
            <ImageSlider></ImageSlider>
            <DescriptionContainer>
              <MainDescription>
                <MainDescriptionLeft>
                  <h2>Francisco de Paula Ugarriza 27</h2>
                  <h3>Miraflores, Lima</h3>
                </MainDescriptionLeft>
                <MainDescriptionRight>
                  <div>
                    <ImCoinDollar size={25} />
                    <h3>3,000</h3>
                  </div>
                  <p>+100</p>
                </MainDescriptionRight>
              </MainDescription>
              <MainFeatures>
                <ul>
                  <li>
                    <BiBed size={25} />
                    <p>4 bedrooms</p>
                  </li>
                  <li>
                    <BiBath size={25} />
                    <p>2 bathrooms</p>
                  </li>
                  <li>
                    <BiArea size={25} />
                    <p>180 m2</p>
                  </li>
                  <li>
                    <FaPaw size={25} />
                    <p>Pets allowed</p>
                  </li>
                </ul>
              </MainFeatures>
              <About>
                <h3>About this property</h3>

                <p>
                  3 Bedroom/2 Bathroom apartment available for ASAP move-in!
                </p>

                <p>
                  Apartment features hardwood floors throughout, virtual
                  doorman, Central AC/heat, dishwasher and a microwave.{" "}
                </p>

                <p>
                  The kitchen has custom cabinetry and the living room is big
                  enough to fit a dinner table, a couch and a tv set up.
                </p>
              </About>
              <Location>
                <h3>Location</h3>
                <p>Francisco de Paula Ugarriza 27, Miraflores, Lima</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42219.03168045388!2d-77.09399423483814!3d-12.012220558844529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cc3d52f51e01%3A0x1f75ae97fb12652c!2sAeropuerto%20Internacional%20Jorge%20Ch%C3%A1vez!5e0!3m2!1ses-419!2spe!4v1689780367983!5m2!1ses-419!2spe"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Location>
            </DescriptionContainer>
          </LeftContentWrapper>
        </LeftContent>
        <RightContent>
          <Option></Option>
        </RightContent>
      </Container>
    </>
  );
};

export default PropertyDetail;
