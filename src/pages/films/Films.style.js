import styled from "styled-components";
const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: ${({ backdrop_path }) =>
    `url(${backdrop_path}) center no-repeat`};
  background-size: cover;
  height: 100vh;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.3;
  }
`;

export { Background };
