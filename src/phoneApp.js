import React, { Component } from 'react';
import Clients from './assets/clients';
import socialIcons from './assets/socialIcons';
import Logo from './assets/logo';
const CSSTransition = require('react-transition-group/CSSTransitionGroup');

export default class phoneApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: 'none',
      style: {
        mainLogo: 0,
        navLogo: 0,
        box: 0
      },
      spinner: ''
    };
  }

  componentDidMount() {
    this.show = setTimeout(() => {
      this.setState({
        spinner: 'none',

        style: {
          ...this.state.style,
          mainLogo: '1'
        }
      });
    }, 1500);

    this.hide = setTimeout(() => {
      this.setState({
        style: {
          ...this.state.style,
          mainLogo: '0'
        }
      });
    }, 2500);

    this.all = setTimeout(() => {
      this.setState({
        style: {
          ...this.state.style,
          navLogo: 1,
          box: 1
        }
      });
    }, 4000);
  }

  activate = e => {
    let clickedEl = e.target.getAttribute('name');

    if (clickedEl) {
      this.setState({
        isActive: clickedEl
      });
    }
  };

  closeTab = e => {
    this.setState({
      isActive: null
    });
  };

  animateDivs = e => {
    let _currentTab = e.target.getAttribute('name');

    //getting sub divs and store their refs in state
    let children = this[_currentTab].childNodes;
    for (let i in children) {
      if (children[i].nodeName === 'DIV') {
        let currentRef = children[i].getAttribute('name');

        let val = 'val' + i++;

        this.setState({
          [val]: currentRef
        });
      }
    }

    let scrollPosition = this[_currentTab].scrollTop; // parent's scroll position

    //create pattern to apply on each paragraph
    this.fadeUp = (elem, num) => {
      //clone argument
      let _elem = elem;

      let target = this[_elem]; //get element on DOM
      let targetPosition = target.offsetTop - (target.scrollHeight + num); // Element's position in the scrollable div

      //if target is on view, fadeUp
      if (scrollPosition >= targetPosition) {
        target.style.opacity = 1;
        target.style.transform = 'translatey(0px)';
      } else {
        target.style.opacity = 0;
        target.style.transform = 'translatey(40px)';
      }
    };

    //Check if the paragraph is rendered first, then apply the pattern
    if (this[this.state.val1]) {
      this.fadeUp(this.state.val1, 140);
    }
    if (this[this.state.val2]) {
      this.fadeUp(this.state.val2, 100);
    }
    if (this[this.state.val3]) {
      this.fadeUp(this.state.val3, 200);
    }
    if (this[this.state.val4]) {
      this.fadeUp(this.state.val4, 100);
    }
    if (this[this.state.val5]) {
      this.fadeUp(this.state.val5, 100);
    }
  };

  render() {
    return (
      <div>
        <div className='phoneApp'>
          <span style={{ display: this.state.spinner }} className='spinner'></span>
          {this.state.style.navLogo !== 1 ? (
            <div style={{ opacity: this.state.style.mainLogo }} className='mainLogo'>
              {Logo[0]}
            </div>
          ) : null}

          

          <div style={{ opacity: this.state.style.box }} className='box'>
          <div style={{ opacity: this.state.style.navLogo }} className='navLogo'>
            {Logo[1]}
            <p style={{ fontSize: '46px', fontWeight: '100', margin: '0' }}>
              A creative story agency for brands that matter
            </p>
          </div>
            <div
              name='slide1'
              onClick={this.activate}
              className={this.state.isActive === 'slide1' ? 'active pic1 slides' : 'pic1 slides'}
            >
              {/* <div  style={{width: '100%', height:'100%', position:'absolute', filter: this.state.isActive ==='slide1'?'blur(2px)':'blur(0px)'}}  name='slide1' className='pic1' onClick={this.activate}></div> */}

              <span className='index'>1</span>
              <p className='title'>Who We Are</p>
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
                  <div
                    name='tab1'
                    onScroll={this.animateDivs}
                    className='resume parag1'
                    ref={val => {
                      this.tab1 = val;
                    }}
                  >
                    <h1>
                      {' '}
                      Who
                      <br /> we are
                    </h1>
                    <div
                      name='tab1div1'
                      ref={val => {
                        this.tab1div1 = val;
                      }}
                      className='paragraph1'
                      style={{
                        marginBottom: '140px',
                        opacity: '0',
                        transform: 'translatey(40px)',
                        width: '50%'
                      }}
                    >
                      <h5>We help brands who help others</h5>
                      <p>
                        {' '}
                        Our story solutions guide selected brands to look better, be better and do
                        more for their surrounding communities.
                      </p>
                    </div>

                    <div
                      name='tab1div2'
                      ref={val => {
                        this.tab1div2 = val;
                      }}
                      style={{
                        marginTop: '80px',
                        marginBottom: '200px',
                        float: 'right',
                        transform: 'translatey(40px)',
                        width: '50%',
                        opacity: '0'
                      }}
                    >
                      <h5>We work with causes, creatives, communities and companies</h5>
                      <p>
                        In support of clients with exceptional missions, our team of passionate
                        story designers will nurture your strategy, storytelling and social impact
                        as if they were our own.
                      </p>
                    </div>

                    {/* <div ref={(val)=>{this.tab1div3 = val}} style={{marginTop: '80px', marginBottom: '140px', float: 'left', transform: 'translatey(40px)'}}>
                                    <h5>Morsadi will write your legacy</h5>
                                    <p>We create content that will capture your value, elevate your influence and spread your stories.</p></div> */}
                  </div>
                ) : null}
              </CSSTransition>
            </div>
            <div
              name='slide2'
              onClick={this.activate}
              className={this.state.isActive === 'slide2' ? 'active pic2 slides' : 'pic2 slides'}
            >
              <span className='index'>2</span>
              <p className='title'>What We Do</p>
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
                  <div
                    name='tab2'
                    onScroll={this.animateDivs}
                    className='resume'
                    ref={val => {
                      this.tab2 = val;
                    }}
                  >
                    <h1>
                      {' '}
                      What
                      <br /> we Do
                    </h1>

                    <div
                      name='tab2div1'
                      ref={val => {
                        this.tab2div1 = val;
                      }}
                      style={{
                        marginBottom: '200px',
                        opacity: '0',
                        transform: 'translatey(40px)'
                      }}
                    >
                      <h5 style={{ textAlign: 'center' }}>
                        Our mission is to embolden brands positioned to make a difference and
                        catalyze human connection through the power of story.
                      </h5>
                    </div>

                    <div
                      name='tab2div2'
                      ref={val => {
                        this.tab2div2 = val;
                      }}
                      style={{
                        marginBottom: '200px',
                        opacity: '0',
                        transform: 'translatey(40px)',
                        width: '50%'
                      }}
                    >
                      <h5>Story Design</h5>

                      <p>
                        The stories we create live at the intersection of humanity and the heart. No
                        matter the (blog, website, film, speech) medium, we want to write your
                        story.
                      </p>
                      <p style={{ fontSize: '20px' }}>
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
                      name='tab2div3'
                      ref={val => {
                        this.tab2div3 = val;
                      }}
                      style={{
                        marginBottom: '200px',
                        opacity: '0',
                        width: '50%',
                        float: 'right'
                      }}
                    >
                      <h5 style={{}}>Educational Design</h5>

                      <p>
                        We believe education can and will save the world. We provide curriculum
                        development and workshops to inspire curious, creative and cultured
                        mindsets.
                      </p>
                      <p style={{ fontSize: '20px' }}>
                        Deschooling & Disruption
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
                      name='tab2div4'
                      ref={val => {
                        this.tab2div4 = val;
                      }}
                      style={{
                        marginBottom: '200px',
                        opacity: '0',
                        transform: 'translatey(40px)',
                        width: '60%',
                        float: 'left'
                      }}
                    >
                      <h5>Impact Design</h5>

                      <p style={{ width: '85%' }}>
                        This is where the visual meets the verbal. We design, develop and maintain
                        websites that communicate your value in and around the world.
                      </p>
                      <p style={{ fontSize: '20px' }}>
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
                      name='tab2div5'
                      ref={val => {
                        this.tab2div5 = val;
                      }}
                      style={{
                        marginBottom: '200px',
                        opacity: '0',
                        width: '50%',
                        float: 'right'
                      }}
                    >
                      <h5 style={{}}> Web Design</h5>

                      <p style={{}}>
                        This is where the visual meets the verbal. We design, develop and maintain
                        websites that communicate your value in and around the world.
                      </p>
                      <p style={{ fontSize: '20px' }}>
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
                  </div>
                ) : null}
              </CSSTransition>
            </div>

            <div
              name='slide3'
              onClick={this.activate}
              className={this.state.isActive === 'slide3' ? 'active pic3 slides' : 'pic3 slides'}
            >
              <span className='index'>3</span>
              <p className='title'>How We Do</p>
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
                  <div
                    name='tab3'
                    onScroll={this.animateDivs}
                    className='resume'
                    ref={val => {
                      this.tab3 = val;
                    }}
                  >
                    <h1>
                      How
                      <br /> we Do
                    </h1>

                    <div
                      name='tab3div1'
                      ref={val => {
                        this.tab3div1 = val;
                      }}
                      style={{
                        marginBottom: '200px',
                        opacity: '0',
                        transform: 'translatey(40px)'
                      }}
                    >
                      <h5 style={{ textAlign: 'center' }}>Morsadi will write your legacy.</h5>

                      <p style={{ textAlign: 'center', width: '460px', margin: '23px auto ' }}>
                        We create content that will capture your value, elevate your influence and
                        spread your stories.{' '}
                      </p>
                    </div>

                    {/* wrapping the logos */}

                    <div
                      className='logoSection'
                      name='tab3div2'
                      ref={val => {
                        this.tab3div2 = val;
                      }}
                      style={{
                        opacity: '0'
                      }}
                    >
                      <div>{Clients[5]}</div>
                      <div style={{ textAlign: 'center' }}>{Clients[0]}</div>
                      <div style={{ textAlign: 'right' }}>{Clients[2]}</div>
                      <div style={{ marginTop: '40px' }}>{Clients[4]}</div>
                      <div style={{ textAlign: 'center', marginTop: '40px' }}>{Clients[3]}</div>
                      <div style={{ textAlign: 'right', marginTop: '40px' }}>{Clients[1]}</div>
                    </div>

                    <div
                      name='tab3div4'
                      ref={val => {
                        this.tab3div4 = val;
                      }}
                      style={{
                        marginBottom: '400px',
                        opacity: '0',
                        marginTop: '200px',
                        transform: 'translatey(40px)'
                      }}
                    >
                      <h5
                        style={{
                          textAlign: 'center'
                          // fontSize: '24px',
                          // padding: '0 200px'
                        }}
                      >
                        We know the power of human connection. Work with us and be a friend of
                        Morsadi for life.
                      </h5>
                    </div>
                  </div>
                ) : null}
              </CSSTransition>
            </div>

            <div
              name='slide4'
              onClick={this.activate}
              className={this.state.isActive === 'slide4' ? 'active pic4 slides' : 'pic4 slides'}
            >
              <span className='index'>4</span>

              <p className='title'>Work With Us</p>
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
                  <div
                    name='tab4'
                    onScroll={this.animateDivs}
                    className='resume'
                    ref={val => {
                      this.tab4 = val;
                    }}
                  >
                    <h1>
                      {' '}
                      Contact
                      <br /> Us
                    </h1>

                    <div
                      name='tab4div1'
                      ref={val => {
                        this.tab4div1 = val;
                      }}
                      style={{
                        paddingBottom: '140px',
                        opacity: '0',
                        transform: 'translatey(40px)'
                      }}
                    >
                      <h5 style={{ textAlign: 'center' }}>
                        We are currently accepting new client projects.
                        <br />
                        <p style={{ textAlign: 'center' }}>
                          {' '}
                          Think we might help? We'd love to hear from you
                        </p>
                      </h5>
                    </div>

                    <div
                      name='tab4div2'
                      ref={val => {
                        this.tab4div2 = val;
                      }}
                      style={{
                        paddingBottom: '200px',
                        opacity: '0',
                        transform: 'translatey(40px)',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <h5>Bree</h5>

                        <p>
                          CEO & Story Strategist
                          <br />
                          bree@morsadi.com
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
                      className='socialIcons'
                      style={{ textAlign: 'center', paddingBottom: '40px' }}
                    >
                      {socialIcons[0]}
                      {socialIcons[1]}
                    </div>
                  </div>
                ) : null}
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
