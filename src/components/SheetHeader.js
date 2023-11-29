import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { variant } from "styled-system";
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

const Card = styled("Box")(
  {
    display: "grid",
    width: "100%",
    placeContent: "center",
    borderRadius: "10px",
    background: "green",
    color: "white",
    // boxShadow: "0 0 10px #000",
  },
  variant({
    prop: "size",
    variants: {
      xs: {
        width: "50%",
        height: "40px",
        paddingX: "10px",
      },
      sm: {
        // width: "1010",
        height: "40px",
        paddingX: "14px",
      },
      md: {
        // width: "1010",
        height: "90px",
        paddingX: "14px",
      },
      lg: {
        // width: "120px",
        height: "60px",
        paddingX: "14px",
      },
      xl: {
        // width: "250px",
        height: "60px",
        paddingX: "14px",
      },
      xxl: {
        // width: "250px",
        height: "130px",
        paddingX: "14px",
      },
    },
  })
);

const SheetHeader = ({ character }) => {
  const dispatch = useDispatch();

  const { nome, razza, classe, livello, hp, stats, characterColor } = character;

  return (
    <Container
      size="fullwidth"
      height={["200px", "150px"]}
      background={characterColor}
    >
      <Container size="fullwidth">
        <Stack align="center" justify="space-between" pt="10px">
          <Stack
            direction="column"
            width="30%"
            align="center"
            spacing={["7px", "12px"]}
          >
            <Stack align="center" width="100%" justify="space-between">
              <Card size={["sm", "xl"]}></Card>
            </Stack>
            <Stack align="center" width="100%" justify="space-between">
              <Card size={["sm", "xl"]}></Card>
            </Stack>
            <Stack align="center" width="100%" justify="space-between">
              <Card size={["sm", "xl"]}></Card>
            </Stack>
            <Stack align="center" width="100%" justify="space-between">
              <Card size={["xs", "lg"]}></Card>
              <Card size={["xs", "lg"]}></Card>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            width="33%"
            align="center"
            spacing={["7px", "12px"]}
          >
            <Stack align="center" width="100%" justify="space-between">
              <Card size={["md", "xxl"]}></Card>
            </Stack>

            <Stack align="center" width="100%" justify="space-between">
              <Card size={["sm", "xl"]}></Card>
            </Stack>
            <Stack align="center" width="100%" justify="space-between">
              <Card size={["xs", "lg"]}></Card>
              <Card size={["xs", "lg"]}></Card>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            width="33%"
            align="center"
            spacing={["7px", "12px"]}
          >
            <Stack align="center" width="100%" justify="space-between">
              <Card size={["sm", "xl"]}></Card>
            </Stack>
            <Stack align="center" width="100%" justify="space-between">
              <Card size={["sm", "xl"]}></Card>
            </Stack>
            <Stack align="center" width="100%" justify="space-between">
              <Card size={["sm", "xl"]}></Card>
            </Stack>
            <Stack align="center" width="100%" justify="space-between">
              <Card size={["xs", "lg"]}></Card>
              <Card size={["xs", "lg"]}></Card>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
};
export default SheetHeader;
