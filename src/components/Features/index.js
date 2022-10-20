import React from 'react';

// REACT ICONS
import { CgNotes } from 'react-icons/cg';
import { BsBarChartFill } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
import SingleFeature from './SingleFeature';

import Fade from 'react-reveal/Fade';

const Features = () => {
  return (
    <section className="features-area ptb-100 bg-image">
      <div className="container">
        <div className="section-title">
          <span style={{ color: 'white' }}>MY GOAL</span>
          <Fade duration={1000}>
            <h2 style={{ color: 'white' }}>Become better than yesterday!</h2>
          </Fade>
        </div>
        <div className="row_1">
          <SingleFeature
            Title="Creative Design"
            Icon={CgNotes}
            Desc="I create striking visuals that appeal to visitors and make them fall in love with your brand. My designs are  unique and mobile optimised. My design process involves user research followed by wire framing and then production of designs."
          />
        </div>
        <div className="row_2">
          <SingleFeature
            Title="Web Developer"
            Icon={BsBarChartFill}
            Desc="Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites."
          />
        </div>
        <div className="row_3">
          <SingleFeature
            Title="Responsive Design"
            Icon={FaMobileAlt}
            Desc="Flat, Lightweight & Responsive Designs term is related to the idea of developing a website design in a way that helps the user to open a website on any size of screen the lay out to find changed according to the user’s PC screen motion."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
