import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 2rem;

  > div {
    > h1 {
      padding: 0 10rem;
      font-size: 2rem;
      font-weight: 600;
      color: var(--primary);
    }
    @media (max-width: 750px) {
      margin-bottom: 10rem;
      padding: 0 2rem;
    }
  }
`;

export const Main = styled.div`
  width: 100vw;
  padding: 2rem 5rem 2rem 10rem;
  height: 80vh;
  align-items: center;
  display: grid;
  grid-template-columns: 50% 50%;
  background: linear-gradient(162.92deg, #207567 9.33%, #6baf92 96.78%);

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    padding: 3rem;
  }

  > div {
    > img {
      width: 100%;
    }
    &:first-child {
      margin-bottom: 5rem;
      > h1 {
        width: 80%;
        font-size: 2.5rem;
        color: var(--white);
        font-weight: 600;
        > span {
          color: var(--secondary);
        }
      }
      > p {
        margin-top: 2rem;
        color: #dfeae2;
      }
    }
  }
`;

export const CardRow = styled.div`
  margin-top: -4rem;
  padding: 0rem 10rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 750px) {
    margin-top: 0;
    grid-template-columns: 1fr;
    padding: 0rem 2rem 0 2rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 80vh;
  padding: 2rem 10rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 750px) {
    margin-top: -10rem;
    grid-template-columns: 1fr;
    padding: 0rem 2rem 0 2rem;
  }

  > h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--primary);
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 25%;
  }
  > div {
    width: 60%;

    > p {
      margin-top: 1rem;
    }
    > button {
      margin-top: 2rem;
      background: var(--primary);
      color: var(--white);
      border-radius: 2rem;
      border: 0;
      padding: 0.8rem 3rem;
    }
  }
`;

export const CardTree = styled.div`
  padding: 0 10rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const Card = styled.div`
  background: var(--green-100);
  padding: 1.5rem;
  border-radius: 1.5rem;
  @media (max-width: 750px) {
    width: 100%;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
  }
  > h3 {
    padding: 0.7rem 0;
  }
  > ul {
    list-style: circle;
    > li {
      margin-top: 1rem;
    }
  }
  > button {
    margin-top: 5rem;
    background: var(--primary);
    color: var(--white);
    border-radius: 2rem;
    border: 0;
    padding: 0.8rem 3rem;
  }
`;
