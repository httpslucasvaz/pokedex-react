import React, { useContext, useEffect, useState } from "react";

import { StatesContext } from "../../context/statesContext";

import { useNavigate } from "react-router-dom";

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

import {
  Wrapper,
  ContainerDetails,
  Header,
  ButtonTop,
  ArrowBackIos,
  FavoriteIconBorder,
  FavoritesIcon,
  ContainerTitleandId,
  PokemonName,
  ContainerType,
  ContainerImg,
  Body,
  Title,
  StatsBody,
  StatsDetails,
  Abilities,
  Description,
  MoreInfo,
  MoreInfoName,
  LoadingContainer,
} from "./style";

import {
  Checkbox,
  IconButton,
  LinearProgress,
  Box,
  Divider,
  Container,
} from "@mui/material";

import LoadingGIF from "../../assets/images/simple_pokeball.gif";


export function PokemonDetail() {
  const { pokemonDetails, favorite, setFavorite } = useContext(StatesContext);
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [detailsSpecies, setDetailsSpecies] = useState([]);
  const [loadedDetails, setLoadedDetails] = useState(false);
  const typesNumber = details.types === undefined ? "--" : details.types.length;
  const abilitiesNumber =
    details.abilities === undefined ? "--" : details.abilities.length;

  const baseUrl = (pokemonName) =>
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const getDetailsPokemon = async () => {
    const responses = await fetch(baseUrl(pokemonDetails)).then((response) =>
      response.json()
    );

    setDetails(responses);
  };

  const baseUrlAboutPokemon = (pokemonNameSpecies) =>
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonNameSpecies}`;

  const getDetailsPokemonSpecies = async () => {
    const responses = await fetch(baseUrlAboutPokemon(pokemonDetails)).then(
      (response) => response.json()
    );

    setDetailsSpecies(responses);
    setLoadedDetails(true);
  };

  useEffect(() => {
    getDetailsPokemon();
    getDetailsPokemonSpecies();
  }, []);

  console.log(detailsSpecies);

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

  useEffect(() => {
    const loadFavorite = JSON.parse(localStorage.getItem("key"));
    if (loadFavorite) {
      setFavorite(loadFavorite);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(favorite));
  }, [favorite]);

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
    <main>
      {loadedDetails ? (
        <Wrapper
          sx={{
            backgroundColor: getTypeColor(
              details.types === undefined ? "--" : details.types[0].type.name
            ),
            filter: "brightness(80%)",
          }}
        >
          <ContainerDetails
            sx={{
              backgroundColor: getTypeColor(
                details.types === undefined ? "-" : details.types[0].type.name
              ),
            }}
            maxWidth="sm"
          >
            <Header component="div">
              <ButtonTop component="div">
                <IconButton onClick={() => navigate(-1)}>
                  <ArrowBackIos />
                </IconButton>
                <Checkbox
                  icon={
                    favorite.includes(details.name) ? (
                      <FavoritesIcon />
                    ) : (
                      <FavoriteIconBorder />
                    )
                  }
                  checkedIcon={
                    favorite.includes(details.name) ? (
                      <FavoritesIcon />
                    ) : (
                      <FavoriteIconBorder />
                    )
                  }
                  value={details.name}
                  onChange={handleChange}
                />
              </ButtonTop>
              <ContainerTitleandId component="div">
                <PokemonName component="h1">{details.name}</PokemonName>

                <PokemonName component="h1">#{details.id}</PokemonName>
              </ContainerTitleandId>

              <ContainerImg component="div">
                <img
                  src={
                    details.sprites === undefined
                      ? "--"
                      : details.sprites.other.home.front_default
                  }
                  style={{ maxWidth: "230px", maxHeight: "230px" }}
                />
              </ContainerImg>
            </Header>
            <Body>
              <Description component="p">
                {" "}
                {detailsSpecies.flavor_text_entries === undefined
                  ? "--"
                  : detailsSpecies.flavor_text_entries[12].flavor_text}{" "}
              </Description>
              <Title
                sx={{
                  borderBottom: ` 5px solid ${getTypeColor(
                    details.types === undefined
                      ? "--"
                      : details.types[0].type.name
                  )}`,
                }}
              >
                {" "}
                stats{" "}
              </Title>
              <StatsBody>
                <StatsDetails>
                  <div style={{ width: "35%" }}>HP</div>
                  <div style={{ width: "20%" }}>
                    {" "}
                    {details.stats === undefined
                      ? "-"
                      : details.stats[0].base_stat}{" "}
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={
                        details.stats === undefined
                          ? "-"
                          : details.stats[0].base_stat / 1.8
                      }
                      sx={{
                        height: "20px",
                        backgroundColor: "#dadce0",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: getTypeColor(
                            details.types === undefined
                              ? "--"
                              : details.types[0].type.name
                          ),
                        },
                      }}
                    />
                  </Box>
                </StatsDetails>

                <StatsDetails>
                  <div style={{ width: "35%" }}>ATK</div>
                  <div style={{ width: "20%" }}>
                    {" "}
                    {details.stats === undefined
                      ? "-"
                      : details.stats[1].base_stat}{" "}
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={
                        details.stats === undefined
                          ? "-"
                          : details.stats[1].base_stat / 1.8
                      }
                      sx={{
                        height: "20px",
                        backgroundColor: "#dadce0",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: getTypeColor(
                            details.types === undefined
                              ? "--"
                              : details.types[0].type.name
                          ),
                        },
                      }}
                    />
                  </Box>
                </StatsDetails>

                <StatsDetails>
                  <div style={{ width: "35%" }}>DEF</div>
                  <div style={{ width: "20%" }}>
                    {" "}
                    {details.stats === undefined
                      ? "-"
                      : details.stats[2].base_stat}{" "}
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={
                        details.stats === undefined
                          ? "-"
                          : details.stats[2].base_stat / 1.8
                      }
                      sx={{
                        height: "20px",
                        backgroundColor: "#dadce0",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: getTypeColor(
                            details.types === undefined
                              ? "--"
                              : details.types[0].type.name
                          ),
                        },
                      }}
                    />
                  </Box>
                </StatsDetails>

                <StatsDetails>
                  <div style={{ width: "35%" }}>SATK</div>
                  <div style={{ width: "20%" }}>
                    {" "}
                    {details.stats === undefined
                      ? "-"
                      : details.stats[3].base_stat}{" "}
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={
                        details.stats === undefined
                          ? "-"
                          : details.stats[3].base_stat / 1.8
                      }
                      sx={{
                        height: "20px",
                        backgroundColor: "#dadce0",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: getTypeColor(
                            details.types === undefined
                              ? "--"
                              : details.types[0].type.name
                          ),
                        },
                      }}
                    />
                  </Box>
                </StatsDetails>

                <StatsDetails>
                  <div style={{ width: "35%" }}>SDEF</div>
                  <div style={{ width: "20%" }}>
                    {" "}
                    {details.stats === undefined
                      ? "-"
                      : details.stats[4].base_stat}{" "}
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={
                        details.stats === undefined
                          ? "-"
                          : details.stats[4].base_stat / 1.8
                      }
                      sx={{
                        height: "20px",
                        backgroundColor: "#dadce0",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: getTypeColor(
                            details.types === undefined
                              ? "--"
                              : details.types[0].type.name
                          ),
                        },
                      }}
                    />
                  </Box>
                </StatsDetails>

                <StatsDetails>
                  <div style={{ width: "35%" }}>SPEED</div>
                  <div style={{ width: "20%" }}>
                    {" "}
                    {details.stats === undefined
                      ? "-"
                      : details.stats[5].base_stat}{" "}
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={
                        details.stats === undefined
                          ? "-"
                          : details.stats[5].base_stat / 1.8
                      }
                      sx={{
                        height: "20px",
                        backgroundColor: "#dadce0",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: getTypeColor(
                            details.types === undefined
                              ? "--"
                              : details.types[0].type.name
                          ),
                        },
                      }}
                    />
                  </Box>
                </StatsDetails>
              </StatsBody>
              <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />
              <Title
                sx={{
                  borderBottom: ` 5px solid ${getTypeColor(
                    details.types === undefined
                      ? "--"
                      : details.types[0].type.name
                  )}`,
                }}
              >
                abilities
              </Title>

              <Abilities>
                <div>
                  {" "}
                  {details.abilities == undefined
                    ? "--"
                    : details.abilities[0].ability.name.replace("-", " ")}{" "}
                </div>
                <div>
                  {" "}
                  {abilitiesNumber == 2 &&
                    (details.abilities == undefined
                      ? "--"
                      : details.abilities[1].ability.name.replace(
                          "-",
                          " "
                        ))}{" "}
                </div>
                <div>
                  {" "}
                  {abilitiesNumber == 3 &&
                    (details.abilities == undefined
                      ? "--"
                      : details.abilities[2].ability.name.replace(
                          "-",
                          " "
                        ))}{" "}
                </div>
              </Abilities>

              <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />

              <Title
                sx={{
                  borderBottom: ` 5px solid ${getTypeColor(
                    details.types === undefined
                      ? "--"
                      : details.types[0].type.name
                  )}`,
                }}
              >
                type
              </Title>

              <ContainerType>
                <div
                  style={{
                    display: "flex",
                    backgroundColor: getTypeColor(
                      details.types === undefined
                        ? "--"
                        : details.types[0].type.name
                    ),
                    padding: "5px",
                    color: "#212121",
                    cursor: "default",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={getTypeIcon(
                      details.types === undefined
                        ? "--"
                        : details.types[0].type.name
                    )}
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "99px",
                      marginRight: "6px",
                    }}
                  />
                  {details.types === undefined
                    ? "--"
                    : details.types[0].type.name}
                </div>

                {typesNumber == 2 && (
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: getTypeColor(
                        details.types === undefined
                          ? "--"
                          : details.types[1].type.name
                      ),
                      padding: "5px",
                      color: "#212121",
                      cursor: "default",
                      marginLeft: "6px",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src={getTypeIcon(
                        details.types === undefined
                          ? "--"
                          : details.types[1].type.name
                      )}
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "99px",
                        marginRight: "6px",
                      }}
                    />
                    {details.types === undefined
                      ? "--"
                      : details.types[1].type.name}
                  </div>
                )}
              </ContainerType>

              <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />

              <Title
                sx={{
                  borderBottom: ` 5px solid ${getTypeColor(
                    details.types === undefined
                      ? "--"
                      : details.types[0].type.name
                  )}`,
                }}
              >
                more info
              </Title>
              <MoreInfo>
                <MoreInfoName
                  sx={{
                    color: getTypeColor(
                      details.types === undefined
                        ? "--"
                        : details.types[0].type.name
                    ),
                  }}
                >
                  height:
                </MoreInfoName>{" "}
                {details.height / 10}m{" "}
              </MoreInfo>

              <MoreInfo>
                <MoreInfoName
                  sx={{
                    color: getTypeColor(
                      details.types === undefined
                        ? "--"
                        : details.types[0].type.name
                    ),
                  }}
                >
                  weight:
                </MoreInfoName>{" "}
                {details.weight / 10}kg{" "}
              </MoreInfo>

              <MoreInfo>
                <MoreInfoName
                  sx={{
                    color: getTypeColor(
                      details.types === undefined
                        ? "--"
                        : details.types[0].type.name
                    ),
                  }}
                >
                  capture rate:
                </MoreInfoName>{" "}
                {detailsSpecies.capture_rate}{" "}
              </MoreInfo>

              <MoreInfo>
                <MoreInfoName
                  sx={{
                    color: getTypeColor(
                      details.types === undefined
                        ? "--"
                        : details.types[0].type.name
                    ),
                  }}
                >
                  happiness:
                </MoreInfoName>{" "}
                {detailsSpecies.base_happiness}{" "}
              </MoreInfo>

              <MoreInfo>
                <MoreInfoName
                  sx={{
                    color: getTypeColor(
                      details.types === undefined
                        ? "--"
                        : details.types[0].type.name
                    ),
                  }}
                >
                  habitat:
                </MoreInfoName>{" "}
                {detailsSpecies.habitat === undefined
                  ? "--"
                  : detailsSpecies.habitat.name.replace("-", " ")}{" "}
              </MoreInfo>
            </Body>
          </ContainerDetails>
        </Wrapper>
      ) : (
        <div
          style={{ backgroundColor: "#212121", width: "100%", height: "100vh" }}
        >
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
        </div>
      )}
    </main>
  );
}
