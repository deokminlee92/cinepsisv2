import React from "react";
import { Wrapper } from "../../style/variables";
import * as S from "./Footer.styled";

const Footer = ({ color }) => {
  return (
    <S.Footer>
      <Wrapper>
        <S.Container>
          <S.Copyright color={color}>
            <S.Author>Made by Deokmin</S.Author>
            <a href="https://github.com/deokminlee92">
              <S.Github />
            </a>
          </S.Copyright>
        </S.Container>
      </Wrapper>
    </S.Footer>
  );
};

export default Footer;
