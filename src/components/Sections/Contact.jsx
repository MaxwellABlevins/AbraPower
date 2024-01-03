import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold flexSpaceCenter"  style={{padding: "30px"}}>Let's get in touch</h1>
              <div className="flexSpaceCenterM textCenterM">
                <span className="textCenterS" style={{padding: "30px"}}><h1>Barbra Tropiejko</h1><p>President</p><p><a>barbara@abrapowerusa.com</a></p></span>
                <span className="textCenterS" style={{padding: "30px"}}><h1>Adam Tropiejko</h1><p>Vice President</p><p><a>adam@abrapowerusa.com</a></p></span>
                <span className="textCenterS" style={{padding: "30px"}}><h1>Natasha Bowsher</h1><p>Vice President</p><p><a>natasha@abrapowerusa.com</a></p></span>
                <span className="textCenterS" style={{padding: "30px"}}><h1>Jason Chalfant</h1><p>Production Manager</p><p><a>jason@abrapowerusa.com</a></p></span>
              </div>
            <hr/>
            <p className="font20" style={{padding: "20px", margin: "10px"}}>
              Call us at: <p className="font18">859-282-6717</p>
              <br />
              Send an email to:<p className="font18">info@abrapowerusa.com</p>
              <br/>
              Visit us at: Abrapower USA, Inc 7451 Empire Drive Florence, KY 41042
            </p>
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;









