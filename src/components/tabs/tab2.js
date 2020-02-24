import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Footer from '../footer';

const CSSTransition = require('react-transition-group/CSSTransitionGroup');

const Tab2 = ({
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
    tabIndex='-2'
    name='slide2'
    onClick={activate}
    className={isActive === 'slide2' ? 'active pic2 slides' : 'pic2 slides'}
  >
    {isActive !== 'slide2' ? <p className='title'>What we do</p> : null}

    <svg
      onClick={closeTab}
      className='closeTab'
      style={{
        opacity: isActive === 'slide2' ? '1' : '0',
        transform: isActive === 'slide2' ? 'rotate(0)' : 'rotate(-90deg)',
      }}
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

    {/* Description Section part2 */}
    <CSSTransition
      transitionName='showDesc'
      transitionEnterTimeout={700}
      transitionLeaveTimeout={300}
    >
      {isActive === 'slide2' ? (
        <div className='resume'>
          <Fade bottom>
            <h1 id='title1'>
              What
              <br />
              we do
            </h1>

            <div
              style={{
                marginBottom: window.innerWidth <= 812 ? '100px' : '200px',
              }}
            >
              <h5 style={{ textAlign: 'center' }}>
                We amplify brand impact through our creative design services
              </h5>
            </div>

            <div
              style={{
                marginBottom: window.innerWidth <= 812 ? '100px' : '200px',

                width: '85%',
              }}
            >
              <h5>Story Design</h5>

              <p>
                The stories we create live at the intersection of humanity and
                the heart. No matter the medium, we want to write your (blog,
                website, film, speech) story.
              </p>
              <p style={{ fontSize: '30px' }}>
                Origin Story
                <br />
                Metanarrative
                <br />
                Verbal & Values Alignment
                <br />
                Content Curation
                <br />
                Creative Direction
                <br />
              </p>
            </div>
            <div
              style={{
                marginBottom: window.innerWidth <= 812 ? '100px' : '200px',

                width: '85%',
                float: 'right',
              }}
            >
              <h5 style={{}}>Educational Design</h5>

              <p>
                We believe education can and will save the world. We provide
                curriculum development and workshops to inspire curious,
                creative and cultured mindsets.
              </p>
              <p style={{ fontSize: '30px' }}>
                Deschooling & Disruption
                <br />
                Curriculum for Change Development
                <br />
                Learning Liberated PBL Practice
                <br />
                Inside Out Social-Emotional Learning
                <br />
                Storytelling as Education
                <br />
              </p>
            </div>

            <div
              style={{
                marginBottom: window.innerWidth <= 812 ? '100px' : '200px',

                width: '85%',
                float: 'left',
              }}
            >
              <h5>Impact Design</h5>

              <p style={{ width: '85%' }}>
                Based on local to global insights, our strategic impact
                transcends cultures, countries and communities. We are the
                architects of platforms that matter.
              </p>
              <p style={{ fontSize: '30px' }}>
                Advocacy and Social Justice
                <br />
                Awareness Campaigns
                <br />
                Cultural Engagement Strategy
                <br />
                Community Un-Management
                <br />
                Social Media Curation
                <br />
              </p>
            </div>

            <div
              style={{
                marginBottom: window.innerWidth <= 812 ? '100px' : '200px',

                width: '85%',
                float: 'right',
              }}
            >
              <h5 style={{}}> Web Design</h5>

              <p style={{}}>
                This is where the visual meets the verbal. We design, develop
                and maintain websites that communicate your value in and around
                the world.
              </p>
              <p style={{ fontSize: '30px' }}>
                Wireframing
                <br />
                Storyboarding
                <br />
                UX/UI
                <br />
                Graphics
                <br />
                Design Sprints
                <br />
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
    </CSSTransition>
  </div>
);
export default Tab2;
