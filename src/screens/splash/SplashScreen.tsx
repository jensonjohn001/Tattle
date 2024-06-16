import React, { useEffect } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import switchTheme from 'react-native-theme-switch-animation';
import { Colors, Screens, Theme } from '../../utils/constants';
import { RootStackParamList } from '../../navigation/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { light, dark } from '../../redux/slice/themeSlice';


export default function SplashScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  //Actions
  const toggleTheme = () => {
    switchTheme({
      switchThemeFunction: () => {
        console.log('current theme val is: ', theme);
        dispatch(theme === Theme.Light ? dark() : light()); // your switch theme function
      },
      animationConfig: {
        type: 'circular',
        duration: 800,
        startingPoint: {
          cxRatio: 0.5,
          cyRatio: 0.5
        }
      },
    });
  }

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: Screens.HomeTabs }],
      });
    }, 4000);
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme === Theme.Light ? Colors.BackgroundLightColor : Colors.BackgroundDarkColor,
      }}>

      <Text style={{
        ...styles.logoText,
        color: theme === Theme.Light ? Colors.BlackColor : Colors.WhiteColor,
      }}>TATTLE <Text style={{ color: Colors.PrimaryColor }}>WAVE</Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 80,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }

});