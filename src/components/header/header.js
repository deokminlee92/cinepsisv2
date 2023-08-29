import React from "react";
import { Link } from "react-router-dom";
import * as S from "./header.style";
import { Wrapper } from "../../style/variables";

function Header({ isSearching, color, primary }) {
  return (
    <>
      <S.Header color={color} primary={primary}>
        <Wrapper>
          <S.Container>
            <S.LogoLinkContainer color={color}>
              <Link to="/">Movie</Link>
            </S.LogoLinkContainer>
            <S.MenuContainer>
              {!isSearching ? (
                <S.SearchLinkContainer>
                  <Link to="/search">
                    <S.SearchIcon />
                  </Link>
                </S.SearchLinkContainer>
              ) : (
                <S.SearchCancel>Cancel</S.SearchCancel>
              )}

              <S.UL>
                <S.LI>
                  <Link to="/films">Movies</Link>
                </S.LI>
                <S.LI>
                  <Link to="/favoris">Favrois</Link>
                </S.LI>
                <S.LI>
                  <Link to="/about">About</Link>
                </S.LI>
              </S.UL>
            </S.MenuContainer>
          </S.Container>
        </Wrapper>
      </S.Header>
    </>

    // <div className="container-header">
    //   <div className="Logo">
    //     {" "}
    //     <Link to="/" className="LinkToHome">
    //       Logo
    //     </Link>
    //   </div>
    //   <nav className="liBox-header">
    //     <ul>
    //       <li>
    //         <Link to="/search" className="LinkToSearch">
    //           Search
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/films" className="LinkToFilms">
    //           Films
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/favoris" className="LinkToFavoris">
    //           Favoris
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/about" className="LinkToAbout">
    //           About
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
}

export default Header;
