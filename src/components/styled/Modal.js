import {
  space,
  layout,
  background,
  border,
  position,
  compose,
  variant,
} from "styled-system";
import styled from "styled-components";

const ModalContainer = styled("div")(
  {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
    background: "transparent",
    opacity: "0.7",
    color: "white",
    zIndex: "999",
  },
  compose(space, layout, background, border, position)
);

const ModalBox = styled("div")(
  {
    width: "250px",
    height: "250px",
    display: "grid",
    placeContent: "center",
    borderRadius: "15px",
    background: "#1f1f21",
    color: "white",
  },
  compose(space, layout, background, border, position)
);

const Modal = ({ children, ...rest }) => {
  return (
    <ModalContainer>
      <ModalBox {...rest}>{children}</ModalBox>
    </ModalContainer>
  );
};

export default Modal;
