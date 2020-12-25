import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AddProductMainComponent from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/AddProductMainComponent';
import RecipeManagementMainComponent from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/RecipeManagementMainComponent.js';
import RawMaterialManagementMainComponent from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/RawMaterialManagementMainComponent.js';
import SupplierDetailsMainComponent from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/SupplierDetailsMainComponent.js';
import QuoteGenerationMainComponent from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/QuoteGenerationMainComponent.js';
import DMenuAddProductMainComponent from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/DMenuAddProductMainComponent.js';
import DmenuDisplay from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/DmenuDisplay.js';
import ImageGallery from 'components/Singularity/ApplicationView/ImageGallery';
import DMenuProductMain from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/DMenuProductMain.js';
import Navigation from 'components/Singularity/OwnerView/CafeManagement/Navigation/Navigation';
import Register from 'components/Singularity/OwnerView/Authentication/Components/RegistrationMainComponent.js';
import PrivateRoute from 'components/Routing/PrivateRoute.js';
import LandingPage from 'components/Singularity/OwnerView/Authentication/Components/LandingPage.js';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/addProduct" component={AddProductMainComponent} />
        <PrivateRoute
          exact
          path="/recipeManagement"
          component={RecipeManagementMainComponent}
        />
        <PrivateRoute
          exact
          path="/rawMaterialManagement"
          component={RawMaterialManagementMainComponent}
        />
        <PrivateRoute
          exact
          path="/supplierDetails"
          component={SupplierDetailsMainComponent}
        />
        <Route
          exact
          path="/quoteGeneration"
          component={QuoteGenerationMainComponent}
        />
        <Route
          exact
          path="/addProductDmenu"
          component={DMenuAddProductMainComponent}
        />{' '}
        <Route
          exact
          path="/cafeMenuProducts/:category"
          component={DMenuProductMain}
        />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LandingPage} />
        <PrivateRoute exact path="/ownerDashboard" component={Navigation} />
        <Route exact="/digitalCafeMenu" component={DmenuDisplay} />
        <Route exact path="/gallery" component={ImageGallery} />
      </Switch>
    </Router>
  );
}
