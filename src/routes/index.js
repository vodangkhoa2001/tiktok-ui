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
    { path: '/', compnent: Home },
    { path: '/following', compnent: Following },
    { path: '/profile', compnent: Profile },
    { path: '/upload', compnent: Upload, layout: HeaderOnly },
    { path: '/search', compnent: Search, layout: null },
]

// Private Routes
export const privateRoutes = [

]