import styled from "@emotion/styled";
import PropertyImg from "../assets/depa1.png";
import { ImCoinDollar } from "react-icons/im";
import { RiBuildingLine, RiCoinsLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import { FaPaw } from "react-icons/fa";
import { colors } from "../styles";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const CardContainer = styled.div`
  margin: 10px;
  width: 300px;
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
  z-index: 0;
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
  z-index: 0;
`;

const CardImg = styled.img`
  cursor: pointer;
  width: 300px;
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  object-fit: cover;
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
  padding-left: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: left;
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

function PropertyCard({
  id,
  operation,
  photos,
  price,
  category,
  address,
  bedrooms,
  bathrooms,
  area,
  pets,
}) {
  const { user } = useAuth();

  const str = address;
  const firstCommaIndex = str.indexOf(",");
  let array = [];
  if (firstCommaIndex !== -1) {
    const firstPart = str.slice(0, firstCommaIndex);
    const secondPart = str.slice(firstCommaIndex + 1).trim();
    array = [firstPart, secondPart];
  }

  return (
    <CardContainer>
      <div>
        <ForRentalWrap>
          <ForRental>
            <RiCoinsLine />
            {operation}
          </ForRental>
        </ForRentalWrap>
        <Link to={`/properties/${id}`}>
          <CardImg src={photos} alt="" />
        </Link>
      </div>

      <InfoContainer>
        <TypeContainer>
          <PropertyInfo>
            <ImCoinDollar></ImCoinDollar>
            <p>{price}</p>
          </PropertyInfo>
          <PropertyInfo>
            <RiBuildingLine></RiBuildingLine>
            <p>{category}</p>
          </PropertyInfo>
        </TypeContainer>
        <AddressInfo>
          <p>{array[0]}</p>
          <p>{array[1]}</p>
        </AddressInfo>
        <PillsContainer>
          <Pills>
            <BiBed />
            {bedrooms}
          </Pills>
          <Pills>
            <BiBath />
            {bathrooms}
          </Pills>
          <Pills>
            <BiArea />
            {area} m2
          </Pills>
          <Pills>{pets ? <FaPaw /> : null}</Pills>
        </PillsContainer>
      </InfoContainer>
      {user && user.role === 1 ? (
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
      ) : (
        <></>
      )}
    </CardContainer>
  );
}

export default PropertyCard;
