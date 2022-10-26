import styled from "styled-components";

export const ConferenceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(220px, 1fr));
  grid-gap: 16px;
  grid-template-areas: 
   "head head head head"
   "right left left left";
  padding: 1rem;

  & > div:nth-child(1) {
    grid-area: head;
  }

  & > div:nth-child(2) {
    grid-area: right;
    align-items: start;

    @media screen and (max-width: 800px) {
      flex-direction: row;
      overflow-x: scroll;
    }
  }

  & > div:nth-child(3) {
    background-color: whitesmoke;
    grid-area: left;
    padding: 1rem; 
  }

  @media screen and (max-width: 800px) {
    padding: 0.5rem 1rem;
    grid-template-columns: 1fr;
    grid-template-areas: 
   "head head head head"
   "right right right right"
   "left left left left";
  }
`;

export const ConferenceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ConferenceScrollableSection = styled(ConferenceSection)`
  height: 50vh;
  overflow: auto;

  @media screen and (max-width: 800px) {
    margin-bottom: 3rem;
  }
`;

export const ConferenceTitleInfo = styled.h2`
  weight: 700;
  font-size: 48px;
`;

export const ConferenceAbout = styled.p`
    weight: 400;
    font-size: 20px;
`;

