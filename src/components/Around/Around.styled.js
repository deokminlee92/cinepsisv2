import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-top: 10%;
`;

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 300px;
  margin: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: ${({ backdropPath }) => `url(${backdropPath}) center no-repeat`};
  background-size: cover;
  height: 30vh;
  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.3);
  /* cursor: pointer; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

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
const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5em;
  color: white;
  font-weight: bold;
  margin-bottom: 5px;
  height: 100%;
`;

export { Grid, ImageCard, Content, Container, Title };
