import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { GlobalStyles } from "../globalStyle";
import Layout from "../components/Layout";
import { Container } from "../components/styled";
import SheetHeader from "../components/SheetHeader";
import SheetBody from "../components/SheetBody";

const SheetPage = () => {
  let { id } = useParams();
  const { characters } = useSelector((state) => state.data);
  const [character] = characters.filter((el) => el.id === Number(id));
  return (
    <>
      <GlobalStyles background={character.characterColor} />
      <Layout character={character}>
        <Container size="fullwidth" height="100%">
          <SheetHeader character={character} />
          <SheetBody character={character} />
        </Container>
      </Layout>
    </>
  );
};

export default SheetPage;
