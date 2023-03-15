import routesConfig from '~/config/routes'
// Layouts
import { HeaderOnly } from '~/components/Layout'


// Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

// Public Routes
export const publicRoutes = [
    { path: routesConfig.home, compnent: Home },
    { path: routesConfig.following, compnent: Following },
    { path: routesConfig.profile, compnent: Profile },
    { path: routesConfig.upload, compnent: Upload, layout: HeaderOnly },
    { path: routesConfig.search, compnent: Search, layout: null },
]

// Private Routes
export const privateRoutes = [

]