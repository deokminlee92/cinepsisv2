import styled from "styled-components";
import { homeIntroZindex, device } from "../../style/variables";

const HomeIntro = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: ${homeIntroZindex};
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid blue;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  text-align: center;
  /* border: 3px solid black; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* margin-top: 50px; */

  /* @media ${device.TabletPortrait} {
    font-size: 2rem;
  } */
`;

const contentMarginBottom = "1.5em";

// const Title = styled.div`
//   font-size: 1.2em;
//   margin-bottom: ${contentMarginBottom};
// `;

// const Description = styled.div`
//   font-size: 0.8em;
//   font-style: italic;
//   margin-bottom: ${contentMarginBottom};
//   line-height: 1.2;
//   /* margin-bottom: 1em; */
// `;

const Name = styled.div`
  font-size: 1.3em;
  margin-bottom: calc(${contentMarginBottom} + 1em);
  margin-bottom: 1em;
`;

const MoreButton = styled.button`
  width: 200px;
  padding: 0.5rem 0;
  border: 3px solid white;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export { HomeIntro, Container, Name, MoreButton };
