import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Stack, Box, Button, Text } from "./styled";
import {
  IoChevronBackSharp,
  IoAddCircleOutline,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";

const Wrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
`;

const Header = ({ match, character }) => {
  const currentPath = useLocation();

  let navigate = useNavigate();
  let goBack = () => {
    navigate(-1);
  };

  const { themeColor, themeDark } = useSelector((state) => state.data);

  const { nome, razza, classe, livello, characterColor } = character
    ? character
    : "";

  return (
    <Wrapper
      className="header"
      background={match ? characterColor : "header"}
      color={match ? "white" : themeColor}
    >
      <Stack direction="column" align="center">
        <Container>
          <Stack
            justify="space-between"
            align="center"
            width="100%"
            height={["48px", "72px"]}
          >
            <Stack align="center" flexShrink="0">
              {currentPath.pathname === "/" ? (
                <Button
                  variant="text"
                  centerIcon={<IoAddCircleOutline size="27" />}
                ></Button>
              ) : (
                <Button
                  variant="text"
                  onClick={goBack}
                  centerIcon={<IoChevronBackSharp size="27" />}
                ></Button>
              )}
            </Stack>
            <Stack
              direction="column"
              align="center"
              overflow="hidden"
              color={themeDark ? "white" : "black"}
            >
              {currentPath.pathname === "/" ? (
                <Text size={["md", "lg"]}>D&Draghi</Text>
              ) : currentPath.pathname === "/settings" ? (
                <Box>
                  <Text size={["sm", "md"]}>Impostazioni</Text>
                </Box>
              ) : (
                <Box color="white">
                  <Text size={["sm", "md"]}>{nome}</Text>
                  <Text size={["xs", "sm"]}>
                    {razza} | {classe} ( {livello} )
                  </Text>
                </Box>
              )}
            </Stack>
            <Stack align="center" flexShrink="0">
              {match ? (
                <Button
                  variant="text"
                  iconColor="white"
                  centerIcon={<IoEllipsisHorizontalSharp size="27"/>}
                ></Button>
              ) : (
                <Box width="27px" height="27px" />
              )}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Wrapper>
  );
};

export default Header;
