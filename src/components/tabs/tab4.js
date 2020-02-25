import React from 'react';
import Fade from 'react-reveal/Fade';
import socialIcons from '../socialIcons';
import PropTypes from 'prop-types';
import CloseTab from '../closeTab';

const Tab4 = ({
  activate,
  closeTab,
  animate,
  isActive,
  spanHovered,
  twitter,
  linkedIn,
}) => {
  //variables for rendering the letters in the footer message at differant delay speed
  const msg = 'CONTACT US'.split('');
  let count = 60;
  return (
    <div
      role='button'
      tabIndex='0'
      name='slide4'
      onClick={activate}
      className={isActive === 'slide4' ? 'active pic4 slides' : 'pic4 slides'}
    >
      {isActive !== 'slide4' ? <p className='title'>Connect with us</p> : null}

      {/* the close btn */}
      <CloseTab closeTab={closeTab} isActive={isActive} slide='slide4' />

      {isActive === 'slide4' ? (
        <div className='resume'>
          <Fade bottom>
            <h1>
              Connect
              <br />
              with us
            </h1>
            <div
              style={{
                paddingBottom: window.innerWidth <= 812 ? '100px' : '200px',
              }}
            >
              <h5 style={{ textAlign: 'center' }}>
                We know the power of human connection
              </h5>
            </div>

            <div
              style={{
                paddingBottom: window.innerWidth <= 812 ? '100px' : '200px',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: window.innerWidth <= 812 ? 'column' : 'row',
              }}
            >
              <div>
                <h5>Bree</h5>
                <p>
                  Story Strategist
                  <br />
                  <a
                    href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKBzzwgxVBXTzptDkTDjgJSCsThNKTZPCzmDmQVQLWLPNwCWqhVpMLNGSfHGhFfWfLpgrpL'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    bree@morsadi.com
                  </a>
                </p>
              </div>
              <div>
                <h5>Badr</h5>
                <p>
                  Lead Developer
                  <br />
                  badr@morsadi.com
                </p>
              </div>
            </div>
            <div
              style={{
                paddingBottom: '200px',
              }}
            >
              <h5 style={{ textAlign: 'center' }}>
                Connect with us and be a friend of Morsadi for life
              </h5>
            </div>
            <div className='footer'>
              <h6
                onMouseEnter={() => {
                  animate('spanHovered');
                }}
              >
                {msg.map((letter, i) => {
                  count += 20;
                  if (letter !== ' ') {
                    return (
                      <span
                        key={`letter${i}`}
                        style={{ animationDelay: `${count}ms` }}
                        className={spanHovered ? 'animate showIt' : 'animate'}
                      >
                        {letter}
                      </span>
                    );
                  } else {
                    return <span key={`letter${i}`}> </span>;
                  }
                })}
              </h6>
              <span
                onMouseEnter={() => {
                  animate('twitter');
                }}
                className={twitter ? 'animate showIt' : 'animate'}
              >
                {socialIcons[0]}
              </span>
              <span
                onMouseEnter={() => {
                  animate('linkedIn');
                }}
                className={linkedIn ? 'animate showIt' : 'animate'}
              >
                {socialIcons[1]}
              </span>
            </div>
          </Fade>
        </div>
      ) : null}
    </div>
  );
};
Tab4.prototype = {
  activate: PropTypes.func,
  closeTab: PropTypes.func,
  animate: PropTypes.func,
  isActive: PropTypes.string,
  spanHovered: PropTypes.bool,
  twitter: PropTypes.bool,
  linkedIn: PropTypes.bool,
};

export default Tab4;
