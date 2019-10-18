import {routes} from 'tplusfx';
import Home from '../pages/home';
import VersionInfo from '../pages/version-info';

routes.registerRoutes([{
  path: '/',
  component: Home
},{
  path: '/version',
  component: VersionInfo
}]);
