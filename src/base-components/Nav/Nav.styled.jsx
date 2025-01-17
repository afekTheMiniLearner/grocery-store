import styled from 'styled-components';
import { RiUserSettingsLine } from 'react-icons/ri';

export const NavContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 82px;
  display: flex;
  align-items: center;
  z-index: 3;

  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  user-select: none;

  @media screen and (max-width: 670px) {
    min-height: 78px;
  }
`;

export const NavChildrenContainer = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 670px) {
    position: initial;
    margin: auto 20px auto auto;
  }

  @media screen and (max-width: 400px) {
    margin: auto 10px auto auto;
  }
`;

export const NavTitle = styled.p`
  margin: 0 auto;
  font-size: 1.6em;

  @media screen and (max-width: 670px) {
    margin: auto;
    font-size: 1.3em;
  }

  @media screen and (max-width: 350px) {
    font-size: 1em;
    white-space: pre;
  }
`;

export const NavLogo = styled('img').withConfig({
  shouldForwardProp: (prop) => prop !== 'isClickable',
})(({ isClickable }) => ({
  position: 'absolute',
  left: '18px',
  width: '130px',
  paddingBottom: '8px',
  ...(isClickable && { cursor: 'pointer' }),

  '@media (max-width: 670px)': {
    position: 'initial',
    width: '100px',
    margin: 'auto auto auto 18px',
    paddingBottom: '13px',
  },

  '@media (max-width: 400px)': {
    width: '80px',
    margin: 'auto auto auto 8px',
    paddingBottom: '8px',
  },
}));

export const AdminIcon = styled(RiUserSettingsLine)`
  font-size: 2.7em;
  color: #e29d34d4;

  @media screen and (max-width: 670px) {
    max-width: 35px;
  }
`;
