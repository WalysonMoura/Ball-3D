import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 2rem 0;
  color: #2d2d2d;

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    h1 {
      font-size: 4rem;
      font-weight: 700;
      strong{
            color: hsl(335, 100%, 50%);
        }
    }
    p {
      font-weight: 400;
    }
  }
  div {
    width: 100%;
    height: 35rem;
  }

  @media (max-width: 760px) {
    flex-wrap: wrap;
    padding: 1rem 0m 0;

    .text {
    padding: 0 2rem;
      h1 {
        margin-top: 3rem;
        font-size: 3rem;

      }
    }

    div {
      width: 100%;
      height: 30rem;
      
    }
  }
`;
