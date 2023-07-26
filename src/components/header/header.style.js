import styled, { css } from "styled-components";
import { IoIosSearch } from "react-icons/io";
import {
  headerZindex,
  device,
  headerHeight,
  headerWidthLaptop,
} from "../../style/variables";

const menuMargin = "1rem";
const headerStyle = css`
  position: fixed;
  z-index: ${headerZindex};
  height: ${headerHeight};
`;

const Header = styled.header`
  background-color: ${({ bgColor }) => bgColor};
  width: 100%;
  ${headerStyle};
  border: 3px solid red;
`;

const Container = styled.div`
  ${headerStyle};
  width: 90vw;
  display: flex;
  justify-content: ${({ isOpen }) => (isOpen ? "flex-end" : "space-between")};
  align-items: center;
  color: ${({ color }) => color};
  border: 3px solid green;
  @media ${device.Laptops} {
    width: ${headerWidthLaptop};
  }
`;

const LogoLinkContainer = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  color: inherit;
  display: ${({ isOpen }) => (isOpen ? "none" : "block")};
`;

const SearchLinkContainer = styled.div`
  color: inherit;
  margin-right: ${menuMargin};
  display: ${({ isOpen }) => (isOpen ? "none" : "block")};

  @media ${device.TabletPortrait} {
    margin-right: calc(${menuMargin} + 1rem);
  }

  &:last-child {
    margin-right: 0;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid yellow;
`;

const SearchIcon = styled(IoIosSearch)`
  font-size: 2rem;
  stroke-width: 0.7rem;
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const LI = styled.li`
  font-size: 1.3rem;
  list-style: none;
  margin-right: ${menuMargin};
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  @media ${device.TabletPortrait} {
    margin-right: calc(${menuMargin} + 1rem);
  }
`;

const SearchCancel = styled.button`
  color: red;
  margin-right: 1rem;
`;

export {
  Header,
  Container,
  LogoLinkContainer,
  SearchIcon,
  SearchCancel,
  SearchLinkContainer,
  MenuContainer,
  UL,
  LI,
};
