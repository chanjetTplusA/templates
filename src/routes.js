import {routes} from 'tplusfx';
import VersionInfo from './pages/VersionInfo';

routes.registerRoutes([{
  path: '/version',
  component: VersionInfo
},{
  path: '/',
  component: VersionInfo
}]);
