import React, { useState, useEffect } from "react";
import "./utils/reset.css";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./page/HomePage";
import CategoryPage from "./page/CategoryPage";
import AirtablePage from "./page/AirtablePage";
import Airtable from "airtable";

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const base = new Airtable({
    apiKey: "your secret token here",
  }).base("base id here");

  const refreshMovieData = () => {
    base("Film")
      .select({
        view: "Grid view",
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        let m = [];
        records.forEach(function (record) {
          m.push({
            id: record.getId(),
            title: record.get("Nom"),
            img: record.get("Image")[0].url,
            category: [
              record.get("Le plus de gauche"),
              record.get("Le personnage le plus antipathique"),
              record.get("Le plus d'actualité"),
            ],
          });
        });
        setMovies(m);
      });
  };

  useEffect(() => {
    refreshMovieData();
  }, []);

  const onVote = (movieId, categoryIndex) => {
    let field = "";
    switch (+categoryIndex) {
      case 0:
        field = "Le plus de gauche";
        break;
      case 1:
        field = "Le personnage le plus antipathique";
        break;
      case 2:
        field = "Le plus d'actualité";
        break;
      default:
        break;
    }
    base("Film").find(movieId, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      let vote = record.get(field);
      base("Film").update([
        {
          id: movieId,
          fields: {
            [field]: vote + 1,
          },
        },
      ]);
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/category/:categoryId"
          element={<CategoryPage movies={movies} onVote={onVote} />}
        />
        <Route path="/airtable" element={<AirtablePage />} />
      </Routes>
    </div>
  );
}

export default App;
