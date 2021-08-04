import styled from "styled-components";



type ProfileSideBarProps = {
  isMenuOpen: boolean;
  gitHubUser: string;
}


export const MenuHeader = styled.header`
  width: 100%;
  background-color: #308bc5;

  .container {
    background-color: #308bc5;
    padding: 7px 16px;
    max-width: 1110px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 101;
    @media (min-width: 860px) {
      justify-content: flex-start;
    }
    button {
      border: 0;
      background: transparent;
      align-self: center;
      display: inline-block;
      @media (min-width: 860px) {
        display: none;
      }
    }
    nav {
      display: none;
      @media (min-width: 860px) {
        display: flex;
      }
      a {
        font-size: 12px;
        color: white;
        padding: 10px 16px;
        position: relative;
        text-decoration: none;
        &:after {
          content: " ";
          background-color: #5292c1;
          display: block;
          position: absolute;
          width: 1px;
          height: 12px;
          margin: auto;
          left: 0;
          top: 0;
          bottom: 0;
        }
      }
    }
  }
`;

export const Logo = styled.img`
background-color: #ffffff;
padding: 9px 14px;
border-radius: 1000px;
height: 34px;
`;

type InputProps = {
  url: string;
}

export const Input = styled.input<InputProps>`
      color: #ffffff;
      background: #5579a1;
      padding: 10px 42px;
      border: 0;
      background-image: url(${props => props.url});
      background-position: 15px center;
      background-repeat: no-repeat;
      border-radius: 1000px;
      font-size: 12px;
      ::placeholder {
        color: #ffffff;
        opacity: 1;
      }

`


export const ProfileSideBar = styled.div<ProfileSideBarProps>`
    background: white;
    position: fixed;
    z-index: 100;
    padding: 46px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 48px;
    transition: 0.3s;
    pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? "all" : "none")};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "translateY(0)" : "translateY(calc(-100% - 48px))"};
    @media (min-width: 860px) {
      display: none;
    }
    > div {
      max-width: 400px;
      margin: auto;
      img{
        border-radius: 8px;
      }
    }
    a {
      font-size: 18px;
    }
    .boxLink {
      font-size: 18px;
      color: #2e7bb4;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
    }
    hr {
      margin-top: 12px;
      margin-bottom: 8px;
      border-color: transparent;
      border-bottom-color: #ecf2fa;
    }
  
`
