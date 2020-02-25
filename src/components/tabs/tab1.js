import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Footer from '../footer';
import CloseTab from '../closeTab';

const Tab1 = ({
  activate,
  closeTab,
  animate,
  isActive,
  spanHovered,
  twitter,
  linkedIn,
}) => (
  <div
    role='button'
    tabIndex={0}
    name='slide1'
    onClick={activate}
    className={`${isActive === 'slide1' ? 'active' : ''} pic1 slides`}
  >
    {isActive !== 'slide1' ? (
      //className title is the text that's printed vertically before you click on tab
      //hide it when tab is active
      <p className='title'>Who we are</p>
    ) : null}

    {/* the close btn */}
    <CloseTab closeTab={closeTab} isActive={isActive} slide='slide1' />

    {/* Description Section */}
    {isActive === 'slide1' ? (
      <div className='resume parag1'>
        <Fade bottom>
          <h1>
            Who
            <br />
            we are
          </h1>
          <div
            style={{
              marginBottom: window.innerWidth <= 812 ? '100px' : '200px',
            }}
          >
            <h5 style={{ textAlign: 'center' }}>
              A creative story agency for brands that matter
            </h5>
          </div>
          <div
            className='paragraph1'
            style={{
              marginBottom: window.innerWidth <= 812 ? '100px' : '200px',

              width: '85%',
            }}
          >
            <h5>We are storytellers</h5>
            <p>
              We create content that will capture your value, elevate your
              influence and spread your stories.
            </p>
          </div>

          <div
            style={{
              marginBottom: window.innerWidth <= 812 ? '100px' : '200px',
              float: 'right',

              width: '85%',
            }}
          >
            <h5>We help brands who help others</h5>
            <p>
              Our story solutions guide selected brands to look better, be
              better and do more for their surrounding communities.
            </p>
          </div>

          <div
            style={{
              marginBottom: '140px',
              width: '85%',
              float: 'left',
            }}
          >
            <h5>We will write your legacy</h5>
            <p>
              Our mission is to embolden brands positioned to make a difference
              and catalyze human connection through the power of story.
            </p>
          </div>
          <Footer
            spanHovered={spanHovered}
            animate={animate}
            twitter={twitter}
            linkedIn={linkedIn}
            isActive={isActive}
          />
        </Fade>
      </div>
    ) : null}
  </div>
);

Tab1.prototype = {
  activate: PropTypes.func,
  closeTab: PropTypes.func,
  animate: PropTypes.func,
  isActive: PropTypes.string,
  spanHovered: PropTypes.bool,
  twitter: PropTypes.bool,
  linkedIn: PropTypes.bool,
};

export default Tab1;
