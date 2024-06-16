import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from '../utils/constants';
import { HomeScreen, NewsDetailsScreen, SplashScreen } from '../screens';
import HomeTabs from './HomeTabs';
import { Article } from '../redux/slice/newsSlice';

export type RootStackParamList = {
    Splash: undefined;
    HomeTabs: undefined;
    Home: undefined;
    Explore: undefined;
    Settings: {
        userId: number;
    };
    NewsDetails: {
        selectedNews: Article;
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={Screens.Splash}
            >
                <Stack.Screen name={Screens.Splash} component={SplashScreen} />
                <Stack.Screen name={Screens.HomeTabs} component={HomeTabs} />
                <Stack.Screen name={Screens.Home} component={HomeScreen} />
                <Stack.Screen name={Screens.NewsDetails} component={NewsDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;

