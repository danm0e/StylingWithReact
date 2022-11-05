import { StyledButton } from "./Button.styles";

interface IButton {
  className?: string;
}

const Button = ({ className, ...rest }: IButton) => {
  return (
    <StyledButton className={className} {...rest}>
      Some call to action
    </StyledButton>
  );
};

export default Button;
