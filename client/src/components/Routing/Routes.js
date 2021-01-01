import React, { useLayoutEffect } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';

const RecipeManagementMainComponent = React.lazy(() =>
  import(
    'components/Singularity/OwnerView/CafeManagement/RecipeManagement/RecipeManagementMainComponent.js'
  )
);
const RawMaterialManagementMainComponent = React.lazy(() =>
  import(
    'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/RawMaterialManagementMainComponent.js'
  )
);
const SupplierDetailsMainComponent = React.lazy(() =>
  import(
    'components/Singularity/OwnerView/CafeManagement/SupplierDetails/SupplierDetailsMainComponent.js'
  )
);
const QuoteGenerationMainComponent = React.lazy(() =>
  import(
    'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/QuoteGenerationMainComponent.js'
  )
);
const DMenuAddProductMainComponent = React.lazy(() =>
  import(
    'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/DMenuAddProductMainComponent.js'
  )
);
const DmenuDisplay = React.lazy(() =>
  import(
    'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/DmenuDisplay.js'
  )
);
const ImageGallery = React.lazy(() =>
  import('components/Singularity/ApplicationView/ImageGallery')
);
const DMenuProductMain = React.lazy(() =>
  import(
    'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/DMenuProductMain.js'
  )
);
const Navigation = React.lazy(() =>
  import(
    'components/Singularity/OwnerView/CafeManagement/Navigation/Navigation'
  )
);
const Register = React.lazy(() =>
  import(
    'components/Singularity/OwnerView/Authentication/Components/RegistrationMainComponent.js'
  )
);
const PrivateRoute = React.lazy(() =>
  import('components/Routing/PrivateRoute.js')
);
const LandingPage = React.lazy(() =>
  import(
    'components/Singularity/OwnerView/Authentication/Components/LandingPage.js'
  )
);

export default function Routes() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Router>
      <React.Suspense fallback={<p>...Loading</p>}>
        <Switch>
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
      </React.Suspense>
    </Router>
  );
}
