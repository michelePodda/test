import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InputWrapper,
  Container,
  Box,
  Button,
  Text,
  Stack,
  Skeleton,
  Modal,
} from "../components/styled/index";

const StatCard = ({ stat }) => {
  return (
    <Box
      width="100px"
      height="130px"
      border="1px solid"
      borderRadius="10px"
      background="blue"
      boxShadow="0px 0px 10px #1f1f21"
    >
      <Stack direction="column" align="center">
        <Stack align="center">{stat}</Stack>
        <Stack align="center"></Stack>
        <Stack align="center"></Stack>
      </Stack>
    </Box>
  );
};

const SheetBody = ({ character }) => {
  const dispatch = useDispatch();

  const { nome, razza, classe, livello, hp, stats, characterColor } = character;

  const { forza, destrezza, costituzione, intelligenza, saggezza, carisma } =
    stats;

  return (
    <Container size="fullwidth" height="100%" background="body">
      <Stack direction="column" align="center" spacing="15px" py="20px">
        <Container>
          <Stack justify="space-between" align="center">
            <StatCard stat={forza} />
            <StatCard stat={destrezza} />
            <StatCard stat={costituzione} />
          </Stack>
        </Container>
        <Container>
          <Stack justify="space-between" align="center">
            <StatCard stat={forza} />
            <StatCard stat={destrezza} />
            <StatCard stat={costituzione} />
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};
export default SheetBody;
