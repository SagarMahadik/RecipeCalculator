import React, { useLayoutEffect } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';

import ScrollToTop from 'Utils/ScrollToTop.js';

import { AnimatePresence } from 'framer-motion';

const FormInput = React.lazy(() =>
  import('styles/StylesLibrary/Frames/FormInputs/DarkTheme/FormInput.js')
);

const RawMaterialCard = React.lazy(() =>
  import(
    'styles/StylesLibrary/Molecules/DarkTheme/RecipeMolecules/RawMaterialCardMolecule.js'
  )
);

const PageButton = React.lazy(() =>
  import('styles/StylesLibrary/Frames/FormInputs/DarkTheme/PageButton.js')
);

const SampleOwnerDashBoard = React.lazy(() =>
  import(
    'styles/StylesLibrary/Frames/FormInputs/DarkTheme/SampleOwnerDashBoard.js'
  )
);

const LoginPage = React.lazy(() =>
  import('styles/StylesLibrary/Frames/FormInputs/DarkTheme/LoginPage.js')
);

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
  return (
    <Router>
      <ScrollToTop />
      <React.Suspense fallback={<p>...Loading</p>}>
        <AnimatePresence>
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
            <Route exact path="/styleLibrary" component={FormInput} />
            <Route exact path="/sampleLogin" component={LoginPage} />
            <Route
              exact
              path="/sampleRecipestyles"
              component={RawMaterialCard}
            />
            <Route
              exact
              path="/sampleOwnerDashboard"
              component={SampleOwnerDashBoard}
            />
            <Route exact path="/sampleButtons" component={PageButton} />
            <PrivateRoute exact path="/ownerDashboard" component={Navigation} />
            <Route exact="/digitalCafeMenu" component={DmenuDisplay} />
            <Route exact path="/gallery" component={ImageGallery} />
          </Switch>
        </AnimatePresence>
      </React.Suspense>
    </Router>
  );
}
