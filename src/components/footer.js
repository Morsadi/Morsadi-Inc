import React from 'react';
import socialIcons from './socialIcons';

export default function Footer({
  spanHovered,
  animate,
  linkedIn,
  twitter,
  message,
}) {
  let counter = 80;
  let cluster = [];

  // loop through the passed message and push each letter to the cluster
  // on render, loop through cluster and add each letter to a span with a different animationDelay
  (function () {
    const msg = message.split('');
    msg.forEach((letter) => {
      cluster.push({
        letter,
        counter,
      });
      counter += 20;
    });
  })();

  return (
    <div className='footer'>
      <h6>
        {cluster.map((val) => (
          <span
            key={val.letter}
            style={{ animationDelay: `${val.counter}ms` }}
            className={spanHovered ? 'animate showIt' : 'animate'}
          >
            {val.letter !== ' ' ? val.letter : ' '}
          </span>
        ))}
      </h6>

      <p
        onMouseEnter={() => {
          animate('spanHovered');
        }}
      >
        <a
          href='https://mail.google.com/mail/u/2/?ogbl#inbox?compose=GTvVlcSBmllmkkljrvhWrzPvVrGlXZmJDrCXvJhHRrMrLVtDzbrSSXZxsWFgHHMcdRbmzmkVvwrxB'
          target='_blank'
          rel='noopener noreferrer'
        >
          info@morsadi.com
        </a>
      </p>
      <a
        href='https://twitter.com/bmorsadi'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span
          onMouseEnter={() => {
            animate('twitter');
          }}
          className={twitter ? 'animate showIt' : 'animate'}
        >
          {socialIcons[0]}
        </span>
      </a>
      <a
        href='https://www.linkedin.com/in/breannamorsadi/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span
          onMouseEnter={() => {
            animate('linkedIn');
          }}
          className={linkedIn ? 'animate showIt' : 'animate'}
        >
          {socialIcons[1]}
        </span>
      </a>
    </div>
  );
}
