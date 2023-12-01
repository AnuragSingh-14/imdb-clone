import { useEffect, useState } from "react";
import React from "react";
import Header from "./Header";
import { nowPlaying } from "../services/api";
import { NOW_PLAYING } from "../constants/constant";
import Banner from "./Banner";
import Upnext from "./Upnext";
import styled from "@emotion/styled";

const Div = styled("div")`
  display: flex;
`;
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await nowPlaying(NOW_PLAYING);
      setMovies(response.results);
    };

    getData();
  }, []);

  return (
    <div>
      <Header />
      <Div>
        <Banner movies={movies} />
        {/* <Upnext movies={movies} /> */}
      </Div>
    </div>
  );
};

export default Home;
