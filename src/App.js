// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import socialIcons from './components/socialIcons';
import Logo from './components/logo';
import Construction from './components/construction';
import ClientDisplay from './components/clientDisplay';
import Footer from './components/footer';
const resume = require('./assets/prices.pdf');

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
        windowHeight: window.innerHeight,
      },
      spinner: '',
      spanHovered: false,
      twitter: false,
      twitter1: false,
      twitter2: false,
      twitter3: false,
      linkedIn3: false,
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

    // Redirect to the Prices pdf
    window.location.pathname === '/prices' && window.location.replace(`${window.location.origin}${resume}`)
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
  activate = (e) => {
    const clickedEl = e.target.getAttribute('name');

    if (clickedEl) {
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
  animate = (text) => {
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
      twitter1,
      twitter2,
      twitter3,
      linkedIn3,
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
            <React.Fragment>
              <span style={{ display: spinner }} className='spinner' />
              {style.navLogo !== 1 ? (
                <div style={{ opacity: style.mainLogo }} className='mainLogo'>
                  {Logo[0]}
                </div>
              ) : null}

              <div style={{ opacity: style.navLogo }} className='navLogo'>
                {window.innerWidth <= 812 ? Logo[3] : Logo[2]}
              </div>
              <div
                style={{
                  opacity: style.box,
                  // change height of box according to the copyright height
                  height: style.windowHeight - checkCopyright,
                }}
                className='box'
              >
                <div
                  role='button'
                  tabIndex={0}
                  name='slide1'
                  onClick={this.activate}
                  className={
                    isActive === 'slide1' ? 'active pic1 slides' : 'pic1 slides'
                  }
                >
                  {isActive !== 'slide1' ? (
                    <p className='title'>Who we are</p>
                  ) : null}
                  <div
                    role='button'
                    tabIndex={-1}
                    onClick={this.closeTab.bind(this)}
                    className='closeTab'
                    style={{
                      opacity: isActive === 'slide1' ? '1' : '0',
                      transform:
                        isActive === 'slide1' ? 'rotate(0)' : 'rotate(-90deg)',
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
                    {isActive === 'slide1' ? (
                      <div className='content parag1'>
                        <Fade bottom>
                          <h1>
                            Who
                            <br />
                            we are
                          </h1>
                          <div
                            style={{
                              marginBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',
                            }}
                          >
                            <h5 style={{ textAlign: 'center' }}>
                              A creative agency leading radical change in
                              education
                            </h5>
                          </div>
                          <div
                            className='paragraph1'
                            style={{
                              marginBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',

                              width: '85%',
                            }}
                          >
                            <h5>We are educators</h5>
                            <p>
                              Designed for educators by educators, we
                              personalize our strategy to align with your
                              vision.
                            </p>
                          </div>

                          <div
                            style={{
                              // marginTop: '80px',
                              marginBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',
                              float: 'right',

                              width: '85%',
                            }}
                          >
                            <h5>We elevate your impact</h5>
                            <p>
                              Our consultants guide learning communities to
                              be better and do more for their surrounding
                              communities.
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
                              Our mission is to embolden educational leaders
                              positioned to make a difference and catalyze
                              systems change through the power of<br/>student-centered learning.
                            </p>
                          </div>

                          </Fade>
                          <Footer
                            animate={this.animate}
                            spanHovered={spanHovered}
                            twitter={twitter}
                            linkedIn={linkedIn}
                            message='TELL US MORE'
                          />
                      </div>
                    ) : null}
                  </CSSTransition>
                </div>
                <div
                  role='button'
                  tabIndex='-2'
                  name='slide2'
                  onClick={this.activate}
                  className={
                    isActive === 'slide2' ? 'active pic2 slides' : 'pic2 slides'
                  }
                >
                  {isActive !== 'slide2' ? (
                    <p className='title'>What we do</p>
                  ) : null}
                  <div
                    role='button'
                    tabIndex='-3'
                    onClick={this.closeTab}
                    className='closeTab'
                    style={{
                      opacity: isActive === 'slide2' ? '1' : '0',
                      transform:
                        isActive === 'slide2' ? 'rotate(0)' : 'rotate(-90deg)',
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
                    {isActive === 'slide2' ? (
                      <div className='content'>
                        <Fade bottom>
                          <h1 id='title1'>
                            What
                            <br />
                            we do
                          </h1>

                          <div
                            style={{
                              marginBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',
                            }}
                          >
                            <h5
                              ref={(val) => {
                                this.addHeight = val;
                              }}
                              style={{ textAlign: 'center' }}
                            >
                              We amplify educational impact through our creative
                              design services
                            </h5>
                          </div>

                          <div
                            style={{
                              marginBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',

                              width: '85%',
                            }}
                          >
                            <h5>Educational Design</h5>

                            <p>
                              We believe education can and will save the world.
                              We provide workshops and lead dialogues to inspire
                              curious, creative and cultured mindsets.
                            </p>
                            <p style={{ fontSize: '30px' }}>
                              Deschooling & Ed Disruption
                              <br />
                              Ed Ecosystems of Now
                              <br />
                              Learning Liberated PBL in Practice
                              <br />
                              Inside Out Ed
                              <br />
                              Agile Mindsets and The Design Cycle
                              <br />
                            </p>
                          </div>
                          <div
                            style={{
                              marginBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',

                              width: '85%',
                              float: 'right',
                            }}
                          >
                            <h5 style={{}}>Curriculum Design</h5>

                            <p>
                              We know that knowledge is the most important
                              resource of advanced societies. We write
                              curriculum for students to learn, unlearn and
                              relearn what is of value to them.
                            </p>
                            <p style={{ fontSize: '30px' }}>
                              Project, Problem and Passion-Based Learning
                              <br />
                              Remote, Blended, and Onsite Learning
                              <br />
                              Place and Service-Based Learning
                              <br />
                              Social-Emotional and Mindful Learning
                              <br />
                              Homeschool Learning
                              <br />
                            </p>
                          </div>

                          <div
                            style={{
                              marginBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',

                              width: '85%',
                              float: 'left',
                            }}
                          >
                            <h5>Impact Design</h5>

                            <p>
                              Based on local to global insights, our strategic
                              impact transcends cultures, countries and
                              communities. We are the architects of platforms
                              that matter.
                            </p>
                            <p style={{ fontSize: '30px' }}>
                              Community Un-Management
                              <br />
                              Inclusion, Advocacy and Social Justice
                              <br />
                              Regeneration
                              <br />
                              Me, We, World
                              <br />
                              Art for Change
                              <br />
                            </p>
                          </div>

                          <div
                            style={{
                              marginBottom:
                                window.innerWidth <= 812 ? '100px' : '200px',

                              width: '85%',
                              float: 'right',
                            }}
                          >
                            <h5 style={{}}>Story Design</h5>

                            <p style={{}}>
                              The stories we create live at the intersection of
                              humanity and the heart. No matter the (blog,
                              website, film, speech) medium, we want to write
                              your story.
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
                              Thought Leadership
                              <br />
                            </p>
                          </div>

                          </Fade>
                          <Footer
                            animate={this.animate}
                            spanHovered={spanHovered}
                            twitter={twitter}
                            linkedIn={linkedIn}
                            message='GET IN TOUCH'
                          />
                      </div>
                    ) : null}
                  </CSSTransition>
                </div>

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
                      <div className='content'>
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
                              We work with causes, creatives, communities and
                              companies
                            </h5>
                          </div>

                          {/* wrapping the logos */}

                          <ClientDisplay />
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
                              We will nurture your school,<br />strategy and social
                              impact as if they were our own
                            </h5>
                          </div>
                          </Fade>
                          <Footer
                            animate={this.animate}
                            spanHovered={spanHovered}
                            twitter={twitter}
                            linkedIn={linkedIn}
                            message='WORK WITH US'
                          />
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
                      <div className='content'>
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
                            }}
                          >
                            <div>
                              <h5>Bree</h5>
                              <p>
                                Educational Design
                                <br />
                                Curriculum Design
                                <br />
                                Impact Design
                                <br />
                                Story Design
                              </p>
                              <div>
                                <a
                                  style={{ margin: '0 8px' }}
                                  href='https://twitter.com/breannamorsadi/'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <span
                                    onMouseEnter={() => {
                                      this.animate('twitter');
                                    }}
                                    className={
                                      twitter ? 'animate showIt' : 'animate'
                                    }
                                  >
                                    {socialIcons[0]}
                                  </span>
                                </a>
                                <a
                                  style={{ margin: '0 8px' }}
                                  href='https://www.linkedin.com/in/breannamorsadi/'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
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
                                </a>
                              </div>
                              <br />
                              <br />
                              <br />
                              <br />
                              <h5>Nick</h5>
                              <p>
                                Educational Design
                                <br />
                                Curriculum Design
                                <br />
                                Impact Design
                              </p>
                              <div>
                                <a
                                  style={{ margin: '0 8px' }}
                                  href='https://twitter.com/maats_defenders'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <span
                                    onMouseEnter={() => {
                                      this.animate('twitter3');
                                    }}
                                    className={
                                      twitter3 ? 'animate showIt' : 'animate'
                                    }
                                  >
                                    {socialIcons[0]}
                                  </span>
                                </a>
                                <a
                                  style={{ margin: '0 8px' }}
                                  href='https://www.linkedin.com/in/nicholasjmartino/'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <span
                                    onMouseEnter={() => {
                                      this.animate('linkedIn3');
                                    }}
                                    className={
                                      linkedIn3 ? 'animate showIt' : 'animate'
                                    }
                                  >
                                    {socialIcons[1]}
                                  </span>
                                </a>
                              </div>
                              <br />
                              <br />
                              <br />
                              <br />
                              <h5>Chloë</h5>
                              <p>
                                Story Design
                                <br />
                                Educational Design
                              </p>
                              <a
                                href='https://www.linkedin.com/in/chloe-alicia-fraser/'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                <span
                                  onMouseEnter={() => {
                                    this.animate('twitter1');
                                  }}
                                  className={
                                    twitter1 ? 'animate showIt' : 'animate'
                                  }
                                >
                                  {socialIcons[1]}
                                </span>
                              </a>
                              <br />
                              <br />
                              <br />
                              <br />
                              <h5>Badr</h5>
                              <p>
                                Web Design
                                <br />
                                Impact Design
                              </p>
                              <a
                                href='https://www.linkedin.com/in/bmorsadi'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                <span
                                  onMouseEnter={() => {
                                    this.animate('twitter2');
                                  }}
                                  className={
                                    twitter2 ? 'animate showIt' : 'animate'
                                  }
                                >
                                  {socialIcons[1]}
                                </span>
                              </a>
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
                          </Fade>
                          <Footer
                            animate={this.animate}
                            spanHovered={spanHovered}
                            twitter={twitter}
                            linkedIn={linkedIn}
                            message='CONNECT WITH US'
                          />
                      </div>
                    ) : null}
                  </CSSTransition>
                </div>
              </div>
              <p
                ref={(ref) => {
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
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
