import styled from "styled-components";

export const HomeHeroContainer = styled.div`
  display: grid;
  padding-bottom: 4rem;
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: 1rem;
  grid-template-areas:
    "head head side"
    "left right side";

  & > div:nth-child(1) {
   grid-area: head;
   
   & > h1 {
    text-align: right;
   }
  }

  & > div:nth-child(2) {
    grid-area: side;
    justify-content: end;
  }

  & > div:nth-child(3) {
    grid-area: left;
    align-items: end;
  }

  & > div:nth-child(4) {
    grid-area: right;
  }

  @media screen and (max-width: 800px) {
    padding: 0.5rem 1rem;
    grid-template-columns: 1fr;
    grid-template-areas: 
   "head"
   "side"
   "left"
   "right";
  }
`;

export const HomeHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 120px;
  line-height: 0px;

  @media screen and (max-width: 800px) {
    font-size: 54px;
  }
`;

export const HeroAbout = styled.p`
  font-size: 18px;
  line-height: 30px;
`
