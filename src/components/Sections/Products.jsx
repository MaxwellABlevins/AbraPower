import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.jpg";
import ProjectImg2 from "../../assets/img/projects/2.jpg";
import ProjectImg3 from "../../assets/img/projects/3.jpg";
import ProjectImg4 from "../../assets/img/projects/4.jpg";
import ProjectImg6 from "../../assets/img/projects/6.jpg";
import AddImage2 from "../../assets/img/add/add2.jpg";
import { Link } from "react-scroll";


export default function Projects() {
  return (
    <Wrapper className="lightBg">
      <div className="whiteBg" id="products">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Products</h1>
            <p className="font13">
              Get an overview on everything we can provide.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 fixH">
            <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-80}>
              <ProjectBox
                img={ProjectImg1}
                title="High Flex Pads"
                text="High flexibility sanding pads for smooth and hard to reach surfaces."
              />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 fixH">
            <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-80}>
              <ProjectBox
                img={ProjectImg2}
                title="DustLess Sander"
                text="This is our new dustLess sanding sponge, the large cells trap the drywall dust in the sponge reducing the overall mess, the dust is easily shaken out into a trash can."
              />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 fixH">
            <Link activeClass="active" to="custom" spy={true} smooth={true} offset={-80}>
              <ProjectBox
                img={AddImage2}
                title="Custom Products"
                text="Abrapower USA can customize products by foam color, coating color and personalize each product with printed information."
              />
              </Link>
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 fixH">
            <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-80}>
              <ProjectBox
                img={ProjectImg4}
                title="Sanding Sponge"
                text="Abrapower USA sanding sponge not only feature exactly the grit you need for the job, but they are much more ergonomically suited to the hand than sandpaper, making sanding less of a chore. Work longer without fatigue and get the job done in less time."
              />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 fixH">
            <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-80}>
              <ProjectBox
                img={ProjectImg3}
                title="Cosmetic Buffers"
                text="These buffers are manufactured with the finest texture grit and designed specifically for nail enhancement."            />
                </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 fixH">
            <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-80}>
              <ProjectBox
                img={ProjectImg6}
                title="Three Sided Sponges"
                text="Extensively used in a professional environment on all cabinetry and furniture. Coated on three sides for extra flexability."
              />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lightBg" id="custom">
        <div className="container" >
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">Try our custom products.</h4>
              <h2 className="font40 extraBold">Private Labels and Drop Shipping</h2>
              <p className="font15">
              Abrapower USA has the facilities to handle all your branding needs from sleeve design all the way through to point-of-sale display. Abrapower USA has established relationships with designers, printers and box manufacturers to provide a complete private label service to its distributors.
              <br />
              <br />
              In addition Abrapower USA can customize products by foam color, coating color and personalize each product with printed information.
              <br />
              <br />
              Due to its unique central location Abrapower Inc is within reach of major road/rail and air networks within the USA and will confidentially drop ship on behalf of its customers.
              </p>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

