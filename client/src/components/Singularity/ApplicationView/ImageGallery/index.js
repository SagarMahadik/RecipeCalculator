import React, { useRef, UseEffect, useEffect } from 'react';
import {
  CenterAlignedColumnContainer,
  CenterAlignedRowContainer,
  LeftAlignedRowContainer,
  HorizontalSilder,
  SliderContainer,
  ImageContainer,
  HorizontalImage,
  MainContainer,
  GalleryContainer,
  GsapConatiner
} from 'styles/Singularity/Style1.0/ContainerStyles';
import { ProductImage, OverLay } from 'styles/Singularity/Style1.0/ImageStyles';

import { ThemeAnimationContainer } from 'styles/Singularity/Style1.0/Animations';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Frame, Scroll } from 'framer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Pagination, Navigation, Thumbs } from 'swiper';
import { motion, useAnimation } from 'framer-motion';
import Track from 'components/Singularity/ApplicationView/MotionSlider/Track.js';
import { Draggable } from 'gsap/Draggable';

import 'swiper/swiper-bundle.css';

import {
  ProductImageName,
  GalleryProducctNameContainer,
  ProductName
} from 'styles/Singularity/Style1.0/TextStyles';

import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

gsap.registerPlugin(ScrollTrigger, Draggable);

SwiperCore.use([Navigation, Pagination]);
SwiperCore.use([Thumbs]);

const Wrapper = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`;

function ImageGalley() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  let imageRef = useRef([]);
  const imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const PiattoImages = [
    {
      product: 'Macaron Gift Box',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464703/Christmas_Hamper_kg4mpe.jpg'
    },
    {
      product: 'Barley Salad',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464705/Barley_Salad_with_Hulk_SMoothie_new_wbhgms.jpg'
    },
    {
      product: 'Barley Salad ',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464705/NewBarley_Salad_with_Long_Black_p3ssfu.jpg'
    },
    {
      product: 'English Breakfast',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464703/English_breakfast_q0ophl.jpg'
    },
    {
      product: 'Scrambled Eggs ',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464701/Scrambled_eggs_with_chilly_mushroom_1_f24hhn.jpg'
    },
    {
      product: 'Spicy Chicken ',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Spicy_chicken_sandwich_ng9pft.jpg'
    },
    {
      product: 'Spicy Chicken',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Spicy_chicken_sandwich_nutty_chocolate_cappuccino_b23yze.jpg'
    },
    {
      product: 'Spicy Chicken',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Spicy_chicken_sandwich_nutty_chocolate_cappuccino_b23yze.jpg'
    },
    {
      product: 'Opera Wedding Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464704/Opera_-_Wedding_Cake_elcerc.jpg'
    },
    {
      product: 'Nutty Chocolate Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596371573/Nutty_Chocolate_Eggless_Cake_ete0xu.jpg'
    },
    {
      product: 'Wedding Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Wedding_Cake_sdk1gf.jpg'
    },
    {
      product: 'Wedding Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Wedding_Cake_1_o8ia5r.jpg'
    },
    {
      product: 'Dark Chocolate',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464703/Dark_Chocolate_w1uwez.jpg'
    },
    {
      product: 'HazelNut Forest Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464702/Hazelnut_forest_naked_cake_qcg9jz.jpg'
    },
    {
      product: 'Chocolate Orange Cake',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464704/NewChocolate_orange_Cake_hdb9e0.jpg'
    },
    {
      product: 'Cappuccino',
      productImageURL:
        'https://res.cloudinary.com/antilibrary/image/upload/v1596464704/NewCappuccino_with_macarons_kfekpq.jpg'
    }
  ];

  const imageRefs = useRef([]);
  imageRefs.current = [];
  const textRefs = useRef([]);
  textRefs.current = [];
  const dummyRef = useRef(null);
  const sliderRef = useRef(null);

  const proxy = document.createElement('div');
  const scroller = document.getElementById('scroller');

  Draggable.create(proxy, {
    type: 'x',
    trigger: scroller,
    onDrag: function() {
      console.log(this.proxy.offsetWidth);
    }
  });

  const addToRefs = el => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };
  const addToTextRefs = el => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };
  let index = 0;
  useEffect(() => {
    imageRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          filter: 'blur(0px)',
          scale: 1,
          autoAlpha: 0.98
        },
        {
          duration: 0.6,
          ease: 'power2',
          filter: 'blur(0px)',
          scale: 1,
          autoAlpha: 1,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            scroller: '.scroller',
            start: 'left 350',
            end: 'right 40',
            toggleActions: 'play none none none',
            horizontal: true,
            scrub: 1,
            onLeave: () =>
              gsap.to(el, {
                autoAlpha: 0,
                duration: 0.4,
                ease: 'power3.easeOut'
              }),
            onEnterBack: () =>
              gsap.to(el, {
                autoAlpha: 1,
                duration: 0.8,
                delay: 1.2,
                ease: 'powe2.easeOut'
              })
          }
        }
      );
    });

    textRefs.current.forEach((el, index) => {
      if (index === 0) {
        return;
      }
      gsap.fromTo(
        el,
        {
          autoAlpha: 0
        },
        {
          duration: 0.5,
          autoAlpha: 1,
          scrollTrigger: {
            id: `section-${index + 1}`,
            scroller: '.scroller',
            trigger: imageRefs.current[index - 1],
            toggleActions: 'play none none none',
            scrub: 1,
            start: 'right +=250',
            horizontal: true
          }
        }
      );
    });
    const slider = document.querySelector('.scroller');
    let isDown = false;
    let startX;
    let scrollLeft;
    let scrollRight;
    slider.addEventListener('pointerdown', e => {
      isDown = true;

      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      scrollRight = slider.scrollRight;
    });
    slider.addEventListener('pointerleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('pointerup', () => {
      isDown = false;
    });
    slider.addEventListener('pointermove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      slider.scrollRight = scrollRight + walk;
      console.log(walk);
    });
  }, []);

  const url = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 220"%3E%3C/svg%3E`;

  return (
    <>
      <ThemeAnimationContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeOut',
          duration: 1.2
        }}
        exit={{ opacity: 0 }}
      >
        <GalleryContainer>
          <h1>Hello</h1>
          <MainContainer class="mainContianer">
            <GsapConatiner className="scroller">
              {PiattoImages.map((product, index) => {
                return (
                  <>
                    {' '}
                    <CenterAlignedColumnContainer>
                      <div
                        ref={addToRefs}
                        style={{
                          padding: '15px',
                          marginRight: '24px',
                          display: 'flex'
                        }}
                      >
                        <OverLay />
                        <img
                          alt={product}
                          key={index}
                          style={{
                            width: '250px',
                            height: '180px',
                            borderRadius: '25px',
                            aspectRatio: '16:9',
                            imageRendering: 'crisp-edges'
                          }}
                          src={product.productImageURL}
                        />
                      </div>
                      <GalleryProducctNameContainer ref={addToTextRefs}>
                        <ProductName>{product.product}</ProductName>
                      </GalleryProducctNameContainer>
                    </CenterAlignedColumnContainer>
                  </>
                );
              })}
            </GsapConatiner>
          </MainContainer>
          <div ref={dummyRef}>Hello from framer</div>
        </GalleryContainer>
      </ThemeAnimationContainer>
    </>
  );
}

export default ImageGalley;
