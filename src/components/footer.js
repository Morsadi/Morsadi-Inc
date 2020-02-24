import React from 'react';
import socialIcons from './socialIcons';

const Footer = ({ spanHovered, animate, twitter, linkedIn, isActive }) => {
  let msg = '';
  let count = 60;

  //generate the msg according to the active slide
  (function() {
    if (isActive === 'slide1') {
      msg = 'TELL ME MORE'.split('');
    } else if (isActive === 'slide2') {
      msg = 'GET IN TOUCH'.split('');
    } else {
      msg = 'WORK WITH US'.split('');
    }
  })();

  return (
    <div className='footer'>
      <h6>
        {/* loop through the active footer message. 
            Split by letters.
            Render each letter with a different delay speed to create th roll effect.
        */}
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

      <p
        onMouseEnter={() => {
          animate('spanHovered');
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
  );
};

export default Footer;
