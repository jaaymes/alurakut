import styled from 'styled-components'

export const MainGrid = styled.main`
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-gap: 10px;
  padding: 16px;
  .profileArea {
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }

  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;
