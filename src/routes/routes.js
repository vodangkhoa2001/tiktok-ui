import config from '~/config';
// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Tag from '~/pages/Tag';

// Public Routes
export const publicRoutes = [
    { path: config.routes.home, compnent: Home },
    { path: config.routes.following, compnent: Following },
    { path: config.routes.profile, compnent: Profile },
    { path: config.routes.live, compnent: Live },
    { path: config.routes.upload, compnent: Upload, layout: HeaderOnly },
    { path: config.routes.search, compnent: Search, layout: null },
    { path: config.routes.tag, compnent: Tag },
];

// Private Routes
export const privateRoutes = [];
