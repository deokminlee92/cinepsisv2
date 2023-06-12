import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

// const Card = styled.div`
//   position: relative;
//   flex-basis: 100%;
//   background: ${({ backdropPath }) => `url(${backdropPath}) center no-repeat`};
//   background-size: cover;
//   height: 30vh;
//   border-radius: 5px;
//   overflow: hidden;
//   margin-bottom: 3px;
//   box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.3);
//   cursor: pointer;

//   &:after {
//     content: "";
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.3);
//   }
// `;

const ImageCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 300px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
export { Grid, ImageCard };
