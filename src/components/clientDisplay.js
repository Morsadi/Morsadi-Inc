import React from 'react';

export default function ClientDisplay() {
  return (
    <div className='logoSection'>
      <div>
        <a rel='noopener noreferrer' href='https://pluswonder.org/'>
          <img
            alt='Plus Wonder'
            className='plusWonder'
            src={require('../assets/clients/+wonder.png')}
          />
        </a>
      </div>
      <div>
        <a rel='noopener noreferrer' href='https://headrushlearning.com'>
          <img
            alt='Headrush'
            className='HEADRUSH'
            src={require('../assets/clients/HEADRUSH.png')}
          />
        </a>
      </div>
      <div>
        <a rel='noopener noreferrer' href='https://udla.edu.ec'>
          <img
            alt='UDLA'
            className='UDLA'
            src={require('../assets/clients/UDLA.png')}
          />
        </a>
      </div>
      <div>
        <a rel='noopener noreferrer' href='https://udla.edu.ec'>
          <img
            alt='creafted'
            className='crafted'
            src={require('../assets/clients/CraftED.png')}
          />
        </a>
      </div>
      <div>
        <a rel='noopener noreferrer' href='http://thinkglobalschool.org'>
          <img
            alt='TGS'
            className='TGS'
            src={require('../assets/clients/TGS.png')}
          />
        </a>
      </div>
      <div>
        <a rel='noopener noreferrer' href='http://acousticsaturdays.com'>
          <img
            alt='Acoustic Saturdays'
            className='Acoustic'
            src={require('../assets/clients/Acoustic.png')}
          />
        </a>
      </div>
      <div>
        <a rel='noopener noreferrer' href='https://www.facebook.com/519films/'>
          <img
            alt='FILMS'
            className='FILMS'
            src={require('../assets/clients/FILMS.png')}
          />
        </a>
      </div>

      <div>
        <a rel='noopener noreferrer' href='https://womensmarchla.org/'>
          <img
            alt='LA'
            className='LA'
            style={{ width: '200px' }}
            src={require('../assets/clients/LA.png')}
          />
        </a>
      </div>
    </div>
  );
}
