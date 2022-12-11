import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from '../Show/ShowSearchStyled';
import { Star } from '../Styled';

const Showcard = ({ id, image, name, summary,onStarClick, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick={onStarClick}><Star active={isStarred}/></button>
      </div>
    </StyledShowCard>
  );
};

export default Showcard;
