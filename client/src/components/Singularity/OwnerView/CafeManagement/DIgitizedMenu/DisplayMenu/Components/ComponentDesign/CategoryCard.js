import React from 'react';

import {
  OuterBorder,
  InnerBox,
  CategoryText
} from 'styles/Singularity/OwnerView/CafeManagement/DigitizedMenu';

import Beverages from 'components/Singularity/ApplicationView/CategoryIcons/Beverages.js';
import Breakfast from 'components/Singularity/ApplicationView/CategoryIcons/Breakfast.js';
import Cakes from 'components/Singularity/ApplicationView/CategoryIcons/Cake.js';
import Desserts from 'components/Singularity/ApplicationView/CategoryIcons/Desserts.js';
import Gelatos from 'components/Singularity/ApplicationView/CategoryIcons/Gelatos.js';
import Salads from 'components/Singularity/ApplicationView/CategoryIcons/Salads.js';
import Sandwiches from 'components/Singularity/ApplicationView/CategoryIcons/Sandwiches.js';
import Pasta from 'components/Singularity/ApplicationView/CategoryIcons/Pasta.js';
import Burgers from 'components/Singularity/ApplicationView/CategoryIcons/Burgers.js';

const components = {
  beverages: Beverages,
  breakfast: Breakfast,
  cakes: Cakes,
  desserts: Desserts,
  gelatos: Gelatos,
  salads: Salads,
  sandwiches: Sandwiches,
  pasta: Pasta,
  burgers: Burgers
};

function CategoryIcon(props) {
  const RenderComponent = components[props.identifier];
  return React.createElement(RenderComponent, {});
}

const CategoryCard = props => {
  return (
    <OuterBorder
      backGroundcolor="rgba(0,0,0,0.8)"
      value={props.value}
      onClick={props.onClick}
      to={`/cafeMenuProducts/${props.description}`}
    >
      <InnerBox backGroundcolor="rgba(0,0,0,0.8)">
        <div style={{ marginTop: '10px' }}>
          <CategoryIcon identifier={props.identifier} />
        </div>

        <CategoryText>{props.description}</CategoryText>
      </InnerBox>
    </OuterBorder>
  );
};

export default CategoryCard;
