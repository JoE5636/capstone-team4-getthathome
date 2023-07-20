import React, { useState } from "react";

import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { colors } from "../styles";

const InputContainer = styled.div`
  position: relative;
  width: 300px;
  padding: 8px;
  border: 1px solid ${colors.pink[400]};
  border-radius: 8px 8px 0px 0px;
  &&:focus {
    border: 1px solid ${colors.pink[700]};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding-left: 28px;
  border: none;
  outline: none;
`;

const SearchIcon = styled(BiSearch)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #666;
`;

const ArrowDownIcon = styled(RiArrowDownSLine)`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #666;
  cursor: pointer;
`;

const RecentSearches = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${colors.pink[400]};
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.open ? "block" : "none")};
`;

function SearchOption() {
  const [showRecentSearches, setShowRecentSearches] = useState(false);

  const handleArrowDownClick = () => {
    setShowRecentSearches(!showRecentSearches);
  };
  return (
    <InputContainer>
      <SearchIcon />
      <StyledInput type="text" placeholder="Search by address" />
      <ArrowDownIcon onClick={handleArrowDownClick} />
      <RecentSearches open={showRecentSearches}>
        Recent Searches...
      </RecentSearches>
    </InputContainer>
  );
}

export default SearchOption;
