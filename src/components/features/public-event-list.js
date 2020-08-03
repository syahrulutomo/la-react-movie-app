import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import nextIcon from '@/assets/images/keyboard_arrow_right-black-18dp.svg';
import prevIcon from '@/assets/images/keyboard_arrow_left-black-18dp.svg';
import { SliderButton } from './slider-button';

export const PublicEventList = memo((props) => {
  const {
    events, title,
  } = props;

  const [step, setStep] = useState(0);

  const handleClick = (type) => {
    if (type === 'next' && step + 4 < events.length) {
      setStep(step + 1);
    } else if (type === 'prev' && step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="app-event-list">
      {
        step > 0
          ? <SliderButton type="prev" img={prevIcon} alt="prev icon" handleClick={() => handleClick('prev')} />
          : ''
      }
      <div style={{ overflow: 'hidden' }}>
        <p className="app-event-list--title">
          { title }
        </p>
        <div className="app-event-list--content" style={{ translate: 'transform 1s ease', transform: `translateX(${step * -270}px)` }}>
          <ul>
            {events}
          </ul>
        </div>
      </div>
      {
        step + 4 < events.length
          ? <SliderButton type="next" img={nextIcon} alt="prev icon" handleClick={() => handleClick('next')} />
          : ''
      }

    </div>
  );
});

PublicEventList.propTypes = {
  events: PropTypes.array,
  title: PropTypes.string,
};
