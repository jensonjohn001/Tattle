import globals from "./globals";

export enum Screens {
    Splash = 'Splash',
    HomeTabs = 'HomeTabs',
    Home = 'Home',
    Explore = 'Explore',
    Saved = 'Saved',
    Profile = 'Profile',
    NewsDetails = 'NewsDetails',
}

export enum Strings {
    ThumbnailImage = 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=2000',
    Removed = '[Removed]',

}

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

export enum Colors {
    PrimaryColor = '#c91313',
    SecondaryColor = '#781836',
    WhiteColor = '#FFFFFF',
    BlackColor = '#000000',
    BackgroundLightColor = '#f3f3f3',
    BackgroundDarkColor = '#030303',
    TabBackgroundLightColor = '#d8d5d5',
    TabBackgroundDarkColor = '#232222',
    NewsItemBGDarkColor = '#1E1E1E',
    NewsItemBGLightColor = '#ebe5e5',
}

export enum Images {
    TabHomeIcon = require('../assets/images/tabHomeIcon.png'),
    TabExploreIcon = require('../assets/images/tabExploreIcon.png'),
    TabSavedIcon = require('../assets/images/tabSavedIcon.png'),
    TabProfileIcon = require('../assets/images/tabProfileIcon.png'),
    MenuIcon = require('../assets/images/menuIcon.png'),
    SearchIcon = require('../assets/images/searchIcon.png'),
    ThemeLightIcon = require('../assets/images/lightThemeIcon.png'),
    ThemeDarkIcon = require('../assets/images/darkThemeIcon.png'),
};

export enum API {
    ApiKey = 'ef5b910bb4a047d289c7366e96d9d9df',
    BaseURL = 'https://newsapi.org/v2/',
    TopHeadlines = 'top-headlines?country=us', //TODO: Need to change country
    ParamApiKey = '&apiKey=',
}