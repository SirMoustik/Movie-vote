import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./CategoryPage.css";

const categories = [
  "Le film le plus de gauche",
  "Le personnage le plus antipathique",
  "Le film le plus d'actualité",
];

function CategoryPage(props) {
  const { categoryId } = useParams();
  const { movies, onVote } = props;

  return (
    <div className="category">
      <h1>{categories[categoryId]}</h1>
      <div className="all_films ">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            onVote={onVote}
            movie={movie}
            categoryIndex={categoryId}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
