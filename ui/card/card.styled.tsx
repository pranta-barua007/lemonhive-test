import styled from "styled-components";

export enum CardSize {
    small = 'small',
    big = 'big'
}

interface Props {
  size: CardSize
}

export const CardContainer =  styled.div<Props>`
width:  ${props => props.size === CardSize.small ? '85%' : '95%'};
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

img {
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
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