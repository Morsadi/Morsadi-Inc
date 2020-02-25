import React from 'react';

const CloseTab = ({ closeTab, isActive, slide }) => (
  <svg
    onClick={closeTab}
    className='closeTab'
    style={{
      opacity: isActive === slide ? '1' : '0',
      transform: isActive === slide ? 'rotate(0)' : 'rotate(-90deg)',
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
);

export default CloseTab;
