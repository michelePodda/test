import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Stack } from "../components/styled/index";
import CharacterCard from "./CharacterCard";

const HomeBody = () => {
  const { characters } = useSelector((state) => state.data);
  const reverseCharacters = [...characters].reverse();
  return (
    <>
      <Container size="fullwidth" height="100%">
        <Container size="fullwidth">
          <Stack direction="column" spacing="1px">
            {reverseCharacters.map((el) => {
              return <CharacterCard key={el.id} {...el} />;
            })}
          </Stack>
        </Container>
      </Container>
    </>
  );
};
export default HomeBody;
