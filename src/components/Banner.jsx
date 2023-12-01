import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Img = styled("img")`
  width: 65%;
`;

const Banner = ({ movies }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={true}
      >
        {movies.map((movie) => (
          <Box>
            <Img
              // key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
            {/* <p>{movie.original_title}</p> */}
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;
