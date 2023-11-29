import {
  space,
  layout,
  typography,
  color,
  border,
  shadow,
  position,
  compose,
  variant,
  background,
} from "styled-system";
import { css } from "@styled-system/css";
import styled from "styled-components";

const StyledButton = styled("button")(
  variant({
    prop: "size",
    variants: {
      sm: {
        height: "24px",
        borderRadius: "18px",
        paddingX: "10px",
        fontSize: "12px",
      },
      md: {
        height: "36px",
        borderRadius: "22px",
        paddingX: "14px",
        fontSize: "14px",
      },
      lg: {
        height: "48px",
        borderRadius: "26px",
        paddingX: "14px",
        fontSize: "28px",
      },
      xl: {
        height: "64px",
        borderRadius: "30px",
        paddingX: "22px",
        fontSize: "36px",
        fontWeight: 500,
      },
    },
  }),
  variant({
    variants: {
      contained: {
        background: "lightgrey",
        color: "inherit",
        border: "none",
        // "&:hover": {
        //   background: "purple",
        // },
      },
      outlined: {
        background: "transparent",
        color: "inherit",
        border: "1.2px solid",
        borderColor: "inherit",
        // "&:hover": {
        //   color: "purple",
        //   borderColor: "purple",
        //   "& svg > *": {
        //     fill: "white",
        //   },
        // },
      },
      text: {
        background: "transparent",
        color: "inherit",
        border: "none",
        // "&:hover": {
        //   color: "",
        //   "& svg > *": {
        //     fill: "",
        //   },
        // },
      },
      disabled: {
        background: "#8d8d8d",
        color: "#575757",
        border: "none",
        cursor: "not-allowed",
      },
    },
  }),
  ({ isFullwidth, iconColor }) =>
    css({
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: isFullwidth ? "100%" : undefined,
      fontWeight: "600",
      outline: "none",
      whiteSpace: "nowrap",
      userSelect: "none",
      // cursor: "pointer",
      letterSpacing: "0.1rem",
      "& svg > *": {
        fill: iconColor ? iconColor : "transparent",
      },
    }),
  compose(
    background,
    border,
    color,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const StyledContent = styled("div")({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const ButtonIcon = styled.span(
  {
    display: "inline-flex",
    alignSelf: "center",
    fontSize: "16px",
    flexShrink: 0,
    color: "inherit",
  },
  space
);

const Button = ({
  variant,
  leftIcon,
  rightIcon,
  centerIcon,
  children,
  isLoading = false,
  ...rest
}) => {
  return (
    <StyledButton
      disabled={isLoading}
      variant={isLoading ? "disabled" : variant || "contained"}
      {...rest}
    >
      <StyledContent>
        {!isLoading && leftIcon && (
          <ButtonIcon mr="6px"> {leftIcon} </ButtonIcon>
        )}
        {!isLoading && centerIcon && (
          <ButtonIcon> {centerIcon} </ButtonIcon>
        )}

        {children}

        {!isLoading && rightIcon && (
          <ButtonIcon ml="6px"> {rightIcon} </ButtonIcon>
        )}
      </StyledContent>
    </StyledButton>
  );
};

export default Button;
