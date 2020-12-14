import React, { useContext } from 'react';
import LogoPiattoTagLine from 'components/Singularity/ApplicationView/MoleculeComponent/LogoWithPiattoTagline';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { DMenuCategoryContainer } from 'styles/Singularity/OwnerView/CafeManagement/DigitizedMenu/index.js';
import { ThemeAnimationContainer } from 'styles/Singularity/Style1.0/Animations';
import CategoryCard from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/ComponentDesign/CategoryCard.js';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';

const DmenuDisplay = () => {
  const ApplicationContext = useContext(applicationContext);
  const { categoryData } = ApplicationContext;

  return (
    <>
      <ThemeAnimationContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeOut',
          duration: 0.8
        }}
        exit={{ opacity: 0 }}
      >
        <CenterAlignedColumnContainer>
          <LogoPiattoTagLine backGroundcolor="rgba(0,0,0,0.8)" />
          <DMenuCategoryContainer backGroundcolor="rgba(0,0,0,0.8)">
            {categoryData.map((category, categoryIndex) => {
              return (
                <CategoryCard
                  value={category.category}
                  description={category.category}
                  identifier={category.categoryIdentifier}
                />
              );
            })}
          </DMenuCategoryContainer>
        </CenterAlignedColumnContainer>
      </ThemeAnimationContainer>
    </>
  );
};

export default DmenuDisplay;
