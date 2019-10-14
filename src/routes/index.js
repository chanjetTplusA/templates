import {routes} from 'tplusfx';
import VersionInfo from './pages/version-info';

routes.registerRoutes([{
  path: '/version',
  component: VersionInfo
},{
  path: '/',
  component: VersionInfo
}]);
