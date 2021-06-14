import styled from "styled-components";

export const Container = styled.div`

background:#E5E5E5;
  padding-top: 6rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100%;
>P{
  font-size:14px;
  padding-top: 1.5rem;
}
  >div{
    width: 50%;
    background: var(--white);
    border: 1rem;
    border-radius: 0.5rem;
    >h2{
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary);
      padding: 2.8rem 4rem;
    }
    >form{
      padding-top: rem;
      display: flex;
      flex-direction:column;
      >label{
        padding-left: 4rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--primary);
        padding-bottom: 1rem;
        >input{
          margin-top: 0.5rem;
          width: 34.375rem;
          border-radius:0.4rem;
          height: 2rem;
          padding-left: 0.5rem;
        }
      }
      
    }//form
    >div{
      display: flex;
      justify-content: center;
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
      >a{
        padding: 0.875rem 8.125rem 0.875rem 8.125rem;
        /* margin-left:9.813rem; */
        font-size:1.25rem;
        font-weight: 600;
        color: var(--white);
        background: var(--primary);
        border-radius: 1.87rem;
        text-decoration:none;
        text-align: center;
      }
    }
  }
`;