import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
  variant,
} from "styled-system";
import styled from "styled-components";

const Text = styled("div")(
  variant({
    prop: "size",
    variants: {
      xl: {
        fontSize: 60,
      },
      lg: {
        fontSize: 30,
      },
      md: {
        fontSize: 24,
      },
      sm: {
        fontSize: 18,
      },
      xs: {
        fontSize: 12,
      },
    },
  }),
  compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow
  )
);

Text.defaultProps = { size: "xl" };

export default Text;
