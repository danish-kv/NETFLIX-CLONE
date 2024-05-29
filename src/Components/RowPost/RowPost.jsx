import React, { useState, useEffect } from "react"; // import
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  console.log(movies);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error("Network Error", err);
      });
  }, []);

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          console.log("response ==> ",response.data.results[0]);
           setUrlId(response.data.results[0]);
          } else {
            console.log("Emppty");
          }
          console.log(urlId,'urlid',urlId.key,typeof(urlId.key));
      })
      .catch((err) => {
        console.error("Error fetching video", err); 
      });
  };


  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleMovie(movie.id)}
            className={props.isSmall ? "smaller-poster" : "poster"}
            alt="poster"
            src={`${imageUrl+movie.backdrop_path}`}
          />
        ))}

      </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts} ></YouTube>}
    </div>
  );
}

export default RowPost;
