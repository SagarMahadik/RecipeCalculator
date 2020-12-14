import styled, { keyframes } from 'styled-components/macro';
import { SlideInRight, SlideInLeft } from '../Animations';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';

export const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  flex-direction: column;
  max-width: 500px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 30%;
  grid-gap: 20px;
`;

export const CenterAlignedColumnContainer = styled(ColumnContainer)`
  align-items: center;
  background: ${props => props.backGroundcolor || 'white'};
`;

export const LeftrAlignedColumnContainer = styled(ColumnContainer)`
  align-items: flex-start;
`;

export const RightAlignedColumnContainer = styled(ColumnContainer)`
  align-items: flex-end;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  flex-wrap: wrap;
  align-items: center;
  max-width: 500px;
  width: 100%;
`;

export const CenterAlignedRowContainer = styled(RowContainer)`
  justify-content: space-evenly;
`;

export const RightAlignedRowContainer = styled(RowContainer)`
  justify-content: flex-end;
`;

export const LeftAlignedRowContainer = styled(RowContainer)`
  width: 100%;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  background: ${props => props.backGroundcolor || 'white'};
`;

export const Box = styled.div`
  display: block;
  height: 100px;
  width: 100px;
  margin: 10px;
`;

export const PeruBox = styled(Box)`
  background: peru;
`;
export const LavenderBox = styled(Box)`
  background: lavender;
`;

export const CrimsonBox = styled(Box)`
  background: Crimson;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: fixed;
  top: 30%;
  left: 10px;
  align-items: center;
`;

export const BreakfastButton = styled(Button)`
  background: pink;
`;

export const SaladButton = styled(Button)`
  background: greenyellow;
  position: fixed;
  top: 40%;
  left: 10px;
`;

export const PastaButton = styled(Button)`
  background: purple;
  position: fixed;
  top: 50%;
  left: 10px;
`;

export const Bounce = keyframes`
 20%, 53%, 80%, 0%, 100% {
      -webkit-animation-timing-function: cubic-bezier(0.215,.61,.355,1);
      animation-timing-function: cubic-bezier(0.215,.61,.355,1);
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
  }
  40%, 43% {
      -webkit-animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      -webkit-transform: translate3d(0,-30px,0);
      transform: translate3d(0,-30px,0);
  }
  70% {
      -webkit-animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      -webkit-transform: translate3d(0,-15px,0);
      transform: translate3d(0,-15px,0);
  }
  90% {
      -webkit-transform: translate3d(0,-4px,0);
      transform: translate3d(0,-4px,0);
  }

`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const CategoryContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-evenly;
  margin-top: 2em;
  overflow-y: auto;

  animation: ${SlideInLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (min-width: 765px) {
    width: 60%;
  }
`;

export const SubCategoryContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-evenly;
  margin-top: 2em;
  animation: ${SlideInRight} 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (min-width: 765px) {
    width: 60%;
  }
`;

export const ProductTypeContainer = styled(CenterAlignedColumnContainer)`
  width: 90%;
  max-width: 100%;
  justify-content: space-evenly;
  margin-top: 0.5em;
`;

export const ProductStatusContainer = styled(CenterAlignedColumnContainer)`
  width: 90%;
  max-width: 100%;
  justify-content: space-evenly;
  margin-top: 0.5em;
`;
export const ProductVariantContainer = styled(CenterAlignedColumnContainer)`
  max-width: 100%;
`;

export const IconItemContainer = styled(ColumnContainer)`
  width: 30%;
  align-items: center;
  margin-top: 1em;
`;

export const IconItemGroupContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-between;
  margin-top: 1em;
`;

export const ItemPriceContainer = styled(RowContainer)`
  width: 90%;
  justify-content: center;
  background-color: ${props =>
    props.checked ? `${styles.formContentColor}` : 'none'};
`;

export const PreviewPageProductNameContainer = styled(ColumnContainer)`
  align-items: flex-start;
  justify-content: flex-start;
  height: 30px;
  width: 80%;
  flex-wrap: nowrap;
  padding-top: 8px;
`;

export const PreviewProductPriceContainer = styled(ColumnContainer)`
  height: 30px;
  padding-left: 5px;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding-top: -8px;
`;

export const NameCuisineIconContainer = styled(RowContainer)`
  justify-content: flex-start;
`;

export const MenuAlignmentContainer = styled(RowContainer)`
  justify-content: flex-start;
  width: 90%;
  align-items: baseline;
  flex-wrap: nowrap;
  margin-top: 1em;
`;

export const MenuPageIconContainer = styled(RowContainer)`
  width: 90%;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;

export const MenuPageDescriptionContainer = styled(RowContainer)`
  justify-content: flex-start;
  width: 80%;
`;

export const MenuPagePriceContainer = styled(RowContainer)`
  justify-content: flex-start;
  margin-top: 12px;
`;

export const ManuePageIconDescriptionContainer = styled(ColumnContainer)`
  height: 60px;
  align-items: center;
`;

export const HorizontalSilder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 1fr auto 1fr;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 375px;
  overflow-x: scroll;
`;

export const MainContainer = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`;

export const GalleryContainer = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`;

export const GsapConatiner = styled.div`
  display: flex;
  flex: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: scroll;
  height: 250px;
`;

/**Recipe Styles */

export const RecipeManagementContainer = styled(CenterAlignedColumnContainer)`
  width: 100%;
  max-width: 600px;
`;

export const SearchFilterContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-evenly;
  margin-top: 1em;
  overflow-y: auto;
  @media (min-width: 765px) {
    width: 60%;
  }
`;
