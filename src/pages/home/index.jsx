import React, { useContext, useEffect, useState } from "react";
import {
  Wrapper,
  ContainerHome,
  MenuBar,
  MenuButton,
  Card,
  CardHeader,
  Search,
  CardBody,
  ContainerInfo,
  ButtonInfo,
  Info,
  ContainerImg,
  ContainerType,
  ContainerFavorite,
  FavoriteIconBorder,
  FavoritesIcon,
  LoadingContainer,
  ContainerGoToTop,
  GoToTopIcon,
} from "./style";

import Fire from "../../assets/images/Pokemon_Type_Icon_Fire.svg";
import Grass from "../../assets/images/Pokemon_Type_Icon_Grass.svg";
import Water from "../../assets/images/Pokemon_Type_Icon_Water.svg";
import Bug from "../../assets/images/Pokemon_Type_Icon_Bug.svg";
import Electric from "../../assets/images/Pokemon_Type_Icon_Electric.svg";
import Normal from "../../assets/images/Pokemon_Type_Icon_Normal.svg";
import Ground from "../../assets/images/Pokemon_Type_Icon_Ground.svg";
import Poison from "../../assets/images/Pokemon_Type_Icon_Poison.svg";
import Fairy from "../../assets/images/Pokemon_Type_Icon_Fairy.svg";
import Flying from "../../assets/images/Pokemon_Type_Icon_Flying.svg";
import Rock from "../../assets/images/Pokemon_Type_Icon_Rock.svg";
import Psychic from "../../assets/images/Pokemon_Type_Icon_Psychic.svg";
import Fighting from "../../assets/images/Pokemon_Type_Icon_Fighting.svg";
import Ghost from "../../assets/images/Pokemon_Type_Icon_Ghost.svg";
import Ice from "../../assets/images/Pokemon_Type_Icon_Ice.svg";
import Dragon from "../../assets/images/Pokemon_Type_Icon_Dragon.svg";
import Steel from "../../assets/images/Pokemon_Type_Icon_Steel.svg";
import Dark from "../../assets/images/Pokemon_Type_Icon_Dark.svg";
import LoadingGIF from "../../assets/images/simple_pokeball.gif";

import {
  Toolbar,
  Stack,
  Typography,
  Tooltip,
  Checkbox,
  Divider,
  Badge,
  Container,
  FormControl,
  IconButton,
} from "@mui/material";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";

import { PokemonContext } from "../../context/fetchPokemons";
import { StatesContext } from "../../context/statesContext";

import { Link } from "react-router-dom";

export function Home() {
  const { pokemonsData, loaded } = useContext(PokemonContext);
  const { favorite, setFavorite, setPokemonDetails, pokemonDetails } =
    useContext(StatesContext);
  const [query, setQuery] = useState("");
  const [showTopButton, setShowTopButton] = useState(false);

  const handleChange = (event) => {
    const index = favorite.indexOf(event.target.value);
    if (index === -1) {
      setFavorite([...favorite, event.target.value]);
    } else {
      setFavorite(
        favorite.filter((favorite) => favorite !== event.target.value)
      );
    }
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    console.log("ooi");
  };

  useEffect(() => {
    const loadFavorite = JSON.parse(localStorage.getItem("key"));
    if (loadFavorite) {
      setFavorite(loadFavorite);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setShowTopButton(true) : setShowTopButton(false);
    });
  }, []);

  function getTypeColor(type) {
    switch (type) {
      case "fire":
        return "#FF9C54";
        break;
      case "grass":
        return "#63BB5B";
        break;
      case "water":
        return "#4C90D4";
        break;
      case "bug":
        return "#90C12C";
        break;
      case "electric":
        return "#F3D23B";
        break;
      case "normal":
        return "#9099A1";
        break;
      case "ground":
        return "#D97745";
        break;
      case "poison":
        return "#AB6AC8";
        break;
      case "fairy":
        return "#EC8FE6";
        break;
      case "flying":
        return "#92AADE";
        break;
      case "rock":
        return "#C6B78B";
        break;
      case "psychic":
        return "#F97177";
        break;
      case "fighting":
        return "#CE4069";
        break;
      case "ghost":
        return "#5369AC";
        break;
      case "ice":
        return "#74CEC0";
        break;
      case "dragon":
        return "#1871C6";
        break;
      case "steel":
        return "#5A8EA1";
        break;
      case "dark":
        return "#5A5366";
        break;

      default:
        return "white";
    }
  }

  function getTypeIcon(type) {
    switch (type) {
      case "fire":
        return Fire;
        break;
      case "grass":
        return Grass;
        break;
      case "water":
        return Water;
        break;
      case "bug":
        return Bug;
        break;
      case "electric":
        return Electric;
        break;
      case "normal":
        return Normal;
        break;
      case "ground":
        return Ground;
        break;
      case "poison":
        return Poison;
        break;
      case "fairy":
        return Fairy;
        break;
      case "flying":
        return Flying;
        break;
      case "rock":
        return Rock;
        break;
      case "psychic":
        return Psychic;
        break;
      case "fighting":
        return Fighting;
        break;
      case "ghost":
        return Ghost;
        break;
      case "ice":
        return Ice;
        break;
      case "dragon":
        return Dragon;
        break;
      case "steel":
        return Steel;
        break;
      case "dark":
        return Dark;
        break;

      default:
        return Fire;
    }
  }

  return (
    <Wrapper>
      <MenuBar position="static">
        <Toolbar>
          <CatchingPokemonIcon
            edge="start"
            aria-label="logo"
            sx={{ color: "#212121", fontSize: "50px" }}
          />

          <Typography sx={{ flexGrow: 1 }}></Typography>
          <Stack direction="row" spacing={{ sm: 1, md: 2 }}>
            <MenuButton>
              {" "}
              <Badge badgeContent={favorite.length} color="error">
                <FavoriteIcon sx={{ fontSize: "28px" }} />{" "}
              </Badge>{" "}
            </MenuButton>
            <MenuButton href="https://github.com/lucasvaaz" target="_blank">
              <GitHubIcon sx={{ fontSize: "28px" }} />{" "}
            </MenuButton>
          </Stack>
        </Toolbar>
      </MenuBar>

      <Container maxWidth="md" sx={{ display: "flex", marginTop: "20px" }}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <Search
            id="filled"
            label="search..."
            variant="filled"
            onChange={(event) => setQuery(event.target.value)}
          />
        </FormControl>
      </Container>

      {loaded ? (
        <ContainerHome>
          {pokemonsData
            .filter((pokemons) =>
              pokemons.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((item) => {
              const typesNumber = item.types.length;

              return (
                <Card
                  component="div"
                  key={item.name}
                  style={{ filter: "brightness(80%)" }}
                >
                  <CardHeader
                    sx={{
                      backgroundColor: getTypeColor(item.types[0].type.name),
                    }}
                  >
                    {item.name}
                  </CardHeader>

                  <ContainerInfo component="div">
                    <Link to="/details">
                      <Tooltip title="more info">
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setPokemonDetails(item.name);
                          }}
                        >
                          <ButtonInfo aria-label="info-icon">
                            <Info />
                          </ButtonInfo>
                        </div>
                      </Tooltip>
                    </Link>
                  </ContainerInfo>
                  <CardBody>
                    <ContainerImg component="div">
                      <img
                        src={item.sprites.other.home.front_default}
                        style={{ width: "130px", height: "130px" }}
                      />
                    </ContainerImg>

                    <ContainerType>
                      <Tooltip title={item.types[0].type.name}>
                        <img
                          src={getTypeIcon(item.types[0].type.name)}
                          style={{
                            width: "25px",
                            height: "25px",
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>

                      {typesNumber == 2 && (
                        <Tooltip title={item.types[1].type.name}>
                          <img
                            src={getTypeIcon(item.types[1].type.name)}
                            style={{
                              width: "25px",
                              height: "25px",
                              marginLeft: "10px",
                              cursor: "pointer",
                            }}
                          />
                        </Tooltip>
                      )}
                    </ContainerType>

                    <Divider />
                    <ContainerFavorite>
                      <Checkbox
                        icon={
                          favorite.includes(item.name) ? (
                            <FavoritesIcon />
                          ) : (
                            <FavoriteIconBorder />
                          )
                        }
                        checkedIcon={
                          favorite.includes(item.name) ? (
                            <FavoritesIcon />
                          ) : (
                            <FavoriteIconBorder />
                          )
                        }
                        value={item.name}
                        onChange={handleChange}
                      />
                    </ContainerFavorite>
                  </CardBody>
                </Card>
              );
            })}

          {showTopButton && (
            <ContainerGoToTop onClick={goToTop}>
              <IconButton aria-label="navigationIcon">
                <GoToTopIcon />
              </IconButton>
            </ContainerGoToTop>
          )}
        </ContainerHome>
      ) : (
        <Container maxWidth="md">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
            }}
          >
            <LoadingContainer>
              <img
                src={LoadingGIF}
                style={{ width: "100px", height: "100px" }}
              />

              <h3 style={{ color: "#dadce0" }}> loading... </h3>
            </LoadingContainer>
          </div>
        </Container>
      )}
    </Wrapper>
  );
}
