import React, { useContext, useEffect, useRef } from 'react';
import MenuPageCategory from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/ComponentDesign/MenuPageCategory.js';
import MenuPageSubCategory from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/ComponentDesign/MenuPageSubCategory.js';
import MenuPageProduct from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/ComponentDesign/MenuPageProduct.js';
import LogoPiattoTagLine from 'components/Singularity/ApplicationView/MoleculeComponent/LogoWithPiattoTagline';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import displayDMenuContext from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/dMenuDisplayContext.js';
import { ThemeAnimationContainer } from 'styles/Singularity/Style1.0/Animations';

import { BrowserRouter as Router, useParams } from 'react-router-dom';
import {
  CenterAlignedColumnContainer,
  LeftAlignedRowContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  CategoryButton,
  DMenuProductMainContainer,
  HorizontalCategoryContainer
} from 'styles/Singularity/OwnerView/CafeManagement/DigitizedMenu/index.js';

import { produce } from 'immer';

const DmenuProducts = () => {
  let selectedCategory = useParams();

  const ApplicationContext = useContext(applicationContext);
  const DMenuDisplayContext = useContext(displayDMenuContext);

  let { categoryData, dMenuProductData } = ApplicationContext;
  const { setCategory, activeCategory, activeIndex } = DMenuDisplayContext;

  let newCategoryData = produce(categoryData, draftData => {
    draftData.forEach(function(cat, i) {
      if (cat.category === `${selectedCategory.category}`) {
        draftData.splice(i, 1);
        draftData.unshift(cat);
      }
    });
  });

  const categoryRefs = useRef([]);
  categoryRefs.current = [];

  const navigationCategoryRefs = useRef([]);
  navigationCategoryRefs.current = [];

  const mainContainerRef = useRef(null);

  const addToRefs = el => {
    if (el && !categoryRefs.current.includes(el)) {
      categoryRefs.current.push(el);
    }
  };

  const addNavigationRefs = el => {
    if (el && !navigationCategoryRefs.current.includes(el)) {
      navigationCategoryRefs.current.push(el);
      console.log(navigationCategoryRefs);
    }
  };

  const scrollTosection = index => {
    if (index > categoryData.length - 2) {
      setCategory(categoryData[index].category);
    }
    console.log(index);
    window.scrollTo({
      behavior: 'smooth',
      top: categoryRefs.current[index].offsetTop - 150
    });
  };

  useEffect(() => {
    const obserevr = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(entry.target.firstChild.nextSibling.innerText);
          let categoryIndex = newCategoryData.findIndex(
            cat =>
              cat.category === entry.target.firstChild.nextSibling.innerText
          );
          setCategory(
            entry.target.firstChild.nextSibling.innerText,
            categoryIndex
          );

          console.log(navigationCategoryRefs.current[categoryIndex].offsetLeft);
          if (categoryIndex > 3) {
            mainContainerRef.current.scrollLeft += 150;
          }
          if (categoryIndex < 3) {
            mainContainerRef.current.scrollLeft -= 150;
          }
          console.log(window.scroll);

          /**FInd index of the category..Scroll the horizontal  filter to te left */
        }
      },
      { rootMargin: `-202px 0px -62% 0px` }
    );

    if (categoryRefs.current) {
      categoryRefs.current.forEach((ref, index) => {
        obserevr.observe(categoryRefs.current[index]);
      });
    }

    return () => {
      if (categoryRefs.current) {
        categoryRefs.current.forEach((ref, index) => {
          obserevr.unobserve(categoryRefs.current[index]);
        });
      }
    };
  }, [categoryRefs, navigationCategoryRefs]);

  return (
    <ThemeAnimationContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeOut',
        duration: 0.8
      }}
      exit={{ opacity: 0 }}
    >
      <div
        style={{
          position: 'sticky',
          top: '0',
          zIndex: '1',
          width: '100%'
        }}
      >
        <LogoPiattoTagLine backGroundcolor="#2a2a2a" />
      </div>
      <CenterAlignedColumnContainer backGroundcolor=" #2a2a2a">
        <HorizontalCategoryContainer
          backGroundcolor="#2a2a2a"
          ref={mainContainerRef}
        >
          {newCategoryData.map((cat, index) => {
            return (
              <CategoryButton
                onClick={() => {
                  scrollTosection(index);
                }}
                active={cat.category === `${activeCategory}`}
                ref={addNavigationRefs}
                scrollLeft={activeIndex > 3}
              >
                {cat.category}
              </CategoryButton>
            );
          })}
        </HorizontalCategoryContainer>

        <DMenuProductMainContainer>
          {newCategoryData.map(c => {
            return (
              <CenterAlignedColumnContainer
                backGroundcolor=" #2a2a2a"
                ref={addToRefs}
              >
                <MenuPageCategory category={c.category} />
                {c.subCategory.length > 0 ? (
                  c.subCategory.map(subCatg => {
                    return (
                      <>
                        <MenuPageSubCategory subCategory={subCatg} />
                        {dMenuProductData
                          .filter(
                            prdct =>
                              prdct.category === `${c.category}` &&
                              prdct.subCategory === `${subCatg}`
                          )
                          .map(product => {
                            return (
                              <>
                                <MenuPageProduct
                                  productName={product.productName}
                                  productPrice={product.productPrice}
                                />
                              </>
                            );
                          })}
                      </>
                    );
                  })
                ) : dMenuProductData.filter(
                    prdct => prdct.category === `${c.category}`
                  ).length === 0 ? (
                  <h1>No Product</h1>
                ) : (
                  dMenuProductData
                    .filter(prdct => prdct.category === `${c.category}`)
                    .map(product => {
                      return (
                        <>
                          <MenuPageProduct
                            productName={product.productName}
                            productPrice={product.productPrice}
                          />
                        </>
                      );
                    })
                )}
              </CenterAlignedColumnContainer>
            );
          })}
        </DMenuProductMainContainer>
      </CenterAlignedColumnContainer>
    </ThemeAnimationContainer>
  );
};

export default DmenuProducts;
