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
  width: 30%;
  margin: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.3);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.8;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const Title = styled.h3`
  margin: 0;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export { Grid, ImageCard, Image, Content, ImageContainer, Rating, Title };
