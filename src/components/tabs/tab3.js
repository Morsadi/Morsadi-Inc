import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Footer from '../footer';

const Tab3 = ({
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
    tabIndex={-5}
    name='slide3'
    onClick={activate}
    className={isActive === 'slide3' ? 'active pic3 slides' : 'pic3 slides'}
  >
    {isActive !== 'slide3' ? <p className='title'>Work with us</p> : null}
    <div
      role='button'
      tabIndex={-6}
      onClick={closeTab}
      className='closeTab'
      style={{
        opacity: isActive === 'slide3' ? '1' : '0',
        transform: isActive === 'slide3' ? 'rotate(0)' : 'rotate(-90deg)',
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

    {isActive === 'slide3' ? (
      <div className='resume'>
        <Fade bottom>
          <h1>
            Work
            <br />
            with us
          </h1>

          <div
            style={{
              marginBottom: window.innerWidth <= 812 ? '100px' : '200px',
            }}
          >
            <h5 style={{ textAlign: 'center' }}>
              We work with causes, creatives, communities and companies
            </h5>
          </div>

          {/* wrapping the logos */}
          <div className='logoSection' style={{}}>
            <div>
              <div>
                <a rel='noopener noreferrer' href='https://pluswonder.org/'>
                  <img
                    alt='Plus Wonder'
                    src={require('../../assets/clients/+wonder.png')}
                  />
                </a>
              </div>
              <div>
                <a
                  rel='noopener noreferrer'
                  href='http://thinkglobalschool.org'
                >
                  <img
                    alt='TGS'
                    className='TGS'
                    src={require('../../assets/clients/TGS.png')}
                  />
                </a>
              </div>
              <div>
                <a
                  rel='noopener noreferrer'
                  href='https://www.facebook.com/519films/'
                >
                  <img
                    alt='FILMS'
                    className='FILMS'
                    src={require('../../assets/clients/FILMS.png')}
                  />
                </a>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: window.innerWidth <= 600 ? '10px' : '-50px',
                }}
              >
                <a
                  rel='noopener noreferrer'
                  href='https://headrushlearning.com'
                >
                  <img
                    alt='Headrush'
                    className='HEADRUSH'
                    src={require('../../assets/clients/HEADRUSH.png')}
                  />
                </a>
              </div>
              <div
                style={{
                  marginTop: window.innerWidth <= 600 ? '10px' : '0px',
                }}
              >
                <a
                  rel='noopener noreferrer'
                  href='http://acousticsaturdays.com'
                >
                  <img
                    alt='Acoustic Saturdays'
                    className='Acoustic'
                    src={require('../../assets/clients/Acoustic.png')}
                  />
                </a>
              </div>
              <div
                style={{
                  marginTop: window.innerWidth <= 600 ? '10px' : '50px',
                }}
              >
                <a rel='noopener noreferrer' href='https://womensmarchla.org/'>
                  <img
                    alt='LA'
                    className='LA'
                    style={{ width: '200px' }}
                    src={require('../../assets/clients/LA.png')}
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              marginBottom: window.innerWidth <= 812 ? '100px' : '200px',

              marginTop: window.innerWidth <= 812 ? '100px' : '200px',
            }}
          >
            <h5
              style={{
                textAlign: 'center',
              }}
            >
              We will nurture your strategy, storytelling and social impact as
              if they were our own
            </h5>
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
Tab3.prototype = {
  activate: PropTypes.func,
  closeTab: PropTypes.func,
  animate: PropTypes.func,
  isActive: PropTypes.string,
  spanHovered: PropTypes.bool,
  twitter: PropTypes.bool,
  linkedIn: PropTypes.bool,
};

export default Tab3;
