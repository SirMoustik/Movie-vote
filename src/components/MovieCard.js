import React, { useState } from "react";
import "./MovieCard.css";

function MovieCard(props) {
  const { movie, categoryIndex, onVote } = props;
  const [canVote, setCanVote] = useState(true);
  const onVoteClick = () => {
    onVote(movie.id, categoryIndex);
    setCanVote(false);
  };
  return (
    <div className="film">
      <img src={movie.img} alt={"Image du film " + movie.title}></img>
      <div className="content">
        <h2>{movie.title}</h2>
        {canVote ? (
          <button onClick={onVoteClick}>Votez !</button>
        ) : (
          <button>Merci pour votre vote !</button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
