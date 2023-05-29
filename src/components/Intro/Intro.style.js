import styled from "styled-components";
import { homeIntroZindex, device } from "../../style/variables";

const HomeIntro = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: ${homeIntroZindex};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  text-align: center;

  /* @media ${device.TabletPortrait} {
    font-size: 2rem;
  } */
`;

const contentMarginBottom = "1.5em";

const Title = styled.div`
  font-size: 1.5em;
  margin-bottom: ${contentMarginBottom};
`;

const Description = styled.div`
  font-size: 2em;
  font-style: italic;
  margin-bottom: ${contentMarginBottom};
  line-height: 1.2;
`;

const Name = styled.div`
  font-size: 1.3em;
  margin-bottom: calc(${contentMarginBottom} + 1em);
`;

const MoreButton = styled.button`
  width: 250px;
  padding: 0.8rem 0;
  border: 3px solid white;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export { HomeIntro, Container, Title, Description, Name, MoreButton };
