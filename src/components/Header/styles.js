import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  top: 0;
  height: 6.5rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  padding: 2rem 10rem;

  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: space-between;
    height: 15.5rem;
    padding: 2rem 1rem;
  }
`;

export const Logo = styled.img``;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    margin-left: 4rem;
    display: flex;
    list-style: none;

    li {
      margin-right: 1.5rem;
      color: var(--white);
    }
  }
  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
`;

export const ButtonLogin = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 10rem;
  border: 0;
  background-color: #8dc3a7;
  color: var(--white);
  font-weight: bold;
  margin-right: 1rem;
`;

export const ButtonConta = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 10rem;
  border: 0;
  background-color: var(--green-100);
  color: var(--primary);
  font-weight: bold;
  margin-right: 1rem;
`;
