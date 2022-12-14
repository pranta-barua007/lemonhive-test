import { ButtonHTMLAttributes, FC } from "react";
import {
  BaseButton,
  RoundedButton,
  SquaredButton,
  ButtonSpinner,
  DirectionContainer,
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  rounded = "rounded",
  squared = "squared",
}

const getButton = (
  buttonType = BUTTON_TYPE_CLASSES.rounded
): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.rounded]: RoundedButton,
    [BUTTON_TYPE_CLASSES.squared]: SquaredButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
  isActive?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading = false,
  isActive,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {buttonType === BUTTON_TYPE_CLASSES.squared && (
        <DirectionContainer>
          <img src="/direction.svg" />
        </DirectionContainer>
      )}
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
