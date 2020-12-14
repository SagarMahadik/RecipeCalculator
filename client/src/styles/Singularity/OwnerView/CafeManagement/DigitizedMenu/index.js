import styled from 'styled-components/macro';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';
import { Link } from 'react-router-dom';
import {
  CenterAlignedColumnContainer,
  RowContainer,
  LeftAlignedRowContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  PTSansText,
  SacramentoText,
  ComicText
} from 'styles/Singularity/Style1.0/TextStyles';

export const DMenuFormContainer = styled(CenterAlignedColumnContainer)``;

export const CategoryContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-evenly;
  overflow-y: auto;

  @media (min-width: 765px) {
    width: 60%;
  }
`;

export const SubCategoryContainer = styled(CategoryContainer)``;

export const ProductTypeContainer = styled(CategoryContainer)``;

export const OuterBorder = styled(Link)`
  display: block;
  height: 140px;
  width: 140px;
  border: 2px solid ${styles.dMenuContentColor};
  border-radius: 15px;
  padding: 1px;
  margin-right: 10px;
  margin-top: 15px;
  margin-left: 20px;
  outline: none;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  background: ${props => props.backGroundcolor || 'white'};
`;

export const InnerBox = styled(CenterAlignedColumnContainer)`
  height: 130px;
  width: 130px;
  border: 2px solid ${styles.dMenuContentColor};
  border-radius: 10px;
  margin-top: 2px;
  padding: 1px;
  background: ${props => props.backGroundcolor || 'white'};
`;

export const Background = styled(CenterAlignedColumnContainer)`
  width: 100%;
  background: ${props => props.backGroundcolor || 'white'};
`;

export const CategoryText = styled(PTSansText)`
  font-size: 25px;
  color: ${styles.dMenuContentColor};
`;

export const DMenuCategoryContainer = styled(RowContainer)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  background: ${props => props.backGroundcolor || 'white'};
`;

export const DMenuSubCategoryContainer = styled(RowContainer)`
  width: 100%;
  background: ${props => props.backGroundcolor || 'white'};
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const DMenuProductContainer = styled(RowContainer)`
  width: 100%;
  background: ${props => props.backGroundcolor || 'white'};
`;

export const Category = styled(PTSansText)`
  color: ${styles.dMenuContentColor};
  font-size: 24px;
`;

export const SubCategory = styled(PTSansText)`
  color: ${styles.dMenuContentColor};
  font-size: 20px;
`;

export const MenuPageCategoryContainer = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
`;

export const MenuPageSubCategoryContainer = styled(RowContainer)`
  width: 100%;
  justify-content: flex-start;

  margin-left: 8px;
`;

export const MenuPageProductContainer = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
`;

export const MenuItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  justify-items: center;
  color: ${styles.dMenuContentColor};
  background: ${props => props.backGroundcolor || 'white'};
  padding: 5px;
`;

export const MenuItemText = styled(ComicText)`
  font-size: 16px;
  line-height: 25px;
  color: ${styles.dMenuContentColor};
`;

export const MenuPageCategoryLine = styled.div`
  display: block;
  border: 1px solid ${styles.dMenuContentColor};
  width: 100%;
  height: 0;
`;

export const CategoryButton = styled.div`
  width: 100;
  margin: 5px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 15px;
  border: 2px solid ${styles.dMenuContentColor};
  border: ${props =>
    props.active ? `2px solid white` : `2px solid ${styles.dMenuContentColor}`};
  color: ${props => (props.active ? 'white' : 'gold')};
  background: 'transperant';
  transition: transform 0.8s ease-out;
`;

export const DMenuProductMainContainer = styled(CenterAlignedColumnContainer)`
  width: 100%;
  &:last-child {
    margin-bottom: 500px;
  }
`;

export const HorizontalCategoryContainer = styled(LeftAlignedRowContainer)`
  position: sticky;
  flex-wrap: nowrap;
  top: 110px;
  z-index: 1;
  width: 100%;
  padding-left: 20px;
  justify-items: center;
  align-items: center;
`;
