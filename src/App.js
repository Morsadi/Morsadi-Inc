import React, { Component } from 'react';
import socialIcons from './components/socialIcons';
import Logo from './components/logo';
import Construction from './components/construction';
import Fade from 'react-reveal/Fade';
const CSSTransition = require('react-transition-group/CSSTransitionGroup');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      underConstruction: false,
      isActive: 'none',
      style: {
        mainLogo: 0,
        navLogo: 0,
        box: 0,
        windowHeight: window.innerHeight
      },
      spinner: '',
      spanHovered: false
    };
  }

  componentDidMount() {
    //show spinner first then hide it in 1.5s
    this.show = setTimeout(() => {
      this.setState({
        spinner: 'none',

        style: {
          ...this.state.style,
          mainLogo: '1'
        }
      });
    }, 1500);

    //show main logo after hiding the spinner
    this.hide = setTimeout(() => {
      this.setState({
        style: {
          ...this.state.style,
          mainLogo: '0'
        }
      });
    }, 2500);

    //show the content (box) and navbar after hiding the main logo
    this.all = setTimeout(() => {
      this.setState({
        style: {
          ...this.state.style,
          navLogo: 1,
          box: 1
        }
      });
    }, 4000);

    //create a resize event on window
    window.addEventListener('resize', this.changeWindowSize);
  }

  //stretch the content according to the window inner height
  changeWindowSize = () => {
    this.setState({
      style: {
        ...this.state.style,
        windowHeight: window.innerHeight
      }
    });
  };

  //set the active slide to the name of the clicked one
  activate = e => {
    let clickedEl = e.target.getAttribute('name');

    if (clickedEl) {
      this.setState({
        isActive: clickedEl
      });
    }
  };

  //close the tab by clicking on the X
  closeTab = e => {
    this.setState({
      isActive: null
    });
  };

  //animate the message before the email in every slide
  animate = () => {
    this.setState({
      spanHovered: true
    });

    this.hideIt = setTimeout(() => {
      this.setState({
        spanHovered: false
      });
    }, 1000);
  };
  //clear timeouts
  componentWillUnmount() {
    clearTimeout(this.hideIt);
    clearTimeout(this.show);
    clearTimeout(this.hide);
    clearTimeout(this.all);
  }

  render() {
    return (
      <div>
        <div className='App'>
          {/* if underConstruction is true*/}
          {this.state.underConstruction ? (
            // sow contrusction page.
            <Construction />
          ) : (
            //  If not, show the website
            <>
              <span style={{ display: this.state.spinner }} className='spinner'></span>
              {this.state.style.navLogo !== 1 ? (
                <div style={{ opacity: this.state.style.mainLogo }} className='mainLogo'>
                  {Logo[0]}
                </div>
              ) : null}

              <div style={{ opacity: this.state.style.navLogo }} className='navLogo'>
                {Logo[1]}
                <p style={{ fontSize: '3vw', fontWeight: '100', margin: '0' }}>
                  A creative story agency for brands that matter
                </p>
              </div>
              <div
                style={{
                  opacity: this.state.style.box,
                  height: this.state.style.windowHeight - 140
                }}
                className='box'
              >
                <div
                  name='slide1'
                  onClick={this.activate}
                  className={
                    this.state.isActive === 'slide1' ? 'active pic1 slides' : 'pic1 slides'
                  }
                >
                  {this.state.isActive !== 'slide1' ? <p className='title'>Who we are</p> : null}
                  <div
                    onClick={this.closeTab.bind(this)}
                    className='closeTab'
                    style={{
                      opacity: this.state.isActive === 'slide1' ? '1' : '0',
                      transform: this.state.isActive === 'slide1' ? 'rotate(0)' : 'rotate(-90deg)'
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
                  <CSSTransition
                    transitionName='showDesc'
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={300}
                  >
                    {this.state.isActive === 'slide1' ? (
                      <div className='resume parag1'>
                        <Fade bottom>
                          <h1>
                            Who
                            <br /> we are
                          </h1>
                          <div
                            style={{
                              marginBottom: window.innerWidth <= 812 ? '100px' : '200px'
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

                              width: '85%'
                            }}
                          >
                            <h5>We are storytellers</h5>
                            <p>
                              We create content that will capture your value, elevate your influence
                              and spread your stories.
                            </p>
                          </div>

                          <div
                            style={{
                              // marginTop: '80px',
                              marginBottom: window.innerWidth <= 812 ? '100px' : '200px',
                              float: 'right',

                              width: '85%'
                            }}
                          >
                            <h5>We help brands who help others</h5>
                            <p>
                              Our story solutions guide selected brands to look better, be better
                              and do more for their surrounding communities.
                            </p>
                          </div>

                          <div
                            style={{
                              marginBottom: '140px',

                              width: '85%',
                              float: 'left'
                            }}
                          >
                            <h5>We will write your legacy</h5>
                            <p>
                              Our mission is to embolden brands positioned to make a difference and
                              catalyze human connection through the power of story.
                            </p>
                          </div>

                          <div className='footer'>
                            <h6>
                              <span
                                style={{ animationDelay: '80ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                T
                              </span>
                              <span
                                style={{ animationDelay: '100ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                E
                              </span>
                              <span
                                style={{ animationDelay: '120ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                L
                              </span>
                              <span
                                style={{ animationDelay: '140ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                L
                              </span>
                              <span> </span>
                              <span
                                style={{ animationDelay: '160ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                M
                              </span>
                              <span
                                style={{ animationDelay: '180ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                E
                              </span>
                              <span> </span>
                              <span
                                style={{ animationDelay: '200ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                M
                              </span>
                              <span
                                style={{ animationDelay: '220ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                O
                              </span>
                              <span
                                style={{ animationDelay: '240ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                R
                              </span>
                              <span
                                style={{ animationDelay: '260ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                E
                              </span>
                            </h6>

                            <p onMouseEnter={this.animate}>
                              <a
                                href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKBzzwgxVBXTzptDkTDjgJSCsThNKTZPCzmDmQVQLWLPNwCWqhVpMLNGSfHGhFfWfLpgrpL'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                bree@morsadi.com
                              </a>
                            </p>

                            {socialIcons[0]}
                            {socialIcons[1]}
                          </div>
                        </Fade>
                      </div>
                    ) : null}
                  </CSSTransition>
                </div>
                <div
                  name='slide2'
                  onClick={this.activate}
                  className={
                    this.state.isActive === 'slide2' ? 'active pic2 slides' : 'pic2 slides'
                  }
                >
                  {this.state.isActive !== 'slide2' ? <p className='title'>What we do</p> : null}
                  <div
                    onClick={this.closeTab}
                    className='closeTab'
                    style={{
                      opacity: this.state.isActive === 'slide2' ? '1' : '0',
                      transform: this.state.isActive === 'slide2' ? 'rotate(0)' : 'rotate(-90deg)'
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

                  {/* Description Section part2 */}
                  <CSSTransition
                    transitionName='showDesc'
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={300}
                  >
                    {this.state.isActive === 'slide2' ? (
                      <div className='resume'>
                        <Fade bottom>
                          <h1 id='title1'>
                            What
                            <br /> we do
                          </h1>

                          <div
                            style={{
                              marginBottom: window.innerWidth <= 812 ? '100px' : '200px'
                            }}
                          >
                            <h5
                              onClick={this.showHeight}
                              ref={val => {
                                this.addHeight = val;
                              }}
                              style={{ textAlign: 'center' }}
                            >
                              We amplify brand impact through our creative design services
                            </h5>
                          </div>

                          <div
                            style={{
                              marginBottom: window.innerWidth <= 812 ? '100px' : '200px',

                              width: '85%'
                            }}
                          >
                            <h5>Story Design</h5>

                            <p>
                              The stories we create live at the intersection of humanity and the
                              heart. No matter the (blog, website, film, speech) medium, we want to
                              write your story.
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
                              float: 'right'
                            }}
                          >
                            <h5 style={{}}>Educational Design</h5>

                            <p>
                              We believe education can and will save the world. We provide
                              curriculum development and workshops to inspire curious, creative and
                              cultured mindsets.
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
                              float: 'left'
                            }}
                          >
                            <h5>Impact Design</h5>

                            <p style={{ width: '85%' }}>
                              Based on local to global insights, our strategic impact transcends
                              cultures, countries and communities. We are the architects of
                              platforms that matter.
                            </p>
                            <p style={{ fontSize: '30px' }}>
                              Advocacy and Social Justice
                              <br />
                              Awareness Campaigns <br />
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
                              float: 'right'
                            }}
                          >
                            <h5 style={{}}> Web Design</h5>

                            <p style={{}}>
                              This is where the visual meets the verbal. We design, develop and
                              maintain websites that communicate your value in and around the world.
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
                          <div className='footer'>
                            <h6>
                              <span
                                style={{ animationDelay: '80ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                G
                              </span>
                              <span
                                style={{ animationDelay: '100ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                E
                              </span>
                              <span
                                style={{ animationDelay: '120ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                T
                              </span>{' '}
                              <span> </span>
                              <span
                                style={{ animationDelay: '140ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                I
                              </span>
                              <span
                                style={{ animationDelay: '160ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                N
                              </span>
                              <span> </span>
                              <span
                                style={{ animationDelay: '180ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                T
                              </span>
                              <span
                                style={{ animationDelay: '200ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                O
                              </span>
                              <span
                                style={{ animationDelay: '220ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                U
                              </span>
                              <span
                                style={{ animationDelay: '240ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                C
                              </span>
                              <span
                                style={{ animationDelay: '260ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                H
                              </span>
                            </h6>
                            <p onMouseEnter={this.animate}>
                              <a
                                href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKBzzwgxVBXTzptDkTDjgJSCsThNKTZPCzmDmQVQLWLPNwCWqhVpMLNGSfHGhFfWfLpgrpL'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                bree@morsadi.com
                              </a>
                            </p>
                            {socialIcons[0]}
                            {socialIcons[1]}
                          </div>
                        </Fade>
                      </div>
                    ) : null}
                  </CSSTransition>
                </div>

                <div
                  name='slide3'
                  onClick={this.activate}
                  className={
                    this.state.isActive === 'slide3' ? 'active pic3 slides' : 'pic3 slides'
                  }
                >
                  {this.state.isActive !== 'slide3' ? <p className='title'>Work with us</p> : null}
                  <div
                    onClick={this.closeTab}
                    className='closeTab'
                    style={{
                      opacity: this.state.isActive === 'slide3' ? '1' : '0',
                      transform: this.state.isActive === 'slide3' ? 'rotate(0)' : 'rotate(-90deg)'
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
                    {this.state.isActive === 'slide3' ? (
                      <div className='resume'>
                        <Fade bottom>
                          <h1>
                            Work
                            <br />
                            with us
                          </h1>

                          <div
                            style={{
                              marginBottom: window.innerWidth <= 812 ? '100px' : '200px'
                            }}
                          >
                            <h5 style={{ textAlign: 'center' }}>
                              {/* We amplify brand impact through our creative design services. */}
                              We work with causes, creatives, communities and companies
                            </h5>
                          </div>

                          {/* wrapping the logos */}

                          <div className='logoSection' style={{}}>
                            <div>
                              <div>
                                <img
                                  alt='Plus Wonder'
                                  src={require('./assets/clients/+wonder.png')}
                                />
                              </div>
                              <div
                                style={
                                  {
                                    // textAlign: 'center'
                                  }
                                }
                              >
                                <img
                                  alt='TGS'
                                  className='TGS'
                                  src={require('./assets/clients/TGS.png')}
                                />
                              </div>
                              <div
                                style={
                                  {
                                    // textAlign: 'right'
                                  }
                                }
                              >
                                <img
                                  alt='FILMS'
                                  className='FILMS'
                                  src={require('./assets/clients/FILMS.png')}
                                />
                              </div>
                            </div>
                            <div>
                              <div
                                style={{ marginTop: window.innerWidth <= 600 ? '10px' : '-50px' }}
                              >
                                <img
                                  alt='Headrush'
                                  className='HEADRUSH'
                                  src={require('./assets/clients/HEADRUSH.png')}
                                />
                              </div>
                              <div
                                style={{
                                  // textAlign: 'center',
                                  marginTop: window.innerWidth <= 600 ? '10px' : '0px'
                                }}
                              >
                                <img
                                  alt='Acoustic Saturdays'
                                  className='Acoustic'
                                  src={require('./assets/clients/Acoustic.png')}
                                />
                              </div>
                              <div
                                style={{
                                  // textAlign: 'right',
                                  marginTop: window.innerWidth <= 600 ? '10px' : '50px'
                                }}
                              >
                                <img
                                  alt='LA'
                                  className='LA'
                                  style={{ width: '200px' }}
                                  src={require('./assets/clients/LA.png')}
                                />
                              </div>
                            </div>
                          </div>

                          <div
                            style={{
                              marginBottom: window.innerWidth <= 812 ? '100px' : '200px',

                              marginTop: window.innerWidth <= 812 ? '100px' : '200px'
                            }}
                          >
                            <h5
                              style={{
                                textAlign: 'center'
                                // fontSize: '24px',
                                // padding: '0 200px'
                              }}
                            >
                              We will nurture your strategy, storytelling and social impact as if
                              they were our own
                            </h5>
                          </div>
                          <div className='footer'>
                            <h6>
                              <span
                                style={{ animationDelay: '80ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                W
                              </span>
                              <span
                                style={{ animationDelay: '100ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                O
                              </span>
                              <span
                                style={{ animationDelay: '120ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                R
                              </span>
                              <span
                                style={{ animationDelay: '140ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                K
                              </span>
                              <span> </span>

                              <span
                                style={{ animationDelay: '160ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                W
                              </span>
                              <span
                                style={{ animationDelay: '180ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                I
                              </span>
                              <span
                                style={{ animationDelay: '200ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                T
                              </span>
                              <span
                                style={{ animationDelay: '220ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                H
                              </span>
                              <span> </span>
                              <span
                                style={{ animationDelay: '240ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                U
                              </span>
                              <span
                                style={{ animationDelay: '260ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                S
                              </span>
                            </h6>
                            <p onMouseEnter={this.animate}>
                              <a
                                href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKBzzwgxVBXTzptDkTDjgJSCsThNKTZPCzmDmQVQLWLPNwCWqhVpMLNGSfHGhFfWfLpgrpL'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                bree@morsadi.com
                              </a>
                            </p>
                            {socialIcons[0]}
                            {socialIcons[1]}
                          </div>
                        </Fade>
                      </div>
                    ) : null}
                  </CSSTransition>
                </div>

                <div
                  name='slide4'
                  onClick={this.activate}
                  className={
                    this.state.isActive === 'slide4' ? 'active pic4 slides' : 'pic4 slides'
                  }
                >
                  {this.state.isActive !== 'slide4' ? (
                    <p className='title'>Connect with us</p>
                  ) : null}
                  <div
                    onClick={this.closeTab}
                    className='closeTab'
                    style={{
                      opacity: this.state.isActive === 'slide4' ? '1' : '0',
                      transform: this.state.isActive === 'slide4' ? 'rotate(0)' : 'rotate(-90deg)'
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
                    {this.state.isActive === 'slide4' ? (
                      <div className='resume'>
                        <Fade bottom>
                          <h1>
                            Connect
                            <br />
                            with us
                          </h1>

                          <div
                            style={{
                              paddingBottom: window.innerWidth <= 812 ? '100px' : '200px'
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
                              flexDirection: window.innerWidth <= 812 ? 'column' : 'row'
                            }}
                          >
                            <div>
                              <h5>Bree</h5>
                              <p>
                                CEO & Story Strategist
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
                                COO & Lead Developer
                                <br />
                                badr@morsadi.com
                              </p>
                            </div>
                          </div>

                          <div
                            style={{
                              paddingBottom: '200px'
                            }}
                          >
                            <h5 style={{ textAlign: 'center' }}>
                              Connect with us and be a friend of Morsadi for life
                            </h5>
                          </div>
                          <div className='footer'>
                            <h6>
                              <span
                                style={{ animationDelay: '80ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                F
                              </span>
                              <span
                                style={{ animationDelay: '100ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                O
                              </span>
                              <span
                                style={{ animationDelay: '120ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                L
                              </span>
                              <span
                                style={{ animationDelay: '140ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                L
                              </span>

                              <span
                                style={{ animationDelay: '160ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                O
                              </span>
                              <span
                                style={{ animationDelay: '180ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                W
                              </span>
                              <span> </span>
                              <span
                                style={{ animationDelay: '200ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                U
                              </span>
                              <span
                                style={{ animationDelay: '220ms' }}
                                className={this.state.spanHovered ? 'animate showIt' : 'animate'}
                              >
                                S
                              </span>
                            </h6>
                            <p onMouseEnter={this.animate}>
                              <a
                                href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKBzzwgxVBXTzptDkTDjgJSCsThNKTZPCzmDmQVQLWLPNwCWqhVpMLNGSfHGhFfWfLpgrpL'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                bree@morsadi.com
                              </a>
                            </p>
                            {socialIcons[0]}
                            {socialIcons[1]}
                          </div>
                        </Fade>
                      </div>
                    ) : null}
                  </CSSTransition>
                </div>
              </div>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: '100',
                  opacity: this.state.style.box,
                  transition: 'all .7s ease-in-out',
                  width: '90%',
                  margin: '10px auto'
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
