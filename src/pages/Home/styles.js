import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 5rem;
`;

export const Main = styled.div`
  padding: 2rem 5rem 2rem 10rem;
  height: 80vh;
  align-items: center;
  display: grid;
  grid-template-columns: 50% 50%;
  background: linear-gradient(162.92deg, #207567 9.33%, #6baf92 96.78%);

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
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 80vh;
  padding: 2rem 10rem;
  justify-content: center;
  align-items: flex-start;

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
`;

export const Card = styled.div`
  background: var(--green-100);
  padding: 1.5rem;
  border-radius: 1.5rem;

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
