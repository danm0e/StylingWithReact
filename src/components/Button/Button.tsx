import { StyledButton } from "./Button.styles";

interface IButton {
  className?: string;
}

const Button = ({ className, ...rest }: IButton) => (
  <StyledButton className={className} {...rest}>
    Some call to action
  </StyledButton>
);

export default Button;
