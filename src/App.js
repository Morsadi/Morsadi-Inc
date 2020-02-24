// eslint-disable-next-line no-unused-vars
import React, { Component, createRef } from 'react';
import Fade from 'react-reveal/Fade';
import socialIcons from './components/socialIcons';
import Logo from './components/logo';
import Construction from './components/construction';
import Tab1 from './components/tabs/tab1';
import Tab2 from './components/tabs/tab2';
const CSSTransition = require('react-transition-group/CSSTransitionGroup');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      underConstruction: false,
      isActive: '',
      style: {
        mainLogo: 0,

        navLogo: 0,
        box: 0,
        windowHeight: window.innerHeight,
      },
      spinner: '',
      spanHovered: false,
      twitter: false,
      linkedIn: false,
      checkCopyright: '',
    };
  }

  componentDidMount() {
    const { style } = this.state;
    // show spinner first then hide it in 1.5s
    this.show = setTimeout(() => {
      this.setState({
        spinner: 'none',
        checkCopyright: this.mor.clientHeight >= 30 ? '240' : '140',
        style: {
          ...style,
          mainLogo: '1',
        },
      });
    }, 1500);

    // show main logo after hiding the spinner
    this.hide = setTimeout(() => {
      this.setState({
        style: {
          ...style,
          mainLogo: '0',
        },
      });
    }, 2500);

    // show the content (box) and navbar after hiding the main logo
    this.all = setTimeout(() => {
      this.setState({
        style: {
          ...style,
          navLogo: 1,
          box: 1,
        },
      });
    }, 4000);

    // create a resize event on window
    window.addEventListener('resize', this.changeWindowSize);
  }

  componentWillUnmount() {
    clearTimeout(this.hideIt);
    clearTimeout(this.show);
    clearTimeout(this.hide);
    clearTimeout(this.all);
  }

  // stretch the content according to the window inner height
  changeWindowSize = () => {
    const { style } = this.state;
    this.setState({
      checkCopyright: this.mor.clientHeight >= 30 ? '240' : '140',
      style: {
        ...style,
        windowHeight: window.innerHeight,
      },
    });
  };

  // set the active slide to the name of the clicked one
  activate = e => {
    const { isActive } = this.state;
    const clickedEl = e.currentTarget.getAttribute('name');
    //only open tab when all tabs are closed && when tab is active, disable function
    if (!isActive) {
      this.setState({
        isActive: clickedEl,
      });
    }
  };

  // close the tab by clicking on the X
  closeTab = () => {
    this.setState({
      isActive: null,
    });
  };

  // animate the message before the email in every slide
  animate = text => {
    console.log(text);
    this.setState({
      [text]: true,
    });

    this.hideIt = setTimeout(() => {
      this.setState({
        [text]: false,
      });
    }, 1000);
  };

  // clear timeouts

  render() {
    const {
      spanHovered,
      underConstruction,
      spinner,
      style,
      isActive,
      checkCopyright,
      twitter,
      linkedIn,
    } = this.state;

    return (
      <div>
        <div className='App'>
          {/* if underConstruction is true */}
          {underConstruction ? (
            // sow contrusction page.
            <Construction />
          ) : (
            //  If not, show the website
            <>
              <span style={{ display: spinner }} className='spinner' />
              {style.navLogo !== 1 ? (
                <div style={{ opacity: style.mainLogo }} className='mainLogo'>
                  {Logo[0]}
                </div>
              ) : null}

              <div style={{ opacity: style.navLogo }} className='navLogo'>
                {window.innerWidth <= 667 ? Logo[3] : Logo[2]}
              </div>
              <div
                style={{
                  opacity: style.box,
                  // change height of box according to the copyright height
                  height: style.windowHeight - checkCopyright,
                }}
                className='box'
              >
                <Tab1
                  activate={this.activate}
                  animate={this.animate}
                  closeTab={this.closeTab}
                  isActive={isActive}
                  twitter={twitter}
                  linkedIn={linkedIn}
                  spanHovered={spanHovered}
                />
                <Tab2
                  activate={this.activate}
                  animate={this.animate}
                  closeTab={this.closeTab}
                  isActive={isActive}
                  twitter={twitter}
                  linkedIn={linkedIn}
                  spanHovered={spanHovered}
                />

                <div
                  role='button'
                  tabIndex={-5}
                  name='slide3'
                  onClick={this.activate}
                  className={
                    isActive === 'slide3' ? 'active pic3 slides' : 'pic3 slides'
                  }
                >
                  {isActive !== 'slide3' ? (
                    <p className='title'>Work with us</p>
                  ) : null}
                  <div
                    role='button'
                    tabIndex={-6}
                    onClick={this.closeTab}
                    className='closeTab'
                    style={{
                      opacity: isActive === 'slide3' ? '1' : '0',
                      transform:
                        isActive === 'slide3' ? 'rotate(0)' : 'rotate(-90deg)',
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

                  {/* Description Section part3 */}
                  <CSSTransition
                    transitionName='showDesc'
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={300}
                  >
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
                              marginBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',
                            }}
                          >
                            <h5 style={{ textAlign: 'center' }}>
                              {/* We amplify brand impact through our creative design services. */}
                              We work with causes, creatives, communities and
                              companies
                            </h5>
                          </div>

                          {/* wrapping the logos */}

                          <div className='logoSection' style={{}}>
                            <div>
                              <div>
                                <a
                                  rel='noopener noreferrer'
                                  href='https://pluswonder.org/'
                                >
                                  <img
                                    alt='Plus Wonder'
                                    src={require('./assets/clients/+wonder.png')}
                                  />
                                </a>
                              </div>
                              <div
                                style={
                                  {
                                    // textAlign: 'center'
                                  }
                                }
                              >
                                <a
                                  rel='noopener noreferrer'
                                  href='http://thinkglobalschool.org'
                                >
                                  <img
                                    alt='TGS'
                                    className='TGS'
                                    src={require('./assets/clients/TGS.png')}
                                  />
                                </a>
                              </div>
                              <div
                                style={
                                  {
                                    // textAlign: 'right'
                                  }
                                }
                              >
                                <a
                                  rel='noopener noreferrer'
                                  href='https://www.facebook.com/519films/'
                                >
                                  <img
                                    alt='FILMS'
                                    className='FILMS'
                                    src={require('./assets/clients/FILMS.png')}
                                  />
                                </a>
                              </div>
                            </div>
                            <div>
                              <div
                                style={{
                                  marginTop:
                                    window.innerWidth <= 600 ? '10px' : '-50px',
                                }}
                              >
                                <a
                                  rel='noopener noreferrer'
                                  href='https://headrushlearning.com'
                                >
                                  <img
                                    alt='Headrush'
                                    className='HEADRUSH'
                                    src={require('./assets/clients/HEADRUSH.png')}
                                  />
                                </a>
                              </div>
                              <div
                                style={{
                                  // textAlign: 'center',
                                  marginTop:
                                    window.innerWidth <= 600 ? '10px' : '0px',
                                }}
                              >
                                <a
                                  rel='noopener noreferrer'
                                  href='http://acousticsaturdays.com'
                                >
                                  <img
                                    alt='Acoustic Saturdays'
                                    className='Acoustic'
                                    src={require('./assets/clients/Acoustic.png')}
                                  />
                                </a>
                              </div>
                              <div
                                style={{
                                  // textAlign: 'right',
                                  marginTop:
                                    window.innerWidth <= 600 ? '10px' : '50px',
                                }}
                              >
                                <a
                                  rel='noopener noreferrer'
                                  href='https://womensmarchla.org/'
                                >
                                  <img
                                    alt='LA'
                                    className='LA'
                                    style={{ width: '200px' }}
                                    src={require('./assets/clients/LA.png')}
                                  />
                                </a>
                              </div>
                            </div>
                          </div>

                          <div
                            style={{
                              marginBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',

                              marginTop:
                                window.innerWidth <= 812 ? '100px' : '200px',
                            }}
                          >
                            <h5
                              style={{
                                textAlign: 'center',
                                // fontSize: '24px',
                                // padding: '0 200px'
                              }}
                            >
                              We will nurture your strategy, storytelling and
                              social impact as if they were our own
                            </h5>
                          </div>
                          <div className='footer'>
                            <h6>
                              <span
                                style={{ animationDelay: '80ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                W
                              </span>
                              <span
                                style={{ animationDelay: '100ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                O
                              </span>
                              <span
                                style={{ animationDelay: '120ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                R
                              </span>
                              <span
                                style={{ animationDelay: '140ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                K
                              </span>
                              <span> </span>

                              <span
                                style={{ animationDelay: '160ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                W
                              </span>
                              <span
                                style={{ animationDelay: '180ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                I
                              </span>
                              <span
                                style={{ animationDelay: '200ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                T
                              </span>
                              <span
                                style={{ animationDelay: '220ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                H
                              </span>
                              <span> </span>
                              <span
                                style={{ animationDelay: '240ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                U
                              </span>
                              <span
                                style={{ animationDelay: '260ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                S
                              </span>
                            </h6>
                            <p
                              onMouseEnter={() => {
                                this.animate('spanHovered');
                              }}
                            >
                              <a
                                href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKBzzwgxVBXTzptDkTDjgJSCsThNKTZPCzmDmQVQLWLPNwCWqhVpMLNGSfHGhFfWfLpgrpL'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                bree@morsadi.com
                              </a>
                            </p>
                            <span
                              onMouseEnter={() => {
                                this.animate('twitter');
                              }}
                              className={twitter ? 'animate showIt' : 'animate'}
                            >
                              {socialIcons[0]}
                            </span>
                            <span
                              onMouseEnter={() => {
                                this.animate('linkedIn');
                              }}
                              className={
                                linkedIn ? 'animate showIt' : 'animate'
                              }
                            >
                              {socialIcons[1]}
                            </span>
                          </div>
                        </Fade>
                      </div>
                    ) : null}
                  </CSSTransition>
                </div>

                <div
                  role='button'
                  tabIndex='-7'
                  name='slide4'
                  onClick={this.activate}
                  className={
                    isActive === 'slide4' ? 'active pic4 slides' : 'pic4 slides'
                  }
                >
                  {isActive !== 'slide4' ? (
                    <p className='title'>Connect with us</p>
                  ) : null}
                  <div
                    role='button'
                    tabIndex='-8'
                    onClick={this.closeTab}
                    className='closeTab'
                    style={{
                      opacity: isActive === 'slide4' ? '1' : '0',
                      transform:
                        isActive === 'slide4' ? 'rotate(0)' : 'rotate(-90deg)',
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
                  <CSSTransition
                    transitionName='showDesc'
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={300}
                  >
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
                              paddingBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',
                            }}
                          >
                            <h5 style={{ textAlign: 'center' }}>
                              We know the power of human connection
                            </h5>
                          </div>

                          <div
                            style={{
                              paddingBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',
                              width: '100%',
                              display: 'flex',
                              justifyContent: 'space-between',
                              flexDirection:
                                window.innerWidth <= 812 ? 'column' : 'row',
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
                              Connect with us and be a friend of Morsadi for
                              life
                            </h5>
                          </div>
                          <div className='footer'>
                            <h6
                              onMouseEnter={() => {
                                this.animate('spanHovered');
                              }}
                            >
                              <span
                                style={{ animationDelay: '80ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                F
                              </span>
                              <span
                                style={{ animationDelay: '100ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                O
                              </span>
                              <span
                                style={{ animationDelay: '120ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                L
                              </span>
                              <span
                                style={{ animationDelay: '140ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                L
                              </span>

                              <span
                                style={{ animationDelay: '160ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                O
                              </span>
                              <span
                                style={{ animationDelay: '180ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                W
                              </span>
                              <span> </span>
                              <span
                                style={{ animationDelay: '200ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                U
                              </span>
                              <span
                                style={{ animationDelay: '220ms' }}
                                className={
                                  spanHovered ? 'animate showIt' : 'animate'
                                }
                              >
                                S
                              </span>
                            </h6>
                            {/* <p
                              onMouseEnter={() => {
                                this.animate('spanHovered');
                              }}
                            >
                              <a
                                href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKBzzwgxVBXTzptDkTDjgJSCsThNKTZPCzmDmQVQLWLPNwCWqhVpMLNGSfHGhFfWfLpgrpL'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                bree@morsadi.com
                              </a>
                            </p> */}
                            <span
                              onMouseEnter={() => {
                                this.animate('twitter');
                              }}
                              className={twitter ? 'animate showIt' : 'animate'}
                            >
                              {socialIcons[0]}
                            </span>
                            <span
                              onMouseEnter={() => {
                                this.animate('linkedIn');
                              }}
                              className={
                                linkedIn ? 'animate showIt' : 'animate'
                              }
                            >
                              {socialIcons[1]}
                            </span>
                          </div>
                        </Fade>
                      </div>
                    ) : null}
                  </CSSTransition>
                </div>
              </div>
              <p
                ref={ref => {
                  this.mor = ref;
                }}
                style={{
                  fontSize: '12px',
                  fontWeight: '100',
                  opacity: style.box,
                  transition: 'all .7s ease-in-out',
                  width: '90%',
                  margin: '10px auto',
                }}
              >
                MORSADI © 2019 BY MORSADI
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
}
