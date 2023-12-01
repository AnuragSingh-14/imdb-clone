

import React from 'react'
import {Box} from '@mui/material'

const Upnext = ({movies}) => {
  return (
    <Box>
      {movies.splice(0,3).map((movie) => (
        <Box>
          <img width='10%'
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="poster"
          />
          <p>{movie.title}</p>
        </Box>
      ))}
    </Box>
  );
}

export default Upnext;
