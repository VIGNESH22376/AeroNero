import React from "react";

// AOS
import aos from 'aos'

// CSS
import "./CSS/SubComp6.css";

// Images
import SubS6Left1 from '../../Images/Nero/Unbox-left.png'
import SubS6Right1 from '../../Images/Nero/Unbox-right.png'
import SubS6Left2 from '../../Images/Nero/Plug-left.png'
import SubS6Right2 from '../../Images/Nero/Plug-right.png'
import SubS6Left3 from '../../Images/Nero/24hrs-left.png'
import SubS6Right3 from '../../Images/Nero/24hrs-right.png'

// JSON
const SubS6Steps =[
  {
    id : 1,
    left : SubS6Left1,
    right : SubS6Right1,
    paragraph : "Unbox the machine and place it on the counter"
  },
  {
    id : 2,
    left : SubS6Left2,
    right : SubS6Right2,
    paragraph : "Plug the machine into an electrical socket"
  },
  {
    id : 3,
    left : SubS6Left3,
    right : SubS6Right3,
    paragraph : "Wait for 24hrs for the machine to generate a full tank of water"
  }
]

const SubCom6 = () => {

  // AOS
  aos.init();

  return (
    <>
      <div className="container-fluid sub-s6-container">

        <h2 className="sub-s6-heading"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-once="true">Your Nero machine has <span className="sub-s6-highlight">3 steps to install and use</span></h2>

        {/* Steps */}
        <div className="row gap-5">
          {
            SubS6Steps.map( element =>{
              return(
                <div className="col-md-12 col-lg-12 sub-s6-steps" key={element.id}>
                  <div className="row sub-s6-steps-inside">

                    {/* Left Image */}
                    <div className="col-2 col-md-2 col-lg-2 sub-s6-img-left-container">
                      <img className="sub-s6-img" src={element.left} alt="LeftSide.png" />
                    </div>
                    
                    {/* Text */}
                    <div className="col-10 col-md-8 col-lg-8 sub-s6-sm-container"
                    data-aos="fade-down"
                    data-aos-delay="1000"
                    data-aos-duration="800"
                    data-aos-once="true">
                      <h4 className="sub-s6-sm-heading">step:{element.id}</h4>
                      <h3 className="sub-s6-sm-para">{element.paragraph}</h3>
                    </div>

                    {/* Right Image */}
                    <div className="d-none d-md-block col-md-2 col-lg-2 sub-s6-img-right-container">
                      <img className="sub-s6-img" src={element.right} alt="RightSide.png" />
                    </div>

                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  );
};

export default SubCom6;
