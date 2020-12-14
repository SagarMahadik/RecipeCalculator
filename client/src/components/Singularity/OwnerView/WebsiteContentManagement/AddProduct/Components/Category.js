import React, {
  Fragment,
  useState,
  useEffect,
  useContext,
  useRef
} from 'react';

import { TextRadioButton } from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  CenterAlignedColumnContainer,
  CategoryContainer,
  SubCategoryContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  RadioButtonText,
  TextContainer,
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';
import Loaders from 'components/Singularity/ApplicationView/Loaders';

import animation from 'styles/Singularity/GSAPAnimations';

import { TweenMax, Power2, Bounce } from 'gsap';

const Category = React.forwardRef((props, setRef1) => {
  const AddProductContext = useContext(addProductContext);
  let categoryName = useRef(null);
  const categoryRefs = useRef([]);
  categoryRefs.current = [];
  const subcategoryRefs = useRef([]);
  subcategoryRefs.current = [];

  const {
    categoryData,
    getData,
    handleChange,
    handleSubCategory,
    Category,
    isSubCategory,
    selectedCategory,
    SubCategory
  } = AddProductContext;

  const [index, setIndex] = useState(null);

  useEffect(() => {
    console.log(categoryRefs.current);
    console.log(categoryName);
    if (categoryData.length === 0) {
      getData('/api/v1/category', 'SET_CATEGORYDATA');
    }
    TweenMax.to(categoryName, 0.5, {
      y: -8,
      ease: Power2.easeOut
    });
    TweenMax.to(categoryName, 0.8, {
      y: 0,
      ease: Power2.easeOut,
      delay: 0.4
    });

    TweenMax.to(categoryRefs.current[0], 0.5, {
      y: -10,
      ease: Power2.easeOut
    });
    TweenMax.to(categoryRefs.current[0], 0.8, {
      y: 0,
      ease: Bounce.easeOut,
      delay: 0.3
    });
  }, [categoryData]);

  /*
  const bounceElement = index => {
    console.log(`in a bouncelement moving element ${index}`);
    TweenMax.to(categoryRefs.current[index], 0.5, {
      y: -15,
      ease: Power2.easeOut
    });
    TweenMax.to(categoryRefs.current[index], 0.8, {
      y: 0,
      ease: Bounce.easeOut,
      delay: 0.1
    });
  };
  */

  const addToRefs = el => {
    if (el && !categoryRefs.current.includes(el)) {
      categoryRefs.current.push(el);
    }
  };
  const addToRefsSub = el => {
    if (el && !subcategoryRefs.current.includes(el)) {
      subcategoryRefs.current.push(el);
    }
  };

  return (
    <Fragment>
      <CenterAlignedColumnContainer>
        <FormSectionHeadingTextContainer>
          <FormHeadingText
            ref={el => {
              categoryName = el;
            }}
          >
            Category
          </FormHeadingText>
        </FormSectionHeadingTextContainer>

        {categoryData.length === 0 ? (
          <Loaders />
        ) : (
          <CategoryContainer>
            {categoryData.map((c, i) => {
              return (
                <TextRadioButton
                  value={c.category}
                  onClick={e => {
                    handleChange(e);
                    animation.bounceElement(categoryRefs.current, i);
                  }}
                  selected={Category === `${c.category}`}
                  ref={addToRefs}
                >
                  <RadioButtonText selected={Category === `${c.category}`}>
                    <TextContainer>{c.category}</TextContainer>
                  </RadioButtonText>
                </TextRadioButton>
              );
            })}
          </CategoryContainer>
        )}

        <PartialWidthDivider ref={setRef1} />

        {isSubCategory && (
          <>
            <FormHeadingText>
              <FormSectionHeadingTextContainer>
                Sub - Category
              </FormSectionHeadingTextContainer>
            </FormHeadingText>
            <SubCategoryContainer>
              {selectedCategory.map((category, i) =>
                category.subCategory.map(subcategory => {
                  {
                    return (
                      <TextRadioButton
                        value={subcategory}
                        onClick={e => {
                          handleSubCategory(e);
                          animation.bounceElement(subcategoryRefs.current, i);
                        }}
                        ref={addToRefsSub}
                        selected={SubCategory === `${subcategory}`}
                      >
                        <RadioButtonText
                          selected={SubCategory === `${subcategory}`}
                        >
                          <TextContainer>{subcategory}</TextContainer>
                        </RadioButtonText>
                      </TextRadioButton>
                    );
                  }
                })
              )}
            </SubCategoryContainer>
            <PartialWidthDivider />
          </>
        )}
      </CenterAlignedColumnContainer>
    </Fragment>
  );
});

export default Category;
