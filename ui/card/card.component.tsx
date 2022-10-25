import { FC } from "react";
import Image from "next/image";
import { CardContainer, CardSize, StarContainer } from "./card.styles";

export type CardProps = {
  imgUrl: string;
  name?: string;
  size?: CardSize;
  height: number;
  width: number;
};

const Card: FC<CardProps> = ({ imgUrl, name, size, height, width }) => {
  return (
    <CardContainer size={size || CardSize.small}>
      <Image 
        src={imgUrl} 
        alt={name || 'card'} 
        height={height}
        width={width}
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
