import { FC } from "react";
import Image from "next/image";
import { CardContainer, CardSize, StarContainer } from "./card.styles";

export type CardProps = {
  imgUrl: string;
  name?: string;
  size?: CardSize
};

const Card: FC<CardProps> = ({ imgUrl, name, size }) => {
  return (
    <CardContainer size={size || CardSize.small}>
      <Image 
        src={imgUrl} 
        alt={name || 'card'} 
        layout='fill'
        priority
      />
      {size === CardSize.big && 
      <StarContainer>
        <img src="/star.svg" />
      </StarContainer>
      }
    </CardContainer>
  );
};

export  { CardSize } ;

export default Card;
