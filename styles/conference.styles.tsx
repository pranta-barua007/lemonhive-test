import styled from "styled-components";

export const ConferenceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  grid-gap: 16px;
  padding: 1rem;

  & > div:nth-child(1) {
    grid-column: 1 / 65;
  }

  & > div:nth-child(2) {
    grid-column: 220px;
    align-items: end;
  }

  & > div:nth-child(3) {
    background-color: whitesmoke;
    grid-column: 2 / 65;
    padding: 1rem; 
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
`;

export const ConferenceTitleInfo = styled.h2`
  weight: 700;
  font-size: 48px;
`;

export const ConferenceAbout = styled.p`
    weight: 400;
    font-size: 20px;
`;

