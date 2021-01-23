import React from 'react';
import { AnimationContainer } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

const BasicRecipeCardElements = ({ children, delay }) => {
  return (
    <AnimationContainer
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{
        ease: [0.83, 0, 0.17, 1],
        duration: 1.0,
        delay: `${delay}`
      }}
      exit={{ height: 0, opacity: 0 }}
    >
      {children}
    </AnimationContainer>
  );
};

export default BasicRecipeCardElements;
