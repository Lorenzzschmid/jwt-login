import styled, { css } from "styled-components";

export const DefaultContainer = styled.div`
  width: 20rem;
  margin: 2em auto;
  height: 40rem;
  border: 7.25px solid lightcoral;
  padding: 3em;
  border-radius: 46px;
  background-color: #eef3f810;
  /* ${({ register, login }) => {
    return register || login
      ? css`
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: column;
        `
      : css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        `;
  }} */
`;

export const ContainerLandingPage = styled(DefaultContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    margin: 2em;
  }
`;

export const ContainerWelcomePage = styled(DefaultContainer)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  button {
    margin: 2em;
  }
`;
