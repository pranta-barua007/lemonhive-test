import { FC } from "react";
import Image from "next/image";
import { CardContainer, CardSize } from "./card.styled";

export type CardProps = {
  imgUrl: string | any;
  name?: string;
  size?: CardSize
};

const Card: FC<CardProps> = ({ imgUrl, name, size }) => {
  return (
    <CardContainer size={size || CardSize.big}>
      <Image 
        src={imgUrl} 
        alt={name || 'card'} 
      />
    </CardContainer>
  );
};

export default Card;
