import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Text, Container, Stack, Box, Button } from "./styled";
import Icon from "../utils/icon";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const CharacterCard = ({ id, nome, razza, classe, livello }) => {
  const { themeColor } = useSelector((state) => state.data);
  return (
    <Container size="fullwidth">
      <Link to={`/sheet/${id}`}>
        <Container size={["fullwidth"]}>
          <Stack
            justify="space-between"
            align="center"
            height="auto"
            spacing="3px"
          >
            <Stack
              align="center"
              borderRadius="5px"
              padding="10px"
              flexShrink="0"
            >
              <Icon classe={classe} />
            </Stack>

            <Box
              display="flex"
              width="auto"
              height="70px"
              flexGrow="1"
              overflowX="hidden"
            >
              <Stack align="center">
                <Box align="start">
                  <Text size="xs" fontWeight="bold">
                    {nome}
                  </Text>
                  <Text size="xs">{razza}</Text>
                  <Text size="xs">{classe}</Text>
                  <Text size="xs">Livello: {livello}</Text>
                </Box>
              </Stack>
            </Box>

            <Box
              display="flex "
              width="70px"
              height="70px"
              flexShrink="0"
              alignItems="center"
              justifyContent="center"
              color={themeColor}
            >
              <IoEllipsisHorizontalSharp size="27" />
            </Box>
          </Stack>
        </Container>
      </Link>
    </Container>
  );
};
export default CharacterCard;
