import React, { useRef, useEffect } from 'react';
import Logo from 'components/Singularity/ApplicationView/Logo';
import {
  LeftAlignedRowContainer,
  CenterAlignedColumnContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';
import { FormHeadingText } from 'styles/Singularity/Style1.0/TextStyles';
import { FullWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import { gsap } from 'gsap';
import animation from 'styles/Singularity/GSAPAnimations';

const FormHeadings = React.forwardRef(props => {
  let headingRef1 = useRef();
  let headingRef2 = useRef();
  useEffect(() => {
    animation.SlideInleft(headingRef1.current);
    animation.SlideInleftSolwer(headingRef2.current);
  }, []);

  return (
    <>
      <CenterAlignedColumnContainer>
        <LeftAlignedRowContainer>
          <Logo ref={headingRef2} />
          <FormHeadingText ref={headingRef1}>{props.heading}</FormHeadingText>
        </LeftAlignedRowContainer>
        <FullWidthDivider />
      </CenterAlignedColumnContainer>
    </>
  );
});

export default FormHeadings;
