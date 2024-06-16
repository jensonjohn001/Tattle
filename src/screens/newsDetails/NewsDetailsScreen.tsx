import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStack';
import styles from './NewsDetailsScreen.styles';
import { useAppSelector } from '../../redux/hooks';
import { Colors, Theme } from '../../utils/constants';

type NewsDetailsScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetails'>;
type Props = {
    route: NewsDetailsScreenRouteProp;
};

const NewsDetailsScreen: React.FC<Props> = ({ route }) => {
    const { selectedNews } = route.params;

    const theme = useAppSelector((state) => state.theme.value)
    const backgroundColor = theme === Theme.Light ? Colors.BackgroundLightColor : Colors.BackgroundDarkColor;
    const oppositeColor = theme === Theme.Light ? Colors.BackgroundDarkColor : Colors.BackgroundLightColor;

    const injectedJavaScript = `
    // Check the selected theme and apply appropriate styles
    document.documentElement.style.backgroundColor = '${theme === 'dark' ? 'black' : 'white'}';
    document.documentElement.style.color = '${theme === 'dark' ? 'white' : 'black'}';
    // Add more styles or modifications as needed
  `;

    return (
        <>
            <StatusBar barStyle={theme === Theme.Light ? 'dark-content' : 'light-content'} />
            <SafeAreaView style={{ ...styles.container, backgroundColor: backgroundColor }}>

                <WebView
                    injectedJavaScript={injectedJavaScript}
                    javaScriptEnabled={true}
                    source={{ uri: selectedNews.url }} style={{ flex: 1 }}
                />


            </SafeAreaView>
        </>
    );
}


export default NewsDetailsScreen;