import React, { useEffect, useRef } from 'react';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { TimelineLite, Power3, Power2, Linear, RoughEase, gsap } from 'gsap';

import {
  Background,
  LandingPageContainer,
  BackgroundImage,
  LandingPageContentContainer,
  ContentContainer,
  Content,
  Button,
  Quote,
  AuthorName,
  GalleryLink
} from 'styles/Singularity/Style1.0/LaandingPageStyles';
import { useLocation } from 'react-router-dom';

import Logo from 'components/Singularity/ApplicationView/Logo';

const LandingPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let image = useRef(null);
  let overlay = useRef(null);
  let logo = useRef(null);
  let contentRef = useRef([]);
  let tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      logo,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.easeInOut', scale: 1.5 }
    );
    tl.fromTo(
      contentRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.0,
        ease: Power2.easeInOut,
        stagger: { each: 0.7, ease: 'power3.easeInOut' }
      }
    );
    tl.to(overlay, 1.6, {
      width: '0%',
      ease: Power3.easeInOut,
      delay: -1.2
    });
    tl.fromTo(
      image,
      {
        filter: 'blur(0px)',
        opacity: 0
      },
      {
        scale: 1.4,
        filter: 'blur(2px)',
        ease: Power2.easeInOut,
        delay: -1.6,
        duration: 1.6,
        opacity: 1
      }
    );
    tl.fromTo(
      contentRef.current[2],
      0.5,
      { x: 10 },
      {
        x: -10,
        ease: 'wiggle',
        clearProps: 'x',
        delay: -0.4
      }
    );
  });

  return (
    <LandingPageContainer>
      <Background
        ref={el => {
          overlay = el;
        }}
      >
        {' '}
      </Background>
      <BackgroundImage
        ref={el => {
          image = el;
        }}
        src="https://res.cloudinary.com/antilibrary/image/upload/v1596298612/Piatto/IMG_0470_1_hlcmy6.jpg"
      />

      <LandingPageContentContainer>
        <ContentContainer>
          <GalleryLink to="/gallery">
            <Logo
              ref={el => {
                logo = el;
              }}
            />
          </GalleryLink>

          <Content
            ref={el => {
              contentRef.current[0] = el;
            }}
          >
            Premium handcrafted delicacies
          </Content>
          <Button
            ref={el => {
              contentRef.current[2] = el;
            }}
            to="/digitalCafeMenu"
          >
            Lets go!
          </Button>
          <div
            ref={el => {
              contentRef.current[1] = el;
            }}
          >
            <Quote>I'm not a vegetarian, I'm a dessertarian</Quote>
            <AuthorName>Bill Waterson</AuthorName>
          </div>
        </ContentContainer>
      </LandingPageContentContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
