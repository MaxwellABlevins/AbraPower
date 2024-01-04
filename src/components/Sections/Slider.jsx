import React, { Component } from "react";
import Slider from "react-slick";


import ProjectBox from "../Elements/ProjectBox";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.jpg";
import ProjectImg2 from "../../assets/img/projects/2.jpg";
import ProjectImg3 from "../../assets/img/projects/3.jpg";
import ProjectImg6 from "../../assets/img/projects/6.jpg";
import ProjectImg7 from "../../assets/img/projects/7.jpg";
import ProjectImg8 from "../../assets/img/projects/8.jpg";
import ProjectImg9 from "../../assets/img/projects/9.jpg";


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: '100px',
      centerMargin:  '100px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: true,
            centerPadding: 40,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerMargin:  '100px',
            swipeToSlide: true,
            focusOnSelect: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: true,
            centerPadding: "80px",
            centerMargin: "80px",
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            swipeToSlide: true,
            focusOnSelect: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: 80,
            centerMargin: 80,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            focusOnSelect: true,
            
          }
        }
      ]
    };
    return (
      <div id="blog">
        <h2 style={{ padding: "50px", margin: "5px"}}> Product Details</h2>
        <Slider {...settings}>
          <div style={{ margin: "5px", minWidth: "350px"}}>
          <ProjectBox
                title="High Flex Pads"
                img={ProjectImg1}
                text=<div style={{padding: "30px"}}><p><h4>Typical size 5 ½” x 4 ½” x 3/16” – sizes can be made to order</h4> <br/>
                Coated on two sides, Crease resistant and bounce back to shape without cracking, Used predominately on drywall, Last 10 times longer than sandpaper, 
                Rinse and reuse, wet or dry, and Available on reticulated foam.
                <hr/>
                Available in Aluminum Oxide or Silicon Carbide<br/>
                Packaging options include bulk or display.<hr/>
                <h4>Grade & Grit Size</h4>
                Extra Fine: 280 <br/>
                Super Fine: 220 <br/>
                Fine: 180 <br/>
                Medium: 100 <br/>
                Coarse: 60 <br/>
                </p></div> 
                className="Projectbox"
                />
          </div>
          <div style={{ padding: "30px", margin: "50px"}} className="bigwhensmall">
          <ProjectBox
                title="DustLess Sander"
                img={ProjectImg2}
                text=<div style={{padding: "30px"}}><p><h4>Typical size 3” x 4” x 3/4”</h4> <br/>
                Coated on two sides, Crease resistant and bounce back to shape without cracking, Used predominately on drywall, Last 10 times longer than sandpaper, 
                Rinse and reuse, wet or dry, and Available on reticulated foam.
                <hr/>
                Available in Aluminum Oxide or Silicon Carbide<br/>
                Packaging options include bulk or display.<hr/>
                <h4>Grade & Grit Size</h4>
                Super Fine: 220 <br/>
                Fine: 180 <br/>
                Medium: 100 <br/>
                Coarse: 60 <br/>
                </p></div>
                className="Projectbox"
              />
          </div>
          <div style={{ padding: "30px", margin: "50px"}} className="bigwhensmall">
          <ProjectBox
                title="Cosmetic Buffers"
                img={ProjectImg3}
                text=<div style={{padding: "30px"}}><p><h4>Typical size 3” x 4” x 3/4”</h4> <br/>
                Our buffers have an excellent reputation for high quality and are the #1 preferred choice of salon technicians. To ensure that the buffers are of the highest quality Abrapower uses closed cell cross-linked ethylene copolymer foam. This is then coated within a unique surface application and specialist adhesive that allows the grit to penetrate the surface, evenly locking the abrasive into a deep bond.
                <hr/>
                Abrapower USA, Inc. continually strives to develop new techniques and products to better serve the industry in terms of price, quality and innovation.
                </p></div>
                className="Projectbox"
              />
          </div>
          <div style={{ padding: "30px", margin: "50px"}} className="bigwhensmall">
          <ProjectBox
                title="Standard Sanding Sponge"
                img={ProjectImg7}
                text=<div style={{padding: "30px"}}><p><h4>Typical size 2 5/8” x 4” x 1” – sizes can be made to order.</h4> <br/>
                Because of its construction, abrasive coated foams allow a greater degree of control, on surface treatment than traditional sandpaper, Flexible, easy to hold, sands contours and flat surfaces, Can be used on metal, wood, plaster and other materials,
                 Rinse and reuse, wet or dry, Works harder than Sandpaper
                <hr/>
                Available in Aluminum Oxide or Silicon Carbide. <br/>
                (Tolerance +/- 2 mm)<br/>
                Packaging options include bulk or display<br/>
                Each sponge weighs 1oz<hr/>
                <h4>Grade & Grit Size</h4>
                Super Fine: 220 <br/>
                Fine: 180 <br/>
                Medium: 100 <br/>
                Coarse: 60 <br/>
                </p></div>
                className="Projectbox"
              />
          </div>
          <div style={{ padding: "30px", margin: "50px"}} className="bigwhensmall">
          <ProjectBox
                title="Dual Angle Sanding Sponge"
                img={ProjectImg8}
                text=<div style={{padding: "30px"}}><p><h4>Typical size 3” x 4” x 3/4”</h4> <br/>
                The gentle 75 degree angle on each side allows the user to reach into difficult areas, Flexible, easy to hold, sands contours and flat surfaces, Can be used on metal, wood, plaster and other materials, Rinse and reuse, wet or dry, Works harder than Sandpaper, Abrapower USA has developed a unique coating system for this product resulting in extra sharp edges, unseen by other manufacturers
                <hr/>
                Available in Aluminum Oxide or Silicon Carbide. <br/>
                (Tolerance +/- 2 mm)<br/>
                Packaging options include bulk or display<br/>
                Each sponge weighs 1oz<hr/>
                <h4>Grade & Grit Size</h4>
                Super Fine: 220 <br/>
                Fine: 180 <br/>
                Medium: 100 <br/>
                Coarse: 60 <br/>
                </p></div>
                className="Projectbox" 
              />
          </div>
          <div style={{ padding: "30px", margin: "50px"}} className="bigwhensmall">
          <ProjectBox
                title="Jumbo Drywall"
                img={ProjectImg9}
                text=<div style={{padding: "30px"}}><p><h4>Typical size 3” x 10” x 1”</h4> <br/>
                Typically used for dry walling projects however it’s large size and extra firmness make it great for large surface applications, Flexible, easy to hold, sands contours and flat surfaces, Can be used on metal, wood, plaster and other materials, Rinse and reuse, wet or dry, Works harder than Sandpaper.
                <hr/>
                Available in Aluminum Oxide or Silicon Carbide. <br/>
                (Tolerance +/- 2mm)<br/>
                Each sponge weighs 2oz<br/>
                Packaging options include bulk or display<hr/>
                <h4>Grade & Grit Size</h4>
                Extra Fine: 280 <br/>
                Super Fine: 220 <br/>
                Fine: 180 <br/>
                Medium: 100 <br/>
                Coarse: 60 <br/>
                </p></div>
                className="Projectbox"
              />
          </div>
          <div style={{ padding: "30px", margin: "50px"}} className="bigwhensmall">
          <ProjectBox
                title="Three Sided Sponge"
                img={ProjectImg6}
                text=<div style={{padding: "30px"}}><p><h4>Typical size 3” x 4” x 3/4”</h4> <br/>
                Coated on three sides these products are easy to hold and can be folded into any shape to get into hard to reach areas, Crease resistant and bounce back to shape without cracking, Used predominately on metal surfaces and wood finishing, Last  longer than sandpaper, Rinse and reuse, wet or dry, Available on open or close cell foam.
                <hr/>
                Available in Aluminum Oxide or Silicon Carbide. <br/>
                Packaging options include bulk or display<hr/>
                <h4>Grade & Grit Size</h4>
                Extra Fine: 280 <br/>
                Super Fine: 220 <br/>
                Fine: 180 <br/>
                Medium: 100 <br/>
                Coarse: 60 <br/>
                </p></div>
                className="Projectbox"
              />
          </div>
        </Slider>
      </div>
    );
  }
}
