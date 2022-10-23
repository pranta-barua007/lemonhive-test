import styled from "styled-components";
import { SpinnerContainer } from "ui/spinner/spinner.styled";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
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
`;

export const RoundedButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  border: 4px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: transparent;
  }
`;

export const SquaredButton = styled(BaseButton)`
  border: 2px solid transparent;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    box-shadow: 0 0 14px #ccc;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
