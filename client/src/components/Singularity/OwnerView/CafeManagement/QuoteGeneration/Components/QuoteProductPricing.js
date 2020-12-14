import React, { useContext } from 'react';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import quoteGenerationContext from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/quoteGenerationContext.js';
import {
  QuoteManagementContainer,
  ProductPricingLabelContainer,
  LabelText,
  ProductPricingContentContainer,
  ProductName,
  TotalCostPerProduct,
  TotalProductSellingPrice,
  TotalProductUnitInQuote
} from 'styles/Singularity/OwnerView/CafeManagement/QuoteGeneration';

const QuoteProductPricing = () => {
  const QuoteGenerationContext = useContext(quoteGenerationContext);

  const { quoteproducts } = QuoteGenerationContext;

  return (
    <QuoteManagementContainer>
      <ProductPricingLabelContainer>
        <LabelText>Product Name</LabelText>
        <LabelText>No. Units Product</LabelText>
        <LabelText>Cost (/unit)</LabelText>
        <LabelText>Probable S. P.(Rs.) </LabelText>
        <LabelText>Total S. P. (Rs.)</LabelText>
      </ProductPricingLabelContainer>
      {quoteproducts.map((product, productIndex) => {
        return (
          <ProductPricingContentContainer isEven={productIndex % 2 === 0}>
            <ProductName>{product.name}</ProductName>
            <TotalProductUnitInQuote>
              {product.unitPerBaseQuantity}
            </TotalProductUnitInQuote>
            <TotalCostPerProduct>
              {Math.round(
                (Number(product.totalRMCOST) +
                  Number(product.totalBasicRecipeRMCOST)) /
                  product.unitPerBaseQuantity
              )}
            </TotalCostPerProduct>
            <TotalProductSellingPrice>
              {4 *
                Math.round(
                  (Number(product.totalRMCOST) +
                    Number(product.totalBasicRecipeRMCOST)) /
                    product.unitPerBaseQuantity
                )}
            </TotalProductSellingPrice>
            <TotalProductSellingPrice>
              {Math.round(
                Number(product.unitPerBaseQuantity) *
                  4 *
                  Math.round(
                    (Number(product.totalRMCOST) +
                      Number(product.totalBasicRecipeRMCOST)) /
                      product.unitPerBaseQuantity
                  )
              )}
            </TotalProductSellingPrice>
          </ProductPricingContentContainer>
        );
      })}
    </QuoteManagementContainer>
  );
};

export default QuoteProductPricing;
