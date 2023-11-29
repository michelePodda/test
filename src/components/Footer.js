import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Container, Stack, Box, Button } from "./styled";
import { IoSettingsOutline, IoGridOutline } from "react-icons/io5";

const Wrapper = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0px 0px 10px #1f1f21;
  z-index: 999;
`;

const Footer = ({ match }) => {
  const currentPath = useLocation();
  let navigate = useNavigate();
  let goBack = () => {
    navigate(-1);
  };
  const { themeColor } = useSelector((state) => state.data);

  return (
    <Wrapper background="footer" className="footer">
      <Stack direction="column" align="center">
        <Container>
          <Stack
            justify="space-between"
            align="start"
            width="100%"
            height={["70px", "90px"]}
            color={themeColor}
            paddingTop="3%"
          >
            {match ? (
              <Stack justify="space-between" align="start" width="60%">
                <Stack align="center" flexShrink="0">
                  <Link
                    to="/"
                    style={{
                      justifySelf: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <IoGridOutline size="30" />
                  </Link>
                </Stack>
                <Stack align="center" flexShrink="0">
                  <Link
                    to="/"
                    style={{
                      justifySelf: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <IoGridOutline size="30" />
                  </Link>
                </Stack>
                <Stack align="center" flexShrink="0">
                  <Link
                    to="/"
                    style={{
                      justifySelf: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <IoGridOutline size="30" />
                  </Link>
                </Stack>
              </Stack>
            ) : null}
            <Stack align="center" flexShrink="0">
              <Link
                to="/"
                style={{
                  justifySelf: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IoGridOutline size="30" />
              </Link>
            </Stack>
            <Stack align="center" flexShrink="0">
              {currentPath.pathname !== "/settings" ? (
                <Link
                  to="/settings"
                  style={{
                    justifySelf: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <IoSettingsOutline size="30" />
                </Link>
              ) : (
                <Button
                  variant="text"
                  onClick={goBack}
                  centerIcon={<IoSettingsOutline size="30" />}
                ></Button>
              )}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Wrapper>
  );
};

export default Footer;
