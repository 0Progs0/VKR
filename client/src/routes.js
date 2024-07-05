import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    FAVORITES,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    MATERIAL_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    USER_MATERIALS
} from "./utils/consts";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import MaterialPage from "./pages/MaterialPage";
import ProfilePage from "./pages/ProfilePage";
import UserMaterialsPage from "./pages/UserMaterialsPage";
import { Component } from 'react'
import FavoritesPage from './pages/FavoritesPage'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: MATERIAL_ROUTE + '/:id',
        Component: MaterialPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: USER_MATERIALS,
        Component: UserMaterialsPage
    },
    {
        path: FAVORITES,
        Component: FavoritesPage
    }
]