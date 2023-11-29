import React from "react";
import { Text, Stack, Container, Button, Box } from "../components/styled";
import { useDispatch, useSelector } from "react-redux";

const SettingsBody = () => {
  const dispatch = useDispatch();

  return (
    <Container size="fullwidth">
      <Stack direction="column" align="center">
        <Container size="fullwidth" px="3px">
          <Stack align="center">
            <Box height="40px">
              <Text size={["md", "lg"]}>Passa al lato oscuro</Text>
            </Box>
          </Stack>
          <Stack align="center">
            <Box height="40px">
              <Text size={["md", "lg"]}>Colore Tema</Text>
            </Box>
          </Stack>
          <Stack align="center">
            <Box height="40px">
              <Text size={["md", "lg"]}>Admin</Text>
            </Box>
          </Stack>
          <Stack align="center">
            <Box height="40px">
              <Text size={["md", "lg"]}>Clear localStorage</Text>
            </Box>
          </Stack>
          <Stack align="center">
            <Box height="40px">
              <Text size={["md", "lg"]}>Crediti</Text>
            </Box>
          </Stack>
          <Stack direction="column" align="center" mt="30px">
            <Box>
              <Text size={["xs", "xs"]}>Copyright©️</Text>
            </Box>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};
export default SettingsBody;
