import React from 'react';

import { ContextProvider } from './Context';
import Track from './Track';
import Item from './Item';

const MotionSlider = ({ children, padding, gap, velocity, transition }) => {
  return (
    <ContextProvider>
      <Track padding={padding} velocity={velocity} transition={transition}>
        {children.map((child, i) => (
          <Item key={i} gap={gap} padding={padding}>
            {child}
          </Item>
        ))}
      </Track>
    </ContextProvider>
  );
};

MotionSlider.defaultProps = {
  padding: 20,
  gap: 30,
  velocity: 0.5,
  transition: { type: 'spring', damping: 800 }
};

export default MotionSlider;
