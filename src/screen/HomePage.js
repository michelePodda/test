import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { Text, Stack, Container, Button, Box } from "../components/styled";
import HomeBody from "../components/HomeBody";

const HomePage = () => {
  const { characters } = useSelector((state) => state.data);
  return (
    <Layout>
      <Container size="fullwidth" height="100%">
        {characters.length > 0 ? (
          <HomeBody />
        ) : (
          <Container mt="20px">
            <Stack direction="column" align="center" spacing="5%">
              <Box width="250px" align="start">
                <Text size="xs">
                  Per creare il tuo primo personaggio premi sul + nell'angolo in
                  alto a sinistra
                </Text>
              </Box>
              <Box pt="50px">
                <Text size="lg">Benvenuto su</Text>
              </Box>
              <Box>
                <Stack direction={["column", "row"]}>
                  <Text size="xl" fontWeight="bold" color="red" px="2">
                    Dungeons
                  </Text>
                  <Text size="xl" fontWeight="bold" color="red" px="2">
                    &
                  </Text>
                  <Text size="xl" fontWeight="bold" color="red" px="2">
                    Draghi
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Container>
        )}
      </Container>
    </Layout>
  );
};

export default HomePage;
