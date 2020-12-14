import React, { useContext } from 'react';

import HideIcon from 'components/Singularity/ApplicationView/Icons/HideIcon.js';
import { RotateIcon } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement/index.js';
import QuoteProductRawMaterials from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/Components/QuoteProduct/QuoteRawMaterials.js';
import QuoteProductBasicRecipes from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/Components/QuoteProduct/QuoteBasicRecipes.js';
import {
  QuoteManagementContainer,
  ProductInformationLabelContainer,
  LabelText,
  ProductInformationContainer,
  ProductName,
  TotalQuantity,
  TotalCost
} from 'styles/Singularity/OwnerView/CafeManagement/QuoteGeneration/index.js';

import quoteGenerationContext from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/quoteGenerationContext.js';

const QuoteProduct = () => {
  const QuoteGenerationContext = useContext(quoteGenerationContext);

  const {
    quoteproducts,
    handleQuoteProductUnits,
    handleProductDisplay
  } = QuoteGenerationContext;
  return (
    <>
      <QuoteManagementContainer>
        <ProductInformationLabelContainer>
          <LabelText>Product Name</LabelText>
          <LabelText>No. of Units</LabelText>
          <LabelText>Total food cost</LabelText>
        </ProductInformationLabelContainer>
        {quoteproducts.length > 0
          ? quoteproducts.map((product, productIndex) => {
              return (
                <>
                  <ProductInformationContainer key={productIndex}>
                    <ProductName>{product.name}</ProductName>
                    <TotalQuantity
                      type="number"
                      defaultValue={product.unitPerBaseQuantity}
                      onChange={handleQuoteProductUnits(productIndex)}
                    />
                    <TotalCost>
                      Rs.
                      {Math.round(
                        Number(product.totalRMCOST) +
                          Number(product.totalBasicRecipeRMCOST)
                      )}
                    </TotalCost>
                    <RotateIcon clicked={product.showItem}>
                      <HideIcon
                        onClick={() => handleProductDisplay(productIndex)}
                      />
                    </RotateIcon>
                  </ProductInformationContainer>

                  {product.showItem ? (
                    <>
                      {product.rawMaterialDetails && (
                        <QuoteProductRawMaterials
                          rawMaterials={product.rawMaterialDetails}
                          unit={product.unitPerBaseQuantity}
                        />
                      )}
                      {product.basicRecipeDetails && (
                        <QuoteProductBasicRecipes
                          index={productIndex}
                          basicRecipes={product.basicRecipeDetails}
                          unit={product.unitPerBaseQuantity}
                        />
                      )}
                    </>
                  ) : null}
                </>
              );
            })
          : null}
      </QuoteManagementContainer>
    </>
  );
};

export default QuoteProduct;
