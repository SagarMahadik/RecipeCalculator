import React from 'react';
import Logo from 'components/Singularity/ApplicationView/Logo';
import PiattoTagLine from 'components/Singularity/ApplicationView/PiattoTagLine';
import {
  CenterAlignedColumnContainer,
  LeftAlignedRowContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

const LogoWithPiattoTagline = props => {
  return (
    <LeftAlignedRowContainer backGroundcolor={`${props.backGroundcolor}`}>
      <Logo />
      <PiattoTagLine />
    </LeftAlignedRowContainer>
  );
};

export default LogoWithPiattoTagline;
