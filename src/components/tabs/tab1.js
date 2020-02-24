import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Footer from '../footer';

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
      //className title is the text that's rotated before you click on tab
      //hide it when tab is active
      <p className='title'>Who we are</p>
    ) : null}
    <div
      role='button'
      tabIndex={-1}
      onClick={closeTab}
      className='closeTab'
      style={{
        opacity: isActive === 'slide1' ? '1' : '0',
        transform: isActive === 'slide1' ? 'rotate(0)' : 'rotate(-90deg)',
      }}
    >
      <svg
        width='26'
        height='26'
        viewBox='0 0 26 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 1L25 25M1 25L25 1'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </div>

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
              // marginTop: '80px',
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
