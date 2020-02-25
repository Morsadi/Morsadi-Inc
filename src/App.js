// eslint-disable-next-line no-unused-vars
import React, { Component, createRef } from 'react';
import Logo from './components/logo';
import Construction from './components/construction';
import Tab1 from './components/tabs/tab1';
import Tab2 from './components/tabs/tab2';
import Tab3 from './components/tabs/tab3';
import Tab4 from './components/tabs/tab4';

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
              <header>
                <div style={{ opacity: style.navLogo }} className='navLogo'>
                  {window.innerWidth <= 667 ? Logo[3] : Logo[2]}
                </div>
              </header>
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
                <Tab3
                  activate={this.activate}
                  animate={this.animate}
                  closeTab={this.closeTab}
                  isActive={isActive}
                  twitter={twitter}
                  linkedIn={linkedIn}
                  spanHovered={spanHovered}
                />
                <Tab4
                  activate={this.activate}
                  animate={this.animate}
                  closeTab={this.closeTab}
                  isActive={isActive}
                  twitter={twitter}
                  linkedIn={linkedIn}
                  spanHovered={spanHovered}
                />
              </div>

              <footer>
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
              </footer>
            </>
          )}
        </div>
      </div>
    );
  }
}
