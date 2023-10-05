import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";

const StyledFaRegBookmark = styled(FaRegBookmark)`
  align-self: top;
  padding-left: 25px;
`;

const StyledFaBookmark = styled(FaBookmark)`
  align-self: top;
  padding-left: 25px;
`;

const FavoritesIcon = () => {
    const [bookmarked, setBookmarked] = useState(false)
    const bbChange = () => {
      setBookmarked(!bookmarked);
    };

    return (
      <div onClick={bbChange}>
        {bookmarked ? <StyledFaBookmark /> : <StyledFaRegBookmark />}
      </div>
    );
}

export default FavoritesIcon;