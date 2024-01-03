import React from "react";
import styled from "styled-components";
// Components
// Assets
import HeaderImage from "../../assets/img/buffer2.jpg";
import Dots from "../../assets/svg/Dots";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <RightSide className="flex">
        <div>
          <h1 className="extraBold font80">Welcome to AbraPower</h1>
          <HeaderP className="font15 semiBold">
            Producing Top Quality Sanding Sponges and Pads
          </HeaderP>
        </div>
      </RightSide>
      <LeftSide>
        <ImageWrapper>
          <Img className="radius8 fixH" src={HeaderImage} width={550} alt="office" style={{zIndex: 9}} />
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </LeftSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 1px;
  width: 100%;
  min-height: 840px;
  background: url("../../assets/img/header-img.png")  ;
  @media (max-width: 960px) {
    flex-direction: column;
    padding-top:70px;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


