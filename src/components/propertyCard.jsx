import styled from "@emotion/styled";
import PropertyImg from "../assets/depa1.png";
import { ImCoinDollar } from "react-icons/im";
import { RiBuildingLine, RiCoinsLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import { FaPaw } from "react-icons/fa";
import { colors } from "../styles";

const CardContainer = styled.div`
  margin: 30px 30px;
  width: 300px;
  heigth: 306px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
`;

const ForRentalWrap = styled.div`
  position: relative;
`;

const ForRental = styled.span`
  display: flex;
  flex-direction: row;
  position: absolute;
  gap: 4px;
  top: 0;
  right: 0;
  font-size: 14px;
  line-height: 1.25rem;
  padding: 4px 8px;
  background-color: ${colors.pink[400]};
  color: ${colors.white};
  align-items: center;
`;

const ForSale = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  line-height: 1.25rem;
  padding: 4px 8px;
  background-color: ${colors.pink[700]};
  color: ${colors.white};
  align-items: center;
`;

const CardImg = styled.img`
  width: 300px;
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const TypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PropertyInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: ${colors.gray[700]};
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
`;

const AddressInfo = styled.div`
  color: ${colors.gray[700]};
  padding: 8px 0 16px 0;
`;

const PillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  color: ${colors.gray[700]};
`;

const Pills = styled.span`
  display: flex;
  gap: 4px;
  color: ${colors.gray[700]};
  padding: 0 8px 0 0;
  align-items: center;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.pink[700]};
  color: ${colors.white};
  gap: 32px;
  align-items: center;
`;

const ActionSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`;

function PropertyCard() {
  return (
    <CardContainer>
      <div>
        <ForRentalWrap>
          <ForRental>
            <RiCoinsLine />
            For Rental
          </ForRental>
        </ForRentalWrap>
        <CardImg src={PropertyImg} alt="" />
      </div>

      <InfoContainer>
        <TypeContainer>
          <PropertyInfo>
            <ImCoinDollar></ImCoinDollar>
            <p>3,000</p>
          </PropertyInfo>
          <PropertyInfo>
            <RiBuildingLine></RiBuildingLine>
            <p>Apartment</p>
          </PropertyInfo>
        </TypeContainer>
        <AddressInfo>
          <p>86872 Jacob Gateway,</p>
          <p>Durganport, WV 48044</p>
        </AddressInfo>
        <PillsContainer>
          <Pills>
            <BiBed />4
          </Pills>
          <Pills>
            <BiBath />2
          </Pills>
          <Pills>
            <BiArea />
            180 m2
          </Pills>
          <Pills>
            <FaPaw />
          </Pills>
        </PillsContainer>
      </InfoContainer>
      <ActionContainer>
        <ActionSpan>
          <BiEdit />
          Edit
        </ActionSpan>
        <ActionSpan>
          <SlClose />
          Close
        </ActionSpan>
      </ActionContainer>
    </CardContainer>
  );
}

export default PropertyCard;
