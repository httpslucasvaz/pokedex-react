// import styled from "styled-components";
import { Container, Box, AppBar, Button, TextField, IconButton, Pagination  } from "@mui/material";
import { styled } from "@mui/system";

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import NavigationIcon from '@mui/icons-material/Navigation';

export const Wrapper = styled(
  Box,
  {}
)({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#212121",
  webkitFontSmoothing: "antialiased",
  position: "relative",
});

export const MenuBar = styled(
  AppBar,
  {}
)({
  height: "70px",
  display: "flex",
  justifyContent: "center",
  padding: "10px",
  backgroundColor: "#F6C90E",
});

export const MenuButton = styled(
  Button,
  {}
)({
  display: "flex",
  fontWeight: 700,
  color: "#212121",
  transition: "all 0.3s",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    backgroundColor: "#212121",
    color: "#dadce0",
  },
});

export const ContainerHome = styled(
  Container,
  {}
)({
  display: "flex",
  flexWrap: "wrap",
  flex: " 1 1 290px",
  gap: "10px",
  width: "80%",
  minHeight: "80vh",
  justifyContent: "center",
  alignItems: "center",
  
});

export const Card = styled(
  Box,
  {}
)({
  width: "200px",
  height: "325px",
  borderRadius: "10px",
  margin: "10px",
  boxShadow: "0px 0px 6px 6px rgba(0,0,0,0.2)",
  
});

export const CardHeader = styled(
  Box,
  {}
)({
  display: "flex",
  width: "100%",
  height: "60px",
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  fontSize: '20px',
  fontWeight: '500',
  color: '#212121',
  cursor: "default",
});

export const ContainerInfo = styled(Box, {})({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
})

export const ButtonInfo = styled(IconButton, {})({
  
  
})

export const Info = styled(InfoIcon, {})({
 fontSize: '30px',
 color: '#F6C90E',


})

export const Search = styled(TextField, {})({
  
  '& label.Mui-focused': {
    color: '#dadce0',
    
  },
  '& .MuiFilledInput-underline:after': {
    border: '2px solid #F6C90E',
    outline: 'none',
    
  },
  
  '& .MuiFilledInput-input': {
    color: 'white',
    fontSize: '18px',
    backgroundColor: '#272727',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
    boxShadow: '0px 0px 9px 7px rgba(0,0,0,0.1)',
    
},

'& .MuiFilledInput-root': {
    marginBottom: '10px',
},

'& .MuiFilledInput-input:placeholder': {
    color: '#dadce0',
    
},

'& label': {
    color: '#dadce0',
}
})

export const CardBody = styled(
  Box,
  {}
)({
  padding: "10px",
});

export const ContainerImg = styled(
  Box,
  {}
)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-25px"
});

export const ContainerType = styled(Box, {})({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '10px',
    marginBottom: '15px',
});

export const ContainerFavorite = styled(Box, {})({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const FavoriteIconBorder = styled(FavoriteBorder, {})({
  color: '#ba2f2f',
  fontSize: '28px',

  
})

export const FavoritesIcon = styled(Favorite, {})({
  color: '#ba2f2f',
  fontSize: '28px',

})

export const LoadingContainer = styled(Box, {})({
  display: "block",
  justifyContent: "center",
  alignItems: "center",
})

export const ContainerGoToTop = styled(Box, {})({
  position: 'fixed',
  bottom: '20px',
  right: '10px',
})

export const GoToTopIcon = styled(NavigationIcon, {})({
  color: '#212121',
  backgroundColor: '#F6C90E',
  borderRadius: '99px',
  fontSize: '38px',
  padding: '4px',

})  