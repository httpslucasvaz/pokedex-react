
import { Container, Box, LinearProgress } from "@mui/material";
import { styled } from "@mui/system";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


export const Wrapper = styled(
    Box,
    {}
  )({
    width: "100%",
    minHeight: "100vh",
    maxHeight: 'auto',
    backgroundColor: "#212121",
    webkitFontSmoothing: "antialiased",
    
  })


  export const ContainerDetails = styled(
    Container,
    {}
  )({
    width: "100%",
    minHeight: "100vh",
    maxHeight: 'auto',
    justifyContent: 'center',
    backgroundColor: "#212121",
  });

  export const Header = styled(
    Box,
    {}
  )({
    width: "100%",
    height: '45%',
    padding: '10px',
    

  })

  export const ButtonTop = styled(Box, {})({
    display: 'flex',
    justifyContent: 'space-between'
  })

  export const ArrowBackIos = styled(ArrowBackIosIcon, {})({
    fontSize: '34px',
    color: '#212121'
  })

  export const FavoriteIconBorder = styled(FavoriteBorder, {})({
    color: '#ba2f2f',
    fontSize: '34px',
  
    
  })
  
  export const FavoritesIcon = styled(Favorite, {})({
    color: '#ba2f2f',
    fontSize: '34px',
  
  })

  export const ContainerTitleandId = styled(Box, {})({
    display: 'flex',
    justifyContent: 'space-between'
  })

  export const PokemonName = styled(Box, {})({
    fontSize: '42px',
    color: '#212121'
  })

  export const ContainerType = styled(Box, {})({
    display: "flex",
})

export const ContainerImg = styled(
    Box,
    {}
  )({
    display: "flex",
    height: '50%',
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-25px"
  })

  export const Body = styled(
    Box,
    {}
  )({

    height: '55%',
    padding: '30px',
    backgroundColor: "#212121",
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    
  })

  export const Description = styled(Box, {})({
    color: '#dadce0'
    
  })

  
  export const Title = styled(Box, {})({
    display: "inline-block",
    marginBottom: '20px',
    fontSize: '22px',
    fontWeight: '500',
    color: '#dadce0'
  })

  export const StatsBody = styled(Box, {})({
    width: '100%',
    color: '#dadce0',
    
  })

  export const StatsDetails = styled(Box, {})({
    display: 'flex',
    marginBottom: '8px',
    
  })

  export const Abilities = styled(Box, {})({
    display: 'block',
    fontSize: '18px',
    color: '#dadce0',
    marginTop: '-10px',
    
  })

  export const MoreInfo = styled(Box, {})({
    display: 'flex',
    color: '#dadce0',
    
    
  })

  export const MoreInfoName = styled(Box, {})({
    width: '60%',
    fontSize: '18px',
    fontWeight: '600',
    
  })

  export const LoadingContainer = styled(Box, {})({
    display: "block",
    justifyContent: "center",
    alignItems: "center",
  })