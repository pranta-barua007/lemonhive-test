import styled from "styled-components";

export const SectionCardContainer = styled.div`
  display: grid;
  grid-template-columns: 140px 2fr 1fr;
  grid-template-areas:
    "image title company"
    "image about about";
  grid-gap: 1rem;
  width: 800px;
  height: auto;
  padding: 1rem;
  background: white;
  border-radius: 16px;

  & > div:nth-child(1) {
    grid-area: image;

    @media screen and (max-width: 800px) {
      img {
        width: 320px !important;
      }
    }
  }

  & > div:nth-child(2) {
    grid-area: title;
    align-items: center;
  }

  & > div:nth-child(3) {
    grid-area: company;
    background: transparent;
    justify-content: end;
  }

  & > div:nth-child(4) {
    grid-area: about;
    align-items: start;

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      @supports (-webkit-line-clamp: 2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }

  @media screen and (max-width: 800px) {
    width: auto;
    padding: 1rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      "image image image"
      "title company company"
      "about about about";
  }
`;

export const CardSection = styled.div`
  display: flex;

  img {
    border-radius: 1rem;
  }
`;
