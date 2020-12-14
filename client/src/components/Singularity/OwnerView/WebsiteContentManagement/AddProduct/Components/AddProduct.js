import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext
} from 'react';

import { useLocation } from 'react-router-dom';

import { SlideInRight } from 'styles/Singularity/Style1.0/Animations';

import { Background } from 'styles/Singularity/Style1.0/ApplicationStyles';
import Category from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/Category.js';
import ProductDetails from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/ProductDetails.js';
import UploadImage from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/UploadImage.js';
import ProductType from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/ProductType.js';
import ProductStatus from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/ProductStatus.js';
import AddOnItems from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddOnItems.js';
import AddOnFlavours from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddOnFlavours.js';
import ProductVariant from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/ProductVariant.js';
import NutritionalFacts from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/NutritionalFacts.js';
import ReviewPage from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/PreviewPage.js';

import {
  CenterAlignedColumnContainer,
  CenterAlignedRowContainer,
  CategoryContainer,
  SubCategoryContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';
import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';

import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';
import Sleepy from 'components/Singularity/ApplicationView/WaitingIcons/Sleepy';
import 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/styles/index.css';
import { MainProductConatiner } from 'styles/Singularity/Style1.0/Animations';

import ScrollAnimation from 'react-animate-on-scroll';

function AddProduct() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function useOnScreen(options) {
    const [ref, setRef] = React.useState(null);

    const [visible, setVisible] = useState(false);
    const [halfVisible, setHalfVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting);
      }, options);

      if (ref) {
        observer.observe(ref);
      }

      return () => {
        if (ref) {
          observer.unobserve(ref);
        }
      };
    }, [ref, options]);

    return [setRef, visible];
  }

  const AddProductContext = useContext(addProductContext);

  const {
    loading,
    getData,
    productStatusData,
    addOnitemData,
    selectedCategory,
    isFileUploadVisible,
    productPrice,
    productFileName,
    cuisine,
    isComplete,
    showLoader
  } = AddProductContext;

  const [setRef, visible] = useOnScreen({
    rootMargin: '100px 0px -60% 0px'
  });

  const [setRef1, fileUploadvisible] = useOnScreen({
    rootMargin: '100px 0px -60% 0px'
  });

  const scrollRef = useRef(null);

  const [showProductDetails, setProductDetials] = useState(false);
  const [showUploadFileDetails, setUploadFileDetails] = useState(false);
  const [showProductType, setShowProductTypeDetails] = useState(false);
  const [showProductStatus, setShowProductStatus] = useState(false);

  useEffect(() => {
    if (visible) {
      if (productStatusData.length === 0) {
        getData(
          '/api/v1/additionalProductInfomation/status',
          'SET_PRODUCTSTATUSDATA'
        );
        if (addOnitemData.length === 0) {
          getData('/api/v1/addOn/addOn', 'SET_ADDONITEMDATA');
        }
      }
    }

    if (selectedCategory.length > 0) {
      setProductDetials(true);
    }

    if (productPrice !== '') {
      setUploadFileDetails(true);
    }
    if (productFileName !== '') {
      setShowProductTypeDetails(true);
    }
    if (cuisine !== '') {
      setShowProductStatus(true);
    }
  }, [visible, selectedCategory, productPrice, productFileName, cuisine]);

  if (showLoader) {
    return <Ball loading={loading} isComplete={isComplete} />;
  }

  return (
    <>
      <MainProductConatiner
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeOut',
          duration: 0.8
        }}
        exit={{ opacity: 0 }}
      >
        <Background />

        <FormHeadings heading="Add Product To Menu" />

        <CenterAlignedColumnContainer>
          <Category />
          <div ref={setRef} />
          {showProductDetails ? <ProductDetails /> : null}

          {showUploadFileDetails ? <UploadImage /> : null}
          {showUploadFileDetails ? <ProductType /> : null}
          <div ref={scrollRef} style={{ width: '100%' }}>
            {showProductStatus ? <ProductStatus /> : null}
          </div>

          {showProductStatus ? (
            <ScrollAnimation
              animateIn="fadeInLeft"
              delay={0}
              style={{ width: '100%' }}
              duration={1.4}
              offset={180}
              animateOut="fadeOut"
            >
              {' '}
              <AddOnItems />{' '}
            </ScrollAnimation>
          ) : null}
          {showProductStatus ? (
            <ScrollAnimation
              animateIn="slideInLeft"
              delay={0}
              style={{ width: '100%' }}
              duration={1.2}
              offset={140}
              animateOut="fadeOut"
            >
              {' '}
              <AddOnFlavours />{' '}
            </ScrollAnimation>
          ) : null}
          {showProductStatus ? (
            <ScrollAnimation
              animateIn="slideInBottom"
              duration={0.5}
              delay={0}
              style={{ width: '100%' }}
              duration={1.8}
            >
              {' '}
              <ProductVariant />{' '}
            </ScrollAnimation>
          ) : null}
          {showProductStatus ? (
            <ScrollAnimation
              animateIn="slideInRight"
              duration={0.5}
              delay={0}
              style={{ width: '100%' }}
              duration={1.4}
              animateOut="fadeOut"
              animateOnce={true}
            >
              {' '}
              <NutritionalFacts />{' '}
            </ScrollAnimation>
          ) : null}
          {showProductStatus ? (
            <ScrollAnimation
              animateIn="slideInLeft"
              duration={0.5}
              delay={0}
              style={{ width: '100%' }}
              duration={1.4}
              animateOut="fadeOutLeft"
              animateOnce={true}
            >
              {' '}
              <ReviewPage />{' '}
            </ScrollAnimation>
          ) : null}
        </CenterAlignedColumnContainer>
      </MainProductConatiner>
    </>
  );
}

export default AddProduct;
