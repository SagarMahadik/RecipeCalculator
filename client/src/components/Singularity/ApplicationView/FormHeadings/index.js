import React, { useRef, useEffect } from 'react';
import Logo from 'components/Singularity/ApplicationView/Logo';
import {
  LeftAlignedRowContainer,
  CenterAlignedColumnContainer,
  FormHeadingsContainer
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
      <FormHeadingsContainer>
        <Logo height={100} width={100} ref={headingRef2} />
        <CenterAlignedColumnContainer backGroundcolor="none">
          <FormHeadingText id={props.id} ref={headingRef1}>
            {props.heading}
          </FormHeadingText>
        </CenterAlignedColumnContainer>
      </FormHeadingsContainer>
    </>
  );
});

export default FormHeadings;
