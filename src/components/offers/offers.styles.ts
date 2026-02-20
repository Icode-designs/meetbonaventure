import styled from "styled-components";

export const StyledOffersContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: var(--max-width);
  margin: 0 auto;
  color: var(--col-100);

  h2 {
    text-align: center;
  }

  > div {
    display: grid;
    flex-direction: column;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
      width: 100%;
      border-radius: 12px;
      text-align: center;
      background:
        linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
          padding-box,
        linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.4)
          )
          border-box;

      &:hover {
        scale: 1.05;
      }

      transition: all 0.3s ease-in-out;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);

      > div {
        padding: 32px;
      }
    }
  }
`;
