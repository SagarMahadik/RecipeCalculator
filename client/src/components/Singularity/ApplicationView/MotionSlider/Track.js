import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import useDimensions from 'react-use-dimensions';
import useWindowSize from '@rehooks/window-size';

import { Context } from './Context';

const Wrapper = styled.div`
  width: 100%;
`;

const StyledTrack = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  min-width: min-content;
  padding: ${props => props.padding}px;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const Track = ({ children, padding, velocity, transition }) => {
  const [trackRef, trackDimensions] = useDimensions();
  const windowDimensions = useWindowSize();
  const controls = useAnimation();

  const { state, dispatch } = useContext(Context);
  const negativeItems = state.items.map(
    item => item * -1 + trackDimensions.x || 0
  );

  function onDragEnd(event, info) {
    const offset = info.offset.x;
    const correctedVelocity = info.velocity.x * velocity;

    const direction = correctedVelocity < 0 || offset < 0 ? 1 : -1;
    const startPosition = info.point.x - offset;

    const endOffset =
      direction === 1
        ? Math.min(correctedVelocity, offset)
        : Math.max(correctedVelocity, offset);
    const endPosition = startPosition + endOffset;

    const closestPosition = negativeItems.reduce((prev, curr) =>
      Math.abs(curr - endPosition) < Math.abs(prev - endPosition) ? curr : prev
    );

    const activeSlide = negativeItems.indexOf(closestPosition);
    dispatch({ type: 'SET_ACTIVE_ITEM', activeItem: activeSlide });

    controls.start({
      x: Math.max(
        closestPosition,
        windowDimensions.innerWidth -
          trackDimensions.width -
          trackDimensions.x || 0
      ),
      transition
    });
  }

  return (
    <Wrapper>
      <StyledTrack
        ref={trackRef}
        padding={padding}
        animate={controls}
        drag="x"
        dragConstraints={{
          left:
            windowDimensions.innerWidth -
            trackDimensions.width -
            trackDimensions.x,
          right: 0 + trackDimensions.x
        }}
        onDragEnd={onDragEnd}
      >
        {children}
      </StyledTrack>
    </Wrapper>
  );
};

export default Track;
