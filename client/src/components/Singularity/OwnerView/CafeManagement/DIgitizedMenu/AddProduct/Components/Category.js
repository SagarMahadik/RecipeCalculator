import React, { useContext } from 'react';
import addProductContext from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/State/addProductContext.js';
import StyledRadioButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledRadioButton.js';
import {
  DMenuFormContainer,
  CategoryContainer,
  SubCategoryContainer
} from 'styles/Singularity/OwnerView/CafeManagement/DigitizedMenu';
import FormSectionHeading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

const Category = () => {
  const AddProductContext = useContext(addProductContext);
  const {
    categoryData,
    isSubCategory,
    selectedCategory,
    handleSelectedCategory,
    setSubCategory,
    category,
    subCategory
  } = AddProductContext;

  return (
    <DMenuFormContainer>
      <FormSectionHeading sectionName="Category" />
      <CategoryContainer>
        {categoryData.map((Category, index) => {
          return (
            <StyledRadioButton
              display={Category.category}
              onClick={handleSelectedCategory}
              selected={category === `${Category.category}`}
              value={Category.category}
            />
          );
        })}
      </CategoryContainer>
      <PartialWidthDivider />
      {isSubCategory && (
        <>
          <FormSectionHeading sectionName="Sub - Category" />
          <SubCategoryContainer>
            {selectedCategory.map((category, i) =>
              category.subCategory.map(scategory => {
                return (
                  <StyledRadioButton
                    display={scategory}
                    value={scategory}
                    selected={subCategory === `${scategory}`}
                    onClick={setSubCategory}
                  />
                );
              })
            )}
          </SubCategoryContainer>
          <PartialWidthDivider />
        </>
      )}
    </DMenuFormContainer>
  );
};

export default Category;
