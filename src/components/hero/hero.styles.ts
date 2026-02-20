import Image from "next/image";
import styled from "styled-components";

export const StyledHero = styled.section`
  background-color: var(--col-000);
  height: fit-content;
  padding: 0 16px;
  padding-top: 125px;
  padding-bottom: 50px;

  @media (min-width: 768px) and (max-width: 1224px) {
    padding: 0 24px;
    padding-top: 109px;
    padding-bottom: 50px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: var(--max-width);
  margin: 0 auto;

  > div {
    flex: 1;

    &:nth-of-type(2) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      gap: 32px;

      article {
        text-align: center;
        max-width: 650px;
        margin: 0 auto;
        h1 {
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        p {
          color: var(--col-100);
        }
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 80px;
    > div {
      &:nth-of-type(1) {
        article {
          text-align: left;
        }

        div {
          flex-direction: row;
        }
      }
    }
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 500px;
  border-radius: 50%;
  background-position: top;
  background-size: cover;

  @media (min-width: 1024px) {
    max-width: unset;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
