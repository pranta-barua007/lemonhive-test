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
   gap: unset;
   
   & > h1 {
    text-align: right;
   }

   @media screen and (max-width: 800px) {
    padding-right: 4rem;
   }
  }

  & > div:nth-child(2) {
    grid-area: side;
    justify-content: end;

    @media screen and (max-width: 800px) {
      align-items: start;
    }
  }

  & > div:nth-child(3) {
    grid-area: left;
    align-items: end;

    @media screen and (max-width: 800px) {
      margin-top: 1rem;
      align-items: start;

      img {
        height: 220px !important;
      }
    }
  }

  & > div:nth-child(4) {
    grid-area: right;

    @media screen and (max-width: 800px) {
      align-items: center;
      text-align: left;
      gap: unset;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 0.5rem 1rem;
    grid-template-columns: 1fr;
    grid-template-areas: 
   "head"
   "right"
   "side"
   "left";
  }
`;

export const HomeHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 7.5rem;
  line-height: 0px;

  @media screen and (max-width: 800px) {
    font-size: 3.2rem;
  }
`;

export const HeroAbout = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
`
