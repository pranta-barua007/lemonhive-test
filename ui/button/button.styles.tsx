import styled from "styled-components";
import { SpinnerContainer } from "ui/spinner/spinner.styles";
import { ButtonProps } from "./button.component";

export const BaseButton = styled.button<ButtonProps>`
  min-width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0px 35px;
  font-size: 15px;
  color: black;
  text-transform: capitalize;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RoundedButton = styled(BaseButton)`
  width: 165px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  border: 4px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: transparent;
  }
`;

export const SquaredButton = styled(BaseButton)`
  border: 1.6px solid whitesmoke;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? '#FFC93E' : 'transparent')};

  div {
    position: absolute;
    top: 2;
    left: 15px;
    height: 60%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: white;
    box-shadow: 0 0 14px #ccc;

    div {
      background-color: whitesmoke;
    }
  }
`;

export const ButtonSpinner= styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

export const DirectionContainer = styled.div`
  width: 14%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: relative;

  img {
    position: absolute;
    top: 2;
    left: 6;
    height: 60%;
  }
`;
