import styled from "styled-components";

export const StyledProjectsContents = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  h2 {
    text-align: center;
  }
`;

export const StyledProjectContainer = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr;
  margin-top: 24px;
`;

export const StyledProjectCard = styled.div<{ $index: number }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  iframe {
    width: 100%;
    aspect-ratio: 16/10;
    border-radius: 12px;
    overflow: hidden;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    div {
      &:nth-of-type(2) {
        display: flex;
        gap: 32px;

        button:nth-of-type(2) {
          color: var(--highlight);

          &:hover {
            color: var(--col-100);
          }
        }
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: ${({ $index }) =>
      $index % 2 === 0 ? "row" : "row-reverse"};
    gap: 80px;

    > * {
      max-width: 50%;
    }

    iframe {
      width: 100%;
    }
  }
`;
