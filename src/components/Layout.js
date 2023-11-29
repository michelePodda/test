import React from "react";
import { useMatch } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { Box, Container } from "./styled";

const Page = styled(Box)`
  width: 100vw;
  height: 100vh;
`;

const Layout = ({ character, children }) => {
  const match = useMatch("/sheet/:id");
  const characterColor = character ? character.characterColor : null;
  return (
    <>
      <Page>
        <Header character={character} match={match} />
        <Box
          width="100%"
          height={["48px", "72px"]}
          background={match ? characterColor : "header"}
        ></Box>
        {children}
        <Footer match={match} />
      </Page>
    </>
  );
};

export default Layout;
