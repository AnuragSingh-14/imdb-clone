import React from 'react'
import {AppBar, Input, Toolbar, Typography,styled} from '@mui/material'


const Header = () => {


const TypographyWrapper = styled(Typography)`
margin:0px 30px;
    `

const InputWrapper = styled(Input)`
  background: black;
  color: white;
`;

const Div = styled('div')`

`

const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const AppBarWrapper = styled(AppBar)`
background:black;
`


  return (
    <Div>

    <AppBarWrapper position='static'>
      <ToolbarWrapper>
        <TypographyWrapper style={{background:'yellow',color:'black',width:"50px",height:"30px",borderRadius:"10px"}}>Logo</TypographyWrapper>
        <TypographyWrapper>Menu</TypographyWrapper>
        <InputWrapper placeholder="search movies.." />
        <TypographyWrapper>IMDB</TypographyWrapper>
        <TypographyWrapper>WatchList</TypographyWrapper>
        <TypographyWrapper>SignIn</TypographyWrapper>
      </ToolbarWrapper>
    </AppBarWrapper>
    </Div>
  );
}

export default Header
