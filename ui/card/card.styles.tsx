import styled from "styled-components";

export enum CardSize {
  small = "small",
  big = "big",
}

type CardContainerProps = {
  size: CardSize;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: ${(props) => (props.size === CardSize.small ? "10vw" : "20vw")};
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  div {
    display: ${(props) => (props.size === CardSize.small ? "none" : "unset")};
    position: absolute;
    bottom: -68px;
    left: -68px;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    border: 1px transparent;
    border-radius: 8px;
  }

  &:hover {
    img {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
  }

  @media screen and (max-width: 400px) {
    width: 80vw;
  }
`;

export const StarContainer = styled.div`
width: 131px;
height: auto;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4px;
position: relative;

img {
  height: 100%;
}
`;
