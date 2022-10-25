import styled from "styled-components";

export const SectionCardContainer = styled.div`
    display: grid;
    grid-template-columns: 140px 2fr 1fr;
    grid-gap: 16px;
    width: 800px;
    height: auto;
    padding: 1rem;
    background: white;
    border-radius: 16px;

    & > div:nth-child(1) {
        grid-column: span 1;
        grid-row: span 4;
    }

    & > div:nth-child(2) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row: span 2;
        align-items: center;
    }

    & > div:nth-child(3) {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row: span 2;
        background: transparent;
        justify-content: end;
    }

    & > div:nth-child(4) {
        grid-column-start: 2;
        grid-column-end: 4;
        overflow: hidden;
        text-overflow: ellipsis;
        align-items: center;
        
        span {
            height: 40px;
            color: unset;
        }
    }
`;

export const CardSection = styled.div`
    display: flex;

    img {
        border-radius: 1rem;
    }
`;

